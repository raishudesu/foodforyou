import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

const similarProducts = [
  {
    id: 1,
    name: "Premium Coconut Oil",
    producer: "Island Harvest Co.",
    price: "₱280.00",
    rating: 4.8,
    image: "/placeholder.svg?height=80&width=80",
    certifications: ["organic", "fda"],
  },
  {
    id: 2,
    name: "Cold-Pressed Coconut Oil",
    producer: "Pure Nature Foods",
    price: "₱320.00",
    rating: 4.9,
    image: "/placeholder.svg?height=80&width=80",
    certifications: ["organic", "vegan"],
  },
  {
    id: 3,
    name: "Virgin Coconut Oil",
    producer: "Tropical Essence",
    price: "₱240.00",
    rating: 4.7,
    image: "/placeholder.svg?height=80&width=80",
    certifications: ["organic"],
  },
];

export function SimilarProducts() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Similar Products</h3>
      <div className="space-y-3">
        {similarProducts.map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {product.producer}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {product.certifications.slice(0, 2).map((cert) => (
                      <Badge
                        key={cert}
                        variant="secondary"
                        className="text-xs px-1 py-0"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
