import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot, FileCode, HandCoins, Utensils, Stethoscope, Dumbbell, BrainCircuit } from 'lucide-react';

const toolSections = [
  {
    id: 'web-consultancy',
    title: 'Web Consultancy',
    icon: <FileCode className="h-6 w-6 text-primary" />,
    tools: [
      'Client Communication Bots',
      'Automated Code Generation',
      'Bug Detection & Fixing',
      'Code Review Assistance',
    ],
    defaultTool: 'Client Communication Bots',
    tabsMaxWidth: 'max-w-full'
  },
  {
    id: 'accountancy',
    title: 'Accountancy',
    icon: <HandCoins className="h-6 w-6 text-primary" />,
    tools: [
      'Expense Categorization',
      'Client Communication Bots',
      'Automated Data Entry',
      'Fraud Detection',
      'Reconciliation Automation',
    ],
    defaultTool: 'Expense Categorization',
    tabsMaxWidth: 'max-w-full'
  },
  {
    id: 'fast-food-shop',
    title: 'Fast Food Shop',
    icon: <Utensils className="h-6 w-6 text-primary" />,
    tools: [
      '24/7 Customer Chatbot',
      'Customer Service',
      'Order Management',
      'Special Recommender',
      'Personalized Recommendations',
    ],
    defaultTool: '24/7 Customer Chatbot',
    tabsMaxWidth: 'max-w-[calc(100%-10px)]'
  },
  {
    id: 'dental-practice',
    title: 'Dental Practice',
    icon: <Stethoscope className="h-6 w-6 text-primary" />,
    tools: [
      'Diagnostic Assistance',
      'Automated Appointment Scheduling',
      'Patient Communication Bots',
      'Predictive Maintenance for Equipment',
    ],
    defaultTool: 'Diagnostic Assistance',
    tabsMaxWidth: 'max-w-[calc(100%-100px)]'
  },
  {
    id: 'fitness-coach',
    title: 'Fitness Coach',
    icon: <Dumbbell className="h-6 w-6 text-primary" />,
    tools: [
      'Client Engagement Bots',
      'Personalized Workout Plans',
      'Nutrition Guidance',
      'Form Correction',
    ],
    defaultTool: 'Client Engagement Bots',
    tabsMaxWidth: 'max-w-[calc(100%-100px)]'
  },
  {
    id: 'life-coach',
    title: 'Life Coach',
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    tools: [
      'Personalized Goal Setting',
      'Progress Tracking & Visualization',
      'Habit Formation & Breaking',
      'Emotional Intelligence Development',
    ],
    defaultTool: 'Personalized Goal Setting',
    tabsMaxWidth: 'max-w-[calc(100%-100px)]'
  },
];

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function AIToolsSection() {
  return (
    <div className="w-full lg:w-[95%] mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          AI Tools for Your Profession
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
          Discover how our tailored AI solutions can revolutionize your workflow and enhance your services.
        </p>
      </div>

      <nav className="sticky top-14 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 z-40 -mx-4 px-4 sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8 border-b border-t border-border/40 mt-8">
        <div className="flex flex-wrap justify-center gap-2 max-w-[calc(100%-100px)] mx-auto">
          {toolSections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} passHref>
              <Button variant="outline" className="px-1.5 py-1 h-auto">{section.title}</Button>
            </Link>
          ))}
        </div>
      </nav>

      <div className="mt-12 space-y-20">
        {toolSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center gap-4 mb-8">
              {section.icon}
              {section.title}
            </h2>
            <Tabs defaultValue={slugify(section.defaultTool)} className="w-full">
              <TabsList className={`h-auto flex-wrap justify-start p-1 ${section.tabsMaxWidth} mb-[10px]`}>
                {section.tools.map((tool) => (
                  <TabsTrigger key={slugify(tool)} value={slugify(tool)} className="m-1">{tool}</TabsTrigger>
                ))}
              </TabsList>
              {section.tools.map((tool) => (
                <TabsContent key={slugify(tool)} value={slugify(tool)}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-headline text-xl">
                        <Bot className="h-5 w-5 text-primary" /> {tool}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">
                        Detailed information about the {tool.toLowerCase()} AI function will be displayed here. This tool helps practitioners in {section.title.toLowerCase()} to streamline their processes, improve efficiency, and provide better service to their clients.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>
        ))}
      </div>
    </div>
  );
}
