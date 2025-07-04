import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

const aiFunctions = [
  {
    name: "Personalized Menu Recommendations",
    description: "Suggests menu items and combos to individual customers based on past orders, dietary preferences, and real-time popularity.",
    benefit: "Increases average order value and enhances customer satisfaction."
  },
  {
    name: "Order Prediction & Inventory Optimization",
    description: "Forecasts peak demand for specific menu items and ingredients to optimize inventory levels and preparation.",
    benefit: "Reduces food waste, ensures ingredient availability, and improves efficiency."
  },
  {
    name: "Customer Sentiment Analysis",
    description: "Analyzes customer feedback from online reviews, social media, and direct surveys to identify areas for improvement.",
    benefit: "Enhances customer satisfaction, identifies service gaps, and improves brand perception."
  },
  {
    name: "Drive-Thru & Kitchen Flow Optimization",
    description: "Manages drive-thru queueing, predicts wait times, and optimizes kitchen workflows for faster order fulfillment.",
    benefit: "Speeds up service, reduces customer wait times, and improves operational throughput."
  },
  {
    name: "Voice Order Taking & Chatbots",
    description: "Automates order taking at drive-thrus, kiosks, or through messaging apps using natural language processing.",
    benefit: "Reduces labor costs, improves order accuracy, and provides a faster, hands-free experience."
  },
  {
    name: "Predictive Equipment Maintenance",
    description: "Forecasts potential failures for kitchen equipment (fryers, grills, ovens) and delivery vehicles based on usage data.",
    benefit: "Minimizes downtime, extends equipment lifespan, and reduces repair costs."
  },
  {
    name: "Dynamic Pricing & Promotions",
    description: "Adjusts menu prices and offers real-time promotions based on demand, inventory levels, time of day, and competitor pricing.",
    benefit: "Maximizes revenue, optimizes sales, and manages demand fluctuations."
  },
  {
    name: "Delivery Route Optimization",
    description: "Calculates the most efficient delivery routes for multiple orders, considering traffic, delivery time windows, and driver availability.",
    benefit: "Reduces fuel costs, improves delivery speed, and enhances customer satisfaction."
  },
  {
    name: "Waste Reduction Management",
    description: "Identifies patterns in food waste at various stages (preparation, consumption) to suggest portion adjustments, inventory changes, and donation opportunities.",
    benefit: "Lowers operational costs, promotes sustainability, and reduces environmental impact."
  },
  {
    name: "Employee Scheduling Optimization",
    description: "Creates optimal staff schedules for both restaurant and delivery personnel based on predicted demand, employee availability, and skill sets.",
    benefit: "Improves labor efficiency, reduces overtime, and ensures adequate staffing."
  },
  {
    name: "Food Safety & Quality Monitoring",
    description: "Monitors food preparation conditions, temperature logs, and ingredient freshness using sensors and image analysis.",
    benefit: "Ensures consistent product quality, enhances food safety, and reduces health risks."
  },
  {
    name: "Customer Loyalty & Retention Programs",
    description: "Analyzes customer purchase history and behavior to personalize loyalty rewards, special offers, and re-engagement campaigns.",
    benefit: "Increases customer lifetime value and fosters repeat business."
  },
  {
    name: "Supply Chain & Supplier Management",
    description: "Optimizes ordering from suppliers, tracks delivery times, and assesses supplier performance based on quality and reliability.",
    benefit: "Ensures consistent ingredient supply, reduces costs, and improves supply chain resilience."
  },
  {
    name: "Fraud Detection (Orders & Payments)",
    description: "Identifies suspicious order patterns, payment anomalies, or delivery discrepancies that may indicate fraudulent activity.",
    benefit: "Enhances financial security and prevents losses from fraud."
  },
  {
    name: "Automated Customer Support",
    description: "Provides instant answers to common delivery or order-related questions, handles order modifications, and resolves simple issues.",
    benefit: "Improves customer service efficiency and reduces manual support workload."
  },
];


export default function FastFoodAIPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-secondary/50">
      <Header />
      <main className="flex-1 w-[95%] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Comprehensive AI Functions for Fast Food & Delivery Services
          </h1>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl flex items-center gap-3">
              <BrainCircuit className="h-8 w-8 text-primary" />
              Available AI Capabilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20%] font-bold text-base">AI Function</TableHead>
                    <TableHead className="w-[45%] font-bold text-base">Description</TableHead>
                    <TableHead className="w-[35%] font-bold text-base">Primary Benefit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {aiFunctions.map((func) => (
                    <TableRow key={func.name}>
                      <TableCell className="font-medium text-foreground/90">{func.name}</TableCell>
                      <TableCell className="text-foreground/80">{func.description}</TableCell>
                      <TableCell className="text-foreground/80">{func.benefit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
      <div className="text-center text-sm text-muted-foreground py-4">
        Powered by Firebase & AI
      </div>
      <Footer />
    </div>
  );
}
