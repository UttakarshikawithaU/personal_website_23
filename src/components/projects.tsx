import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { Section, SectionTitle } from './section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function Projects() {
  return (
    <Section id="projects" className="bg-muted/50">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="aspect-video relative rounded-t-lg overflow-hidden -mt-6 -mx-6">
          <Image
            src={project.image.src}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.image.hint}
          />
        </div>
        <CardTitle className="pt-6 font-headline text-xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-card-foreground/80">{project.description}</p>
      </CardContent>
      <CardFooter className="space-x-2">
        {project.github && (
          <Button variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {project.link && (
          <Button variant="outline" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Learn More
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
