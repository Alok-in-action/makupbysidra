"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioImages = {
  Bridal: [
    { src: '/images/bridal-1.jpg', hint: 'bridal makeup', width: 600, height: 800 },
    { src: '/images/bridal-2.jpg', hint: 'bridal makeup', width: 800, height: 600 },
    { src: '/images/bridal-3.jpg', hint: 'bridal makeup', width: 600, height: 900 },
    { src: '/images/bridal-4.jpg', hint: 'bridal makeup', width: 700, height: 700 },
    { src: '/images/bridal-5.jpg', hint: 'bridal makeup', width: 600, height: 800 },
    { src: '/images/bridal-6.jpg', hint: 'bridal makeup', width: 900, height: 600 },
  ],
  Editorial: [
    { src: '/images/editorial-1.jpg', hint: 'editorial fashion', width: 700, height: 800 },
    { src: '/images/editorial-2.jpg', hint: 'editorial fashion', width: 800, height: 700 },
    { src: '/images/editorial-3.jpg', hint: 'editorial fashion', width: 600, height: 800 },
    { src: '/images/editorial-4.jpg', hint: 'editorial fashion', width: 800, height: 600 },
  ],
  Runway: [
    { src: '/images/runway-1.jpg', hint: 'runway model', width: 600, height: 900 },
    { src: '/images/runway-2.jpg', hint: 'runway model', width: 900, height: 600 },
    { src: '/images/runway-3.jpg', hint: 'runway model', width: 600, height: 800 },
    { src: '/images/runway-4.jpg', hint: 'runway model', width: 800, height: 800 },
  ],
  Competitions: [
    { src: '/images/competitions-1.jpg', hint: 'fashion competition', width: 800, height: 600 },
    { src: '/images/competitions-2.jpg', hint: 'fashion competition', width: 600, height: 800 },
    { src: '/images/competitions-3.jpg', hint: 'fashion competition', width: 700, height: 800 },
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
                      width={image.width}
                      height={image.height}
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
