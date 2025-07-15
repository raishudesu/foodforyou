import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  QrCode,
  BarChart3,
  Users,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeaderSheet from "@/components/header-sheet";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FoodForYou</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-primary">
              About
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
          <div className="md:hidden">
            <HeaderSheet />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge variant="secondary" className="mb-4">
          Supporting Local Food Businesses
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Food for you,
          <br />
          <span className="text-primary">Food for Everybody</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Empowering local food businesses with digital visibility while helping
          consumers make informed, conscious choices through comprehensive
          product traceability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Addressing critical challenges in the food industry to create
              transparency and trust
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-red-500 mb-2" />
                <CardTitle>Lack of Traceability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Consumers struggle to trust food products due to limited
                  information about origin, ingredients, and safety standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Limited Digital Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Local food processors can&lsquo;t compete with larger
                  businesses due to minimal online visibility and reach.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-orange-500 mb-2" />
                <CardTitle>Compliance Difficulties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Small businesses struggle with food safety standards and
                  proper labeling requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How FoodForYou Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive solution that benefits both businesses and
              consumers
            </p>
          </div>

          {/* For Businesses */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              For Businesses
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <QrCode className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Personalized QR Codes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get custom QR codes for your packaging that link to
                    comprehensive product information and your brand story.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Data Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Understand customer preferences and scanning patterns to
                    optimize your marketing strategies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Enhanced Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Compete with larger businesses through digital presence and
                    detailed product storytelling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">
              For Customers
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Complete Product Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access detailed information about ingredients, allergens,
                    halal certification, and origin with a simple scan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Discover Similar Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Find alternative products that match your dietary
                    requirements and preferences from local businesses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Informed Choices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Make conscious purchasing decisions with transparent
                    information about local food producers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business size and needs
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="text-3xl font-bold">
                  ₱250<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    1-5 products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Personalized QR codes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Business/Product Page
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Customer assistance
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="border-green-600 border-2 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle>Growth</CardTitle>
                <CardDescription>For expanding businesses</CardDescription>
                <div className="text-3xl font-bold">
                  ₱500<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    6-15 products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Personalized QR codes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Business/Product Page
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Customer assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Basic analytics
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Scale Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Scale</CardTitle>
                <CardDescription>For established businesses</CardDescription>
                <div className="text-3xl font-bold">
                  ₱750<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    15+ products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Personalized QR codes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Business/Product Page
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Advanced analytics
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-purple-600 border-2">
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Advanced insights & analytics</CardDescription>
                <div className="text-3xl font-bold">
                  ₱500<span className="text-sm font-normal">/month</span>
                </div>
                <Badge variant="secondary" className="w-fit">
                  Free for 5 months
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Everything in Scale
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Customer preferences data
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    QR scan analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Marketing insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Custom reports
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Food Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join local food businesses already using FoodForYou to increase
            visibility, build trust, and connect with conscious consumers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold">FoodForYou</span>
              </div>
              <p className="text-gray-400">
                Empowering local food businesses and conscious consumers through
                transparency and traceability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FoodForYou. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
