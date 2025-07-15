"use client";

import { Check, Clock, FileText } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  productName,
}: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <DialogTitle className="text-xl">
            Product Submitted Successfully!
          </DialogTitle>
          <DialogDescription className="text-center space-y-2">
            <p className="font-medium text-gray-900">
              &ldquo;{productName}&ldquo; has been submitted for review.
            </p>
            <p className="text-sm text-gray-600">
              Our admin team will review your product details and certifications
              within 24-48 hours.
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">
                  What happens next?
                </h4>
                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                  <li>• Admin review of product information</li>
                  <li>• Verification of certifications</li>
                  <li>• QR code generation upon approval</li>
                  <li>• Email notification with results</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium">Review Status</span>
            </div>
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800"
            >
              Pending Review
            </Badge>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mt-6">
          <Button onClick={onClose} className="w-full">
            Continue to Dashboard
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full bg-transparent"
          >
            Add Another Product
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
