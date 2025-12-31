import { profile } from '@/lib/data';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href={profile.social.linkedin.href} target="_blank" rel="noopener noreferrer">
                <profile.social.linkedin.icon className="w-5 h-5 text-muted-foreground" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={profile.social.github.href} target="_blank" rel="noopener noreferrer">
                <profile.social.github.icon className="w-5 h-5 text-muted-foreground" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
