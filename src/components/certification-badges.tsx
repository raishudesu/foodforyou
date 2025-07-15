import { Shield, Leaf, Heart, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certificationIcons = {
  fda: Shield,
  halal: Award,
  vegetarian: Leaf,
  vegan: Heart,
  organic: Leaf,
  "gluten-free": Shield,
  "non-gmo": Leaf,
  kosher: Award,
};

const certificationColors = {
  fda: "bg-blue-50 text-blue-700 border-blue-200",
  halal: "bg-green-50 text-green-700 border-green-200",
  vegetarian: "bg-orange-50 text-orange-700 border-orange-200",
  vegan: "bg-purple-50 text-purple-700 border-purple-200",
  organic: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "gluten-free": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "non-gmo": "bg-pink-50 text-pink-700 border-pink-200",
  kosher: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const certificationLabels = {
  fda: "FDA Approved",
  halal: "Halal Certified",
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  organic: "Organic",
  "gluten-free": "Gluten Free",
  "non-gmo": "Non-GMO",
  kosher: "Kosher",
};

interface CertificationBadgesProps {
  certifications: string[];
}

export function CertificationBadges({
  certifications,
}: CertificationBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {certifications.map((cert) => {
        const Icon =
          certificationIcons[cert as keyof typeof certificationIcons] || Shield;
        const colorClass =
          certificationColors[cert as keyof typeof certificationColors] ||
          "bg-gray-50 text-gray-700 border-gray-200";
        const label =
          certificationLabels[cert as keyof typeof certificationLabels] || cert;

        return (
          <Badge
            key={cert}
            variant="outline"
            className={`${colorClass} px-3 py-1 font-medium`}
          >
            <Icon className="w-3 h-3 mr-1" />
            {label}
          </Badge>
        );
      })}
    </div>
  );
}
