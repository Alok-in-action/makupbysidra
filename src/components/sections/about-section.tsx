import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-headline text-primary">Meet Sidra</h2>
            <p className="text-muted-foreground leading-relaxed">
              Combining artistry with innovation, Sidra brings elegance and charm to every client. Specializing in high-fashion, modeling shoots, bridal makeovers, and runway shows.
            </p>
          </div>
          <div>
            <Card className="overflow-hidden shadow-xl rounded-lg">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/600/700"
                  alt="Sidra, the makeup artist"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  data-ai-hint="makeup artist portrait"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
