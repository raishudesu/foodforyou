"use client";

import type React from "react";

import { useState } from "react";
import { Plus, X, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const certifications = [
  { id: "fda", label: "FDA Approved", color: "bg-blue-100 text-blue-800" },
  {
    id: "halal",
    label: "Halal Certified",
    color: "bg-green-100 text-green-800",
  },
  {
    id: "vegetarian",
    label: "Vegetarian",
    color: "bg-orange-100 text-orange-800",
  },
  { id: "vegan", label: "Vegan", color: "bg-purple-100 text-purple-800" },
  { id: "organic", label: "Organic", color: "bg-emerald-100 text-emerald-800" },
  {
    id: "gluten-free",
    label: "Gluten Free",
    color: "bg-yellow-100 text-yellow-800",
  },
  { id: "non-gmo", label: "Non-GMO", color: "bg-pink-100 text-pink-800" },
  { id: "kosher", label: "Kosher", color: "bg-indigo-100 text-indigo-800" },
];

const categories = [
  "Oils & Vinegars",
  "Sweeteners",
  "Snacks",
  "Dried Fruits",
  "Beverages",
  "Condiments",
  "Spices & Seasonings",
  "Baked Goods",
  "Dairy Products",
  "Meat & Poultry",
  "Seafood",
  "Others",
];

export interface ProductData {
  name: FormDataEntryValue | null;
  description: FormDataEntryValue | null;
  category: FormDataEntryValue | null;
  price: FormDataEntryValue | null;
  weight: FormDataEntryValue | null;
  manufacturer: FormDataEntryValue | null;
  origin: FormDataEntryValue | null;
  expiryDate: FormDataEntryValue | null;
  batchNumber: FormDataEntryValue | null;
  ingredients: string[];
  allergens: string[];
  certifications: string[];
  nutritionalInfo: {
    calories: FormDataEntryValue | null;
    protein: FormDataEntryValue | null;
    carbs: FormDataEntryValue | null;
    fat: FormDataEntryValue | null;
    fiber: FormDataEntryValue | null;
    sodium: FormDataEntryValue | null;
  };
  images: File[];
}

interface ProductFormProps {
  onSubmit: (data: ProductData) => void;
  onCancel: () => void;
}

export function ProductForm({ onSubmit, onCancel }: ProductFormProps) {
  const [selectedCertifications, setSelectedCertifications] = useState<
    string[]
  >([]);
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [allergens, setAllergens] = useState<string[]>([""]);
  const [images, setImages] = useState<File[]>([]);

  const handleCertificationChange = (certId: string, checked: boolean) => {
    if (checked) {
      setSelectedCertifications([...selectedCertifications, certId]);
    } else {
      setSelectedCertifications(
        selectedCertifications.filter((id) => id !== certId)
      );
    }
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const updateIngredient = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const addAllergen = () => {
    setAllergens([...allergens, ""]);
  };

  const updateAllergen = (index: number, value: string) => {
    const updated = [...allergens];
    updated[index] = value;
    setAllergens(updated);
  };

  const removeAllergen = (index: number) => {
    setAllergens(allergens.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const productData = {
      name: formData.get("name"),
      description: formData.get("description"),
      category: formData.get("category"),
      price: formData.get("price"),
      weight: formData.get("weight"),
      manufacturer: formData.get("manufacturer"),
      origin: formData.get("origin"),
      expiryDate: formData.get("expiryDate"),
      batchNumber: formData.get("batchNumber"),
      ingredients: ingredients.filter((i) => i.trim() !== ""),
      allergens: allergens.filter((a) => a.trim() !== ""),
      certifications: selectedCertifications,
      nutritionalInfo: {
        calories: formData.get("calories"),
        protein: formData.get("protein"),
        carbs: formData.get("carbs"),
        fat: formData.get("fat"),
        fiber: formData.get("fiber"),
        sodium: formData.get("sodium"),
      },
      images: images,
    };

    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            Essential details about your product
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g., Organic Coconut Oil"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your product, its benefits, and what makes it special..."
              className="min-h-[100px]"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (₱) *</Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight/Volume *</Label>
              <Input
                id="weight"
                name="weight"
                placeholder="e.g., 500ml, 250g"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="origin">Country of Origin</Label>
              <Input
                id="origin"
                name="origin"
                placeholder="e.g., Philippines"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>Certifications & Standards</CardTitle>
          <CardDescription>
            Select all applicable certifications for your product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center space-x-2">
                <Checkbox
                  id={cert.id}
                  checked={selectedCertifications.includes(cert.id)}
                  onCheckedChange={(checked) =>
                    handleCertificationChange(cert.id, checked as boolean)
                  }
                />
                <Label htmlFor={cert.id} className="text-sm font-medium">
                  {cert.label}
                </Label>
              </div>
            ))}
          </div>
          {selectedCertifications.length > 0 && (
            <div className="mt-4">
              <Label className="text-sm font-medium">
                Selected Certifications:
              </Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedCertifications.map((certId) => {
                  const cert = certifications.find((c) => c.id === certId);
                  return (
                    <Badge key={certId} className={cert?.color}>
                      {cert?.label}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Ingredients */}
      <Card>
        <CardHeader>
          <CardTitle>Ingredients</CardTitle>
          <CardDescription>
            List all ingredients in order of quantity (highest to lowest)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={ingredient}
                onChange={(e) => updateIngredient(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
                className="flex-1"
              />
              {ingredients.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeIngredient(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addIngredient}
            className="w-full bg-transparent"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Ingredient
          </Button>
        </CardContent>
      </Card>

      {/* Allergens */}
      <Card>
        <CardHeader>
          <CardTitle>Allergens</CardTitle>
          <CardDescription>
            List any allergens present in your product
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {allergens.map((allergen, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                value={allergen}
                onChange={(e) => updateAllergen(index, e.target.value)}
                placeholder={`Allergen ${
                  index + 1
                } (e.g., Contains nuts, dairy)`}
                className="flex-1"
              />
              {allergens.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => removeAllergen(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addAllergen}
            className="w-full bg-transparent"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Allergen
          </Button>
        </CardContent>
      </Card>

      {/* Nutritional Information */}
      <Card>
        <CardHeader>
          <CardTitle>Nutritional Information</CardTitle>
          <CardDescription>
            Per serving nutritional values (optional but recommended)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="calories">Calories</Label>
              <Input
                id="calories"
                name="calories"
                type="number"
                placeholder="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="protein">Protein (g)</Label>
              <Input
                id="protein"
                name="protein"
                type="number"
                step="0.1"
                placeholder="0.0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="carbs">Carbohydrates (g)</Label>
              <Input
                id="carbs"
                name="carbs"
                type="number"
                step="0.1"
                placeholder="0.0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fat">Total Fat (g)</Label>
              <Input
                id="fat"
                name="fat"
                type="number"
                step="0.1"
                placeholder="0.0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fiber">Fiber (g)</Label>
              <Input
                id="fiber"
                name="fiber"
                type="number"
                step="0.1"
                placeholder="0.0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sodium">Sodium (mg)</Label>
              <Input id="sodium" name="sodium" type="number" placeholder="0" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manufacturing Details */}
      <Card>
        <CardHeader>
          <CardTitle>Manufacturing Details</CardTitle>
          <CardDescription>Production and quality information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="manufacturer">Manufacturer/Producer *</Label>
              <Input
                id="manufacturer"
                name="manufacturer"
                placeholder="Your business name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batchNumber">Batch Number</Label>
              <Input
                id="batchNumber"
                name="batchNumber"
                placeholder="e.g., B2024001"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Best Before Date</Label>
            <Input id="expiryDate" name="expiryDate" type="date" />
          </div>
        </CardContent>
      </Card>

      {/* Product Images */}
      <Card>
        <CardHeader>
          <CardTitle>Product Images</CardTitle>
          <CardDescription>
            Upload high-quality images of your product (max 5 images)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG up to 5MB each</p>
            <Input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <Label htmlFor="image-upload" className="cursor-pointer">
              <Button
                type="button"
                variant="outline"
                className="mt-2 bg-transparent"
              >
                Choose Files
              </Button>
            </Label>
          </div>
          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    src={URL.createObjectURL(image) || "/placeholder.svg"}
                    alt={`Product ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Form Actions */}
      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          Submit for Review
        </Button>
      </div>
    </form>
  );
}
