"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Share2,
  Flag,
  Heart,
  ShoppingCart,
  AlertTriangle,
  Info,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CertificationBadges } from "@/components/certification-badges";
import { NutritionalFacts } from "@/components/nutritional-facts";
import { SimilarProducts } from "@/components/similar-products";
import { ProducerInfo } from "@/components/producer-info";
import Image from "next/image";

// Mock product data - in real app, this would come from API based on slug
const productData = {
  id: 1,
  name: "Organic Coconut Oil",
  description:
    "Premium cold-pressed virgin coconut oil made from fresh coconuts sourced from sustainable farms in Quezon Province. Rich in medium-chain triglycerides (MCTs) and perfect for cooking, baking, and skincare.",
  category: "Oils & Vinegars",
  price: "₱250.00",
  weight: "500ml",
  images: [
    "/coconut.webp",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  certifications: ["organic", "fda", "halal"],
  ingredients: [
    "100% Pure Virgin Coconut Oil",
    "No additives or preservatives",
  ],
  allergens: ["May contain traces of tree nuts"],
  nutritionalInfo: {
    calories: 120,
    protein: 0,
    carbs: 0,
    fat: 14,
    fiber: 0,
    sodium: 0,
  },
  servingSize: "1 tablespoon (15ml)",
  manufacturingInfo: {
    batchNumber: "B2024001",
    expiryDate: "2025-12-31",
    origin: "Quezon Province, Philippines",
  },
  producer: {
    name: "Barkov's Kitchen",
    description:
      "A family-owned business dedicated to producing high-quality, organic coconut products. We work directly with local farmers to ensure sustainable practices and fair trade.",
    location: "Lucena City, Quezon",
    phone: "+63 917 123 4567",
    email: "hello@mariaskitchen.ph",
    website: "https://mariaskitchen.ph",
    established: "2018",
    logo: "/kitchen.webp?height=64&width=64",
  },
  qrScans: 1247,
  lastScanned: "2 minutes ago",
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productData.name,
          text: `Check out this ${productData.name} from ${productData.producer.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div>
                <h1 className="font-semibold text-lg truncate max-w-[200px]">
                  {productData.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {productData.producer.name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isLiked ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Flag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Images */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={
                      productData.images[currentImageIndex] ||
                      "/placeholder.svg"
                    }
                    alt={productData.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover rounded-t-lg"
                  />
                  {productData.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {productData.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Product Info */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-bold">{productData.name}</h2>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {productData.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {productData.weight}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mb-3">
                      {productData.category}
                    </Badge>
                  </div>

                  <CertificationBadges
                    certifications={productData.certifications}
                  />

                  <p className="text-gray-700 leading-relaxed">
                    {productData.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      <div>Origin: {productData.manufacturingInfo.origin}</div>
                      <div>
                        Batch: {productData.manufacturingInfo.batchNumber}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground text-right">
                      <div>{productData.qrScans.toLocaleString()} scans</div>
                      <div>Last scanned {productData.lastScanned}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {productData.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span className="text-sm">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Allergen Warning */}
            {productData.allergens.length > 0 && (
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Allergen Information:</strong>{" "}
                  {productData.allergens.join(", ")}
                </AlertDescription>
              </Alert>
            )}

            {/* Nutritional Facts */}
            <NutritionalFacts
              nutritionalInfo={productData.nutritionalInfo}
              servingSize={productData.servingSize}
            />

            {/* Manufacturing Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Manufacturing Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Batch Number:</span>
                    <div className="text-muted-foreground">
                      {productData.manufacturingInfo.batchNumber}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Best Before:</span>
                    <div className="text-muted-foreground">
                      {productData.manufacturingInfo.expiryDate}
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-sm">Origin:</span>
                  <div className="text-sm text-muted-foreground">
                    {productData.manufacturingInfo.origin}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Producer Info */}
            <ProducerInfo producer={productData.producer} />

            {/* Similar Products */}
            <SimilarProducts />

            {/* Trust Indicators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Why Trust This Product?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                  <div className="text-sm">
                    <div className="font-medium">Verified Certifications</div>
                    <div className="text-muted-foreground">
                      All certifications verified by FoodForYou
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                  <div className="text-sm">
                    <div className="font-medium">Local Producer</div>
                    <div className="text-muted-foreground">
                      Supporting local Filipino businesses
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                  <div className="text-sm">
                    <div className="font-medium">Transparent Information</div>
                    <div className="text-muted-foreground">
                      Complete ingredient and manufacturing details
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 bg-white rounded-lg p-6 border">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">
              Interested in this product?
            </h3>
            <p className="text-muted-foreground">
              Contact the producer directly or find it at local stores.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Find in Stores
              </Button>
              <Button variant="outline">Contact Producer</Button>
            </div>
          </div>
        </div>

        {/* Powered by FoodForYou */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Powered by</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">F</span>
              </div>
              <span className="font-semibold">FoodForYou</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Transparent food information for conscious consumers
          </p>
        </div>
      </div>
    </div>
  );
}
