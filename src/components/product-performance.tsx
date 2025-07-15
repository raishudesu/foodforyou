import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const products = [
  {
    name: "Organic Coconut Oil",
    scans: 1247,
    views: 2156,
    engagement: 85,
    trend: "up",
    category: "Oils & Vinegars",
  },
  {
    name: "Artisan Honey",
    scans: 892,
    views: 1543,
    engagement: 78,
    trend: "up",
    category: "Sweeteners",
  },
  {
    name: "Traditional Rice Cakes",
    scans: 654,
    views: 1234,
    engagement: 65,
    trend: "down",
    category: "Snacks",
  },
  {
    name: "Dried Mangoes",
    scans: 543,
    views: 987,
    engagement: 72,
    trend: "up",
    category: "Dried Fruits",
  },
  {
    name: "Coconut Vinegar",
    scans: 432,
    views: 756,
    engagement: 68,
    trend: "stable",
    category: "Oils & Vinegars",
  },
]

export function ProductPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Performance</CardTitle>
        <CardDescription>Top performing products by engagement</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product, index) => (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        product.trend === "up" ? "default" : product.trend === "down" ? "destructive" : "secondary"
                      }
                    >
                      {product.scans} scans
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.views} views</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Engagement Rate</span>
                  <span>{product.engagement}%</span>
                </div>
                <Progress value={product.engagement} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
