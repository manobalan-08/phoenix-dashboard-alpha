
import React from "react";
import { Bulb, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

// Static analysis for demo – in the future, you could generate these dynamically
const startupStage = "Growth";
const suggestions = [
  "Expand team capacity to accelerate product development.",
  "Focus on market expansion and customer acquisition.",
  "Leverage analytics to identify highest-performing channels.",
  "Optimize operational efficiency for scalability.",
];

const stats = [
  { label: "Revenue Growth", value: "+20.1%" },
  { label: "Active Employees", value: "+15%" },
  { label: "Conversion Rate", value: "3.2%" },
];

export function AiAdvisor() {
  return (
    <Card className="mb-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-6 border-primary/20 shadow-xl">
      <div className="flex items-center gap-3 mb-2">
        <Lightbulb className="text-primary h-7 w-7" />
        <span className="font-bold text-xl text-indigo-900">AI Advisor</span>
        <span className="ml-auto text-xs rounded bg-primary/10 px-2 py-0.5 text-primary font-medium uppercase">
          Stage: {startupStage}
        </span>
      </div>
      <div className="mb-1 text-sm text-muted-foreground">
        Here are some suggestions and insights for your current startup journey:
      </div>
      <ul className="list-disc pl-5 text-base text-primary mb-3">
        {suggestions.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 mt-2">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-white border px-4 py-2 shadow-sm flex flex-col text-center min-w-[120px]"
          >
            <span className="font-semibold text-lg text-primary">{stat.value}</span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
