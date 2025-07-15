"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Sample data for QR scans over time
const scanData = [
  { date: "Jan", scans: 1200, views: 2400 },
  { date: "Feb", scans: 1400, views: 2800 },
  { date: "Mar", scans: 1100, views: 2200 },
  { date: "Apr", scans: 1600, views: 3200 },
  { date: "May", scans: 1800, views: 3600 },
  { date: "Jun", scans: 2200, views: 4400 },
  { date: "Jul", scans: 2400, views: 4800 },
]

// Sample data for customer demographics
const demographicData = [
  { age: "18-25", count: 450 },
  { age: "26-35", count: 680 },
  { age: "36-45", count: 520 },
  { age: "46-55", count: 340 },
  { age: "55+", count: 210 },
]

// Sample data for product categories
const categoryData = [
  { name: "Oils & Vinegars", value: 35, color: "#22c55e" },
  { name: "Sweeteners", value: 25, color: "#3b82f6" },
  { name: "Snacks", value: 20, color: "#f59e0b" },
  { name: "Dried Fruits", value: 15, color: "#ef4444" },
  { name: "Others", value: 5, color: "#8b5cf6" },
]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* QR Scans Trend */}
      <Card>
        <CardHeader>
          <CardTitle>QR Scans & Views Trend</CardTitle>
          <CardDescription>Monthly performance over the last 7 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              scans: {
                label: "QR Scans",
                color: "hsl(var(--chart-1))",
              },
              views: {
                label: "Product Views",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scanData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="scans" stroke="var(--color-scans)" strokeWidth={2} />
                <Line type="monotone" dataKey="views" stroke="var(--color-views)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Customer Demographics */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Demographics</CardTitle>
          <CardDescription>Age distribution of customers scanning your products</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: {
                label: "Customers",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Product Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Product Categories</CardTitle>
          <CardDescription>Distribution of scans by product category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 border rounded shadow">
                          <p className="font-medium">{payload[0].payload.name}</p>
                          <p className="text-sm text-muted-foreground">{payload[0].value}% of total scans</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm">{item.name}</span>
                <span className="text-sm text-muted-foreground ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Geographic Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Top Locations</CardTitle>
          <CardDescription>Cities with highest product engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { city: "Manila", scans: 1247, percentage: 35 },
              { city: "Cebu", scans: 892, percentage: 25 },
              { city: "Davao", scans: 654, percentage: 18 },
              { city: "Iloilo", scans: 432, percentage: 12 },
              { city: "Baguio", scans: 356, percentage: 10 },
            ].map((location) => (
              <div key={location.city} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{location.city}</span>
                  <span className="text-muted-foreground">{location.scans} scans</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: `${location.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
