import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Eye, Users } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "scan",
    product: "Organic Coconut Oil",
    location: "Manila, Philippines",
    time: "2 minutes ago",
    icon: QrCode,
    color: "text-blue-600",
  },
  {
    id: 2,
    type: "view",
    product: "Artisan Honey",
    location: "Cebu, Philippines",
    time: "5 minutes ago",
    icon: Eye,
    color: "text-green-600",
  },
  {
    id: 3,
    type: "scan",
    product: "Traditional Rice Cakes",
    location: "Davao, Philippines",
    time: "12 minutes ago",
    icon: QrCode,
    color: "text-blue-600",
  },
  {
    id: 4,
    type: "inquiry",
    product: "Dried Mangoes",
    location: "Iloilo, Philippines",
    time: "18 minutes ago",
    icon: Users,
    color: "text-purple-600",
  },
  {
    id: 5,
    type: "scan",
    product: "Coconut Vinegar",
    location: "Baguio, Philippines",
    time: "25 minutes ago",
    icon: QrCode,
    color: "text-blue-600",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest customer interactions with your products</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.product}</p>
                <p className="text-sm text-muted-foreground">{activity.location}</p>
              </div>
              <div className="text-sm text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
