'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';

import { Section, SectionTitle } from './section';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { aiAssistant, type AiAssistantOutput } from '@/ai/flows/ai-assistant-contact-form';
import { profile } from '@/lib/data';
import { cn } from '@/lib/utils';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export function Contact() {
  const [isAiPending, startAiTransition] = useTransition();
  const [aiResult, setAiResult] = useState<AiAssistantOutput | null>(null);
  const [aiQuery, setAiQuery] = useState('');

  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onContactSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  function onAiSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!aiQuery) return;
    startAiTransition(async () => {
      setAiResult(null);
      const result = await aiAssistant({ query: aiQuery });
      setAiResult(result);
    });
  }

  return (
    <Section id="contact" className="bg-muted/50">
      <SectionTitle>Get in Touch</SectionTitle>
      <div className="grid md:grid-cols-5 gap-10 max-w-6xl mx-auto">
        <div className="md:col-span-2 space-y-6">
          <h3 className="font-headline text-2xl font-semibold">Let's Connect</h3>
          <p className="text-muted-foreground">
            I'm currently seeking new opportunities and would love to hear from you. Whether you have
            a question or just want to say hi, feel free to reach out.
          </p>
          <div className="space-y-4">
            <a
              href={profile.contact.email.href}
              className="flex items-center gap-3 group text-muted-foreground hover:text-primary transition-colors"
            >
              <profile.contact.email.icon className="w-5 h-5" />
              <span>{profile.contact.email.label}</span>
            </a>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href={profile.social.linkedin.href} target="_blank" rel="noopener noreferrer">
                  <profile.social.linkedin.icon className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={profile.social.github.href} target="_blank" rel="noopener noreferrer">
                  <profile.social.github.icon className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <Card className="shadow-lg">
            <Tabs defaultValue="ai-assistant" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="ai-assistant">
                  <Sparkles className="mr-2 h-4 w-4" />
                  AI Assistant
                </TabsTrigger>
                <TabsTrigger value="contact-form">
                  <Send className="mr-2 h-4 w-4" />
                  Send a Message
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ai-assistant" className="p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Have a quick question about my experience or skills? Ask my AI assistant!
                </p>
                <form onSubmit={onAiSubmit} className="flex gap-2 mb-4">
                  <Input
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="e.g., What are your top skills?"
                    disabled={isAiPending}
                  />
                  <Button type="submit" size="icon" disabled={isAiPending || !aiQuery}>
                    {isAiPending ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span className="sr-only">Submit question</span>
                  </Button>
                </form>
                <div
                  className={cn(
                    'prose prose-sm max-w-none text-muted-foreground p-4 rounded-md border border-dashed transition-opacity',
                    !isAiPending && !aiResult && 'opacity-50'
                  )}
                >
                  {isAiPending ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="animate-spin h-5 w-5" />
                      <span>Thinking...</span>
                    </div>
                  ) : aiResult ? (
                    aiResult.answer
                  ) : (
                    <div className="flex items-center gap-2">
                      <Bot className="h-5 w-5" />
                      <span>AI response will appear here.</span>
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="contact-form" className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onContactSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message..." className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </Section>
  );
}
