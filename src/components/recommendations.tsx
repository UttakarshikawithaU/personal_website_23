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
