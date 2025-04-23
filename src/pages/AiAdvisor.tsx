
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function AiAdvisor() {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // Temporary mock response; swap with real AI API later
  const handleSend = () => {
    if (!prompt.trim()) return;
    setAiResponse("🤖 (AI): Great question! [Mocked Response based on: " + prompt + "]");
    setPrompt("");
  };

  return (
    <div className="flex flex-col items-center space-y-8 max-w-3xl mx-auto py-10">
      <Card className="w-full p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white border-primary/20 shadow-xl">
        <h1 className="text-3xl font-bold tracking-tight mb-3 text-center text-indigo-900">AI Advisor</h1>
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Ask any question about your startup, growth, employees, or analytics. The AI Advisor will assist you!
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Type your prompt here..."
              className="flex-1"
              onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
            />
            <Button onClick={handleSend} disabled={!prompt.trim()}>
              Send
            </Button>
          </div>
          <div className="mt-2 p-4 min-h-[80px] rounded bg-white border text-base shadow-inner">
            {aiResponse ? aiResponse : <span className="text-muted-foreground">AI responses will appear here.</span>}
          </div>
        </div>
      </Card>
    </div>
  );
}
