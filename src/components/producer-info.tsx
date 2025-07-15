import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, MessageCircle } from "lucide-react";
import Image from "next/image";

interface ProducerInfoProps {
  producer: {
    name: string;
    description: string;
    location: string;
    phone?: string;
    email?: string;
    website?: string;
    established: string;
    logo: string;
  };
}

export function ProducerInfo({ producer }: ProducerInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">About the Producer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Image
            src={producer.logo || "/placeholder.svg"}
            alt={`${producer.name} logo`}
            width={400}
            height={400}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{producer.name}</h3>
            <p className="text-sm text-muted-foreground">
              Est. {producer.established}
            </p>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {producer.location}
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-700">{producer.description}</p>

        <div className="space-y-2">
          {producer.phone && (
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
              <a
                href={`tel:${producer.phone}`}
                className="text-blue-600 hover:underline"
              >
                {producer.phone}
              </a>
            </div>
          )}
          {producer.email && (
            <div className="flex items-center text-sm">
              <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
              <a
                href={`mailto:${producer.email}`}
                className="text-blue-600 hover:underline"
              >
                {producer.email}
              </a>
            </div>
          )}
          {producer.website && (
            <div className="flex items-center text-sm">
              <Globe className="w-4 h-4 mr-2 text-muted-foreground" />
              <a
                href={producer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>

        <Button className="w-full bg-transparent" variant="outline">
          <MessageCircle className="w-4 h-4 mr-2" />
          Contact Producer
        </Button>
      </CardContent>
    </Card>
  );
}
