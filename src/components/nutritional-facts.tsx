import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sodium: number;
}

interface NutritionalFactsProps {
  nutritionalInfo: NutritionalInfo;
  servingSize: string;
}

export function NutritionalFacts({
  nutritionalInfo,
  servingSize,
}: NutritionalFactsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Nutrition Facts</CardTitle>
        <p className="text-sm text-muted-foreground">
          Per serving ({servingSize})
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="border-b border-gray-200 pb-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Calories</span>
            <span className="font-bold text-xl">
              {nutritionalInfo.calories}
            </span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Protein</span>
            <span>{nutritionalInfo.protein}g</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total Carbohydrates</span>
            <span>{nutritionalInfo.carbs}g</span>
          </div>
          <div className="flex justify-between ml-4">
            <span>Dietary Fiber</span>
            <span>{nutritionalInfo.fiber}g</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total Fat</span>
            <span>{nutritionalInfo.fat}g</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Sodium</span>
            <span>{nutritionalInfo.sodium}mg</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
