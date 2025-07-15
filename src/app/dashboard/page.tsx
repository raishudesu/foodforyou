import { QrCode, Eye, TrendingUp, Package, Star } from "lucide-react";

import { MetricCard } from "@/components/metric-card";
import { RecentActivity } from "@/components/recent-activity";
import { ProductPerformance } from "@/components/product-performance";
import { AnalyticsCharts } from "@/components/analytics-charts";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Dashboard() {
  return (
    <div className="w-full p-6 flex flex-col gap-4">
      <div className="mb-6 flex flex-col sm:flex-row items-stretch gap-4 sm:justify-between sm:items-center">
        <div>
          <p className="text-muted-foreground">
            Welcome back, <span className="font-bold">Barysh</span>! 🎉
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Food For You Dashboard
          </h1>
        </div>
      </div>
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
              <BreadcrumbPage>Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center space-x-2">
          <Badge variant="secondary" className="bg-green-50 text-green-700">
            Growth Plan
          </Badge>
          <Button size="sm">Upgrade Plan</Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Welcome Section */}
        <div className="rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, Barkov&lsquo;s Kitchen!
              </h1>
              <p className="text-gray-600 mt-1">
                Here&lsquo;s what&lsquo;s happening with your products today.
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Plan</p>
              <Badge className="bg-green-600">Growth - 12 Products</Badge>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total QR Scans"
            value="3,247"
            change="+12.5%"
            changeType="positive"
            icon={QrCode}
            description="vs last month"
          />
          <MetricCard
            title="Product Views"
            value="8,156"
            change="+8.2%"
            changeType="positive"
            icon={Eye}
            description="vs last month"
          />
          <MetricCard
            title="Active Products"
            value="12"
            change="+2"
            changeType="positive"
            icon={Package}
            description="products added"
          />
          <MetricCard
            title="Avg. Engagement"
            value="74%"
            change="-2.1%"
            changeType="negative"
            icon={TrendingUp}
            description="vs last month"
          />
        </div>

        {/* Charts Section */}
        <AnalyticsCharts />

        {/* Bottom Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <ProductPerformance />
          <RecentActivity />
        </div>

        {/* Insights & Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>AI Insights & Recommendations</span>
            </CardTitle>
            <CardDescription>
              Personalized suggestions to improve your product performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <p className="font-medium text-blue-900">
                    Peak Scanning Hours
                  </p>
                  <p className="text-sm text-blue-700">
                    Your products get 40% more scans between 2-4 PM. Consider
                    promoting during these hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <p className="font-medium text-green-900">
                    Top Performing Category
                  </p>
                  <p className="text-sm text-green-700">
                    Your &ldquo;Halal&ldquo; category has the highest
                    engagement. Consider expanding this product line.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                <div>
                  <p className="font-medium text-orange-900">
                    Geographic Opportunity
                  </p>
                  <p className="text-sm text-orange-700">
                    Low engagement in Davao despite high population. Consider
                    targeted marketing in this region.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
