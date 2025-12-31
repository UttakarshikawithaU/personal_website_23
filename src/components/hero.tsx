import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { profile } from '@/lib/data';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const profilePic = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto mb-6">
          {profilePic && (
            <Image
              src={profilePic.imageUrl}
              alt={profile.name}
              width={192}
              height={192}
              priority
              className="rounded-full object-cover border-4 border-background shadow-lg"
              data-ai-hint={profilePic.imageHint}
            />
          )}
        </div>
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
          {profile.tagline}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-6">
          <a
            href={profile.social.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <profile.social.linkedin.icon className="w-7 h-7" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={profile.social.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <profile.social.github.icon className="w-7 h-7" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
