import { AIStyleAssistantForm } from "@/components/ai-style-assistant-form";

export default function AIStyleAssistantSection() {
  return (
    <section id="ai-assistant" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI-Powered Style Assistant
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Unsure about your new website's look and feel? Describe your brand, mission, and any design ideas you have. Our AI will generate personalized style suggestions to kickstart your creative journey.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <AIStyleAssistantForm />
        </div>
      </div>
    </section>
  );
}
