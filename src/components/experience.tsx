import { timeline, type TimelineEvent } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Section, SectionTitle } from './section';
import { Badge } from './ui/badge';

export function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Career & Education</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true" />
        <ul className="space-y-12">
          {timeline.map((event, index) => (
            <TimelineItem key={index} event={event} isLeft={index % 2 === 0} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

function TimelineItem({ event, isLeft }: { event: TimelineEvent; isLeft: boolean }) {
  return (
    <li className="relative">
      <div
        className={cn(
          'absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 flex items-center justify-center',
          'md:top-1/2 md:-translate-y-1/2'
        )}
      >
        <event.icon className="w-5 h-5 text-primary" />
      </div>
      <div
        className={cn(
          'md:flex items-center',
          isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
        )}
      >
        <div className="md:w-1/2" />
        <div className="md:w-1/2 md:px-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-3">
              <p className="text-sm text-muted-foreground">{event.date}</p>
              <CardTitle className="text-xl font-headline">{event.title}</CardTitle>
              <p className="font-semibold text-primary/90">{event.subtitle}</p>
            </CardHeader>
            <CardContent>
              {event.description && (
                <p className="text-sm text-card-foreground/80 mb-3">{event.description}</p>
              )}
              {event.tags && (
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </li>
  );
}
