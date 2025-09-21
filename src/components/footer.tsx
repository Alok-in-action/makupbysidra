import { Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  { platform: "Instagram", url: "https://www.instagram.com/aurabysidra", icon: Instagram },
  { platform: "Facebook", url: "https://www.facebook.com/aurabysidra", icon: Facebook },
  { platform: "YouTube", url: "https://www.youtube.com/aurabysidra", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container max-w-screen-2xl py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Image src="/images/newlogo.png" alt="Aura by Sidra logo" width={32} height={32} className="rounded-full" />
            <span className="font-bold font-headline text-lg text-primary">Aura by Sidra</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Aura by Sidra – Elegance & Charm. © All Rights Reserved - 2025
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ platform, url, icon: Icon }) => (
              <Link key={platform} href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Icon className="h-5 w-5" />
                <span className="sr-only">{platform}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
