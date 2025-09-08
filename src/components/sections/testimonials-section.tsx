"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  { author: "Ayesha", content: "Truly elevated my look for the ramp show! Professional and creative." },
  { author: "Rhea", content: "Amazing experience—my photoshoot makeup stayed flawless all day." },
  { author: "Sana", content: "Sidra is a magician! The bridal makeup was beyond my dreams." },
];

export function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-screen-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-primary">What Our Clients Say</h2>
          <p className="mt-2 text-lg text-muted-foreground">Stories of transformation and delight.</p>
        </div>
        <Carousel 
          opts={{ loop: true }} 
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <Quote className="w-10 h-10 text-secondary mb-4" />
                      <p className="text-lg italic text-foreground mb-6">"{testimonial.content}"</p>
                      <footer className="font-bold text-secondary tracking-wider uppercase">— {testimonial.author}</footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
