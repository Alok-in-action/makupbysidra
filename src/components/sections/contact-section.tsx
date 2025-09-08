"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactInfo = {
  address: "Add your address here",
  phone: "+91-XXXXXXXXXX",
  email: "info@aurabysidra.com",
};

const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/aurabysidra", icon: Instagram },
  { platform: "Facebook", url: "https://www.facebook.com/aurabysidra", icon: Facebook },
  { platform: "YouTube", url: "https://www.youtube.com/aurabysidra", icon: Youtube },
];

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline text-primary">Get In Touch</h2>
          <p className="mt-2 text-lg text-muted-foreground">Ready to book, model, or collaborate? We'd love to hear from you.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-headline mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your needs..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Contact Now'}
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-8">
             <h3 className="text-2xl font-headline mb-6">Contact Information</h3>
             <div className="space-y-4 text-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-secondary transition-colors">{contactInfo.email}</a>
                </div>
             </div>
             <div className="pt-8 mt-8 border-t">
                <h4 className="text-lg font-headline mb-4">Follow Us</h4>
                <div className="flex items-center space-x-4">
                    {socialLinks.map(({ platform, url, icon: Icon }) => (
                        <Link key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                            <Icon className="h-6 w-6" />
                            <span className="sr-only">{platform}</span>
                        </Link>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
