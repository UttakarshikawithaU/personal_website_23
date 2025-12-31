import { profile } from '@/lib/data';
import { Section, SectionTitle } from './section';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardContent className="p-8 md:p-12">
          <p className="text-base md:text-lg leading-relaxed text-center text-card-foreground/90">
            {profile.about}
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
