'use client';

import Image from 'next/image';
import { recommendations, type Recommendation } from '@/lib/data';
import { Section, SectionTitle } from './section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Recommendations() {
  return (
    <Section id="recommendations">
      <SectionTitle>Recommendations</SectionTitle>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {recommendations.map((rec, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1">
                <Card className="h-full shadow-lg">
                  <CardContent className="flex flex-col items-center text-center p-8">
                    <Avatar className="w-20 h-20 mb-4 border-2">
                      <AvatarImage src={rec.avatar} alt={rec.name} data-ai-hint={rec.avatarHint}/>
                      <AvatarFallback>{rec.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="text-muted-foreground italic mb-4">"{rec.text}"</p>
                    <p className="font-bold font-headline">{rec.name}</p>
                    <p className="text-sm text-muted-foreground">{rec.title}</p>
                    {rec.name === 'Suresh Chavhan' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 mt-2" viewBox="0 0 111.4 32"><path fill="currentColor" d="M0 0v32h10.3V19.4h3.2V32h10.2V0H13.5v12.7h-3.2V0H0zm34.6 0v32h10.2V0h-10.2zM24 19.4h10.2v12.7H24V19.4zm32.5 0v12.7h10.2V0H56.3v32h10.2V19.4zM67 0v32h10.2V0H67zm24.8 0v32h10.2V0h-10.2zM81.6 19.4h10.2v12.7H81.6V19.4zm10.2-19.4v12.7h10.2V0h-10.2zm10.2 19.4h-10.2V32h10.2V19.4z"></path></svg>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  );
}
