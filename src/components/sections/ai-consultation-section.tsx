import { AiConsultationForm } from "@/components/ai-consultation-form";
import { Lightbulb } from "lucide-react";

export function AiConsultationSection() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-primary">AI-Powered Consultation</h2>
          <p className="mt-2 text-lg text-muted-foreground">Get a glimpse of your potential. Upload a photo for personalized makeup suggestions.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg border">
          <div className="flex items-start space-x-4 mb-6 bg-muted p-4 rounded-md">
            <Lightbulb className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
            <p className="text-sm text-muted-foreground">
              Our AI makeup artist will analyze your features and suggest a look to enhance your natural beauty. This is a starting point for our creative collaboration!
            </p>
          </div>
          <AiConsultationForm />
        </div>
      </div>
    </section>
  );
}
