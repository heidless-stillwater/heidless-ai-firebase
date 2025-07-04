'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateStyleSuggestions, type FormState } from '@/app/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Bot, Lightbulb, Palette, Type, Layout } from 'lucide-react';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Bot className="mr-2 h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-5 w-5" />
          Get Suggestions
        </>
      )}
    </Button>
  );
}

export function AIStyleAssistantForm() {
  const [state, formAction] = useFormState(generateStyleSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.issues) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message + ': ' + state.issues.join(', '),
      });
    } else if (state.message && state.data) {
        toast({
            title: 'Success!',
            description: state.message,
        })
    }
  }, [state, toast]);

  const suggestionCards = state.data ? [
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Layout Suggestions",
      content: state.data.layoutSuggestions,
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Color Palette",
      content: state.data.colorPaletteRecommendations,
    },
    {
      icon: <Type className="h-6 w-6 text-primary" />,
      title: "Typography Choices",
      content: state.data.typographyChoices,
    },
  ] : [];

  return (
    <div className="space-y-8">
      <Card className="bg-background/50">
        <CardContent className="p-6">
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="brandingDescription" className="text-lg font-medium">Your Brand's Story</Label>
              <Textarea
                id="brandingDescription"
                name="brandingDescription"
                placeholder="Describe your client’s existing branding, including mission, values, and target audience."
                required
                className="min-h-[120px] text-base"
                defaultValue={state.fields?.brandingDescription}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="designPreferences" className="text-lg font-medium">Design Preferences (Optional)</Label>
              <Textarea
                id="designPreferences"
                name="designPreferences"
                placeholder="Any specific design preferences or examples the client has in mind? (e.g., 'minimalist', 'bold and colorful', URLs to inspiration sites)."
                className="min-h-[120px] text-base"
                defaultValue={state.fields?.designPreferences}
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" /> Overall Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 text-base">{state.data.overallStyleDescription}</p>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6">
            {suggestionCards.map(item => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-3">
                    {item.icon} {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-base whitespace-pre-line">{item.content}</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
