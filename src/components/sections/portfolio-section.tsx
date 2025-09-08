"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioImages = {
  Bridal: [
    { src: 'https://picsum.photos/seed/bridal1/600/800', hint: 'bridal makeup' },
    { src: 'https://picsum.photos/seed/bridal2/800/600', hint: 'bridal makeup' },
    { src: 'https://picsum.photos/seed/bridal3/600/900', hint: 'bridal makeup' },
    { src: 'https://picsum.photos/seed/bridal4/700/700', hint: 'bridal makeup' },
    { src: 'https://picsum.photos/seed/bridal5/600/800', hint: 'bridal makeup' },
    { src: 'https://picsum.photos/seed/bridal6/900/600', hint: 'bridal makeup' },
  ],
  Editorial: [
    { src: 'https://picsum.photos/seed/editorial1/700/800', hint: 'editorial fashion' },
    { src: 'https://picsum.photos/seed/editorial2/800/700', hint: 'editorial fashion' },
    { src: 'https://picsum.photos/seed/editorial3/600/800', hint: 'editorial fashion' },
    { src: 'https://picsum.photos/seed/editorial4/800/600', hint: 'editorial fashion' },
  ],
  Runway: [
    { src: 'https://picsum.photos/seed/runway1/600/900', hint: 'runway model' },
    { src: 'https://picsum.photos/seed/runway2/900/600', hint: 'runway model' },
    { src: 'https://picsum.photos/seed/runway3/600/800', hint: 'runway model' },
    { src: 'https://picsum.photos/seed/runway4/800/800', hint: 'runway model' },
  ],
  Competitions: [
    { src: 'https://picsum.photos/seed/comp1/800/600', hint: 'fashion competition' },
    { src: 'https://picsum.photos/seed/comp2/600/800', hint: 'fashion competition' },
    { src: 'https://picsum.photos/seed/comp3/700/800', hint: 'fashion competition' },
  ],
};

const categories = ["Bridal", "Editorial", "Runway", "Competitions"];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-primary">Portfolio</h2>
          <p className="mt-2 text-lg text-muted-foreground">A Glimpse of Our Artistry</p>
        </div>
        <Tabs defaultValue="Bridal" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {portfolioImages[category as keyof typeof portfolioImages].map((image, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
                    <Image
                      src={image.src}
                      alt={`${category} makeup ${idx + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      data-ai-hint={image.hint}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-12 text-center text-secondary-foreground bg-secondary p-6 rounded-lg">
          <h3 className="text-2xl font-headline text-primary-foreground">Looking for Models!</h3>
          <p className="mt-2 text-primary-foreground/80">We are always looking for new faces for shoots, ramp walks, and fashion shows. Contact us to collaborate!</p>
        </div>
      </div>
    </section>
  );
}
