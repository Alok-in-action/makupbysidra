import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brush, Heart, Camera, VenetianMask, Trophy, Clapperboard } from 'lucide-react';

const services = [
  { name: "Bridal Make Up", description: "Luxury bridal makeup with a personal touch.", icon: Heart },
  { name: "Modeling Photo Shoot", description: "Photo-ready looks for professional modeling shoots and portfolios.", icon: Camera },
  { name: "Shoot Make Up", description: "HD makeup for editorial, fashion, and ad campaigns.", icon: Clapperboard },
  { name: "Ramp Walk", description: "Glamorous, high-impact looks for runway shows.", icon: VenetianMask },
  { name: "Competitions", description: "Distinct looks for competitive events and pageants.", icon: Trophy },
  { name: "Fashion Shows", description: "Full backstage makeup for designers and shows.", icon: Brush }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-primary">Our Services</h2>
          <p className="mt-2 text-lg text-muted-foreground">Crafting looks for every memorable moment.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0">
                <div className="mb-4 bg-background p-4 rounded-full inline-block">
                    <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardHeader className="p-0">
                    <CardTitle className="text-xl font-headline">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <CardDescription>{service.description}</CardDescription>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
