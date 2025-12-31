import { skills } from '@/lib/data';
import { Section, SectionTitle } from './section';
import { Card } from './ui/card';
import { SkillsChart } from './skills-chart';

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <Card className="max-w-4xl mx-auto p-4 md:p-8 shadow-lg">
        <SkillsChart skills={skills} />
      </Card>
    </Section>
  );
}
