"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { handleAiConsultation } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles } from "lucide-react";

export function AiConsultationForm() {
  const [isPending, startTransition] = useTransition();
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file || !preview) {
      setError("Please select a photo to upload.");
      return;
    }
    setError(null);
    setResult(null);

    startTransition(async () => {
      const response = await handleAiConsultation({ photoDataUri: preview });
      if (response.error) {
        setError(response.error);
      } else if (response.suggestions) {
        setResult(response.suggestions);
      }
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="picture" className="text-sm font-medium">Your Photo</label>
          <div className="flex items-center space-x-2">
            <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} className="flex-grow file:text-foreground" />
            <Button type="submit" disabled={isPending || !file}>
              {isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
               Get Suggestions
            </Button>
          </div>
        </div>
      </form>

      {preview && !isPending && !result && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Image Preview:</p>
          <div className="relative w-full max-w-sm mx-auto aspect-square overflow-hidden rounded-lg border">
            <Image src={preview} alt="User upload preview" fill className="object-cover" />
          </div>
        </div>
      )}

      {isPending && (
         <div className="flex flex-col items-center justify-center text-muted-foreground p-8 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span>Analyzing your photo... This may take a moment.</span>
         </div>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="mt-6 bg-muted">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-secondary" />
              Your Personalized Suggestions
            </CardTitle>
            <CardDescription>Our AI's recommendations to highlight your natural beauty.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap text-sm text-muted-foreground">{result}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
