"use client";

import { useState } from "react";
import { Plus, Package } from "lucide-react";

import { ProductForm, ProductData } from "@/components/product-form";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductsList } from "@/components/products-list";
import { SuccessModal } from "@/components/success-modal";
import Link from "next/link";

export default function ProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedProductName, setSubmittedProductName] = useState("");

  // Remove the local Product interface, use ProductData from product-form.tsx

  const handleProductSubmit = (productData: ProductData) => {
    // Here you would typically send the data to your API
    console.log("Product submitted:", productData);

    // Ensure name is a string (FormDataEntryValue | null)
    const name = typeof productData.name === "string" ? productData.name : "";

    setSubmittedProductName(name);
    setShowForm(false);
    setShowSuccessModal(true);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setSubmittedProductName("");
  };

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center space-x-2">
          <Badge variant="secondary" className="bg-green-50 text-green-700">
            12/15 Products Used
          </Badge>
          {!showForm && (
            <Button
              onClick={() => setShowForm(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          )}
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {!showForm ? (
          <>
            {/* Page Header */}
            <div className="rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Package className="h-6 w-6 mr-2" />
                    Product Management
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Add and manage your food products with detailed information
                    and certifications.
                  </p>
                  <Link
                    href={"/p/1"}
                    className="hover:underline text-blue-500 text-xs"
                  >
                    Show sample product
                  </Link>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Growth Plan</p>
                  <p className="text-lg font-semibold text-green-600">
                    12 of 15 products
                  </p>
                </div>
              </div>
            </div>

            <ProductsList />
          </>
        ) : (
          <>
            <div className="rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Add New Product
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Provide detailed information about your food product
                    including certifications and ingredients.
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Step 1 of 2: Product Details
                </Badge>
              </div>
            </div>

            <ProductForm
              onSubmit={handleProductSubmit}
              onCancel={handleFormCancel}
            />
          </>
        )}
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        productName={submittedProductName}
      />
    </>
  );
}
