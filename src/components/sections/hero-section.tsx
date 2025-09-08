import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full">
      <Image
        src="/images/1.jpeg"
        alt="A model with elegant makeup"
        fill
        className="object-cover"
        priority
        data-ai-hint="makeup model"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground p-4">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-5xl md:text-7xl font-headline drop-shadow-lg leading-tight">
            Unveiling Your True Aura
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Elegance. Charm. Beauty. Transform your look for every occasion.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="#booking">Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
