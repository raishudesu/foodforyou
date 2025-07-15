"use client";

import { MoreHorizontal, Eye, Edit, Trash2, QrCode } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: 1,
    name: "Organic Coconut Oil",
    category: "Oils & Vinegars",
    status: "approved",
    scans: 1247,
    certifications: ["organic", "fda"],
    dateAdded: "2024-01-15",
    price: "₱250.00",
  },
  {
    id: 2,
    name: "Artisan Honey",
    category: "Sweeteners",
    status: "approved",
    scans: 892,
    certifications: ["organic"],
    dateAdded: "2024-01-10",
    price: "₱180.00",
  },
  {
    id: 3,
    name: "Traditional Rice Cakes",
    category: "Snacks",
    status: "pending",
    scans: 0,
    certifications: ["halal", "vegetarian"],
    dateAdded: "2024-01-20",
    price: "₱120.00",
  },
  {
    id: 4,
    name: "Dried Mangoes",
    category: "Dried Fruits",
    status: "approved",
    scans: 543,
    certifications: ["organic", "vegan"],
    dateAdded: "2024-01-08",
    price: "₱200.00",
  },
  {
    id: 5,
    name: "Coconut Vinegar",
    category: "Oils & Vinegars",
    status: "rejected",
    scans: 0,
    certifications: ["organic"],
    dateAdded: "2024-01-18",
    price: "₱150.00",
  },
];

const certificationLabels: Record<string, { label: string; color: string }> = {
  fda: { label: "FDA", color: "bg-blue-100 text-blue-800" },
  halal: { label: "Halal", color: "bg-green-100 text-green-800" },
  vegetarian: { label: "Vegetarian", color: "bg-orange-100 text-orange-800" },
  vegan: { label: "Vegan", color: "bg-purple-100 text-purple-800" },
  organic: { label: "Organic", color: "bg-emerald-100 text-emerald-800" },
};

const statusColors = {
  approved: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  rejected: "bg-red-100 text-red-800",
};

export function ProductsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Products</CardTitle>
        <CardDescription>
          Manage your product listings and track their performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Certifications</TableHead>
              <TableHead>QR Scans</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Added {product.dateAdded}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      statusColors[product.status as keyof typeof statusColors]
                    }
                  >
                    {product.status.charAt(0).toUpperCase() +
                      product.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {product.certifications.map((cert) => (
                      <Badge
                        key={cert}
                        variant="secondary"
                        className={`text-xs ${
                          certificationLabels[cert]?.color ||
                          "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {certificationLabels[cert]?.label || cert}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1">
                    <QrCode className="h-4 w-4 text-muted-foreground" />
                    <span>{product.scans.toLocaleString()}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{product.price}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Product
                      </DropdownMenuItem>
                      {product.status === "approved" && (
                        <DropdownMenuItem>
                          <QrCode className="mr-2 h-4 w-4" />
                          Download QR Code
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Product
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
