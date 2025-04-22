
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Activity {
  title: string;
  description: string;
  time: string;
}

export function RecentActivities() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      title: "New project created",
      description: "Web application design project",
      time: "3 hours ago",
    },
    {
      title: "Client meeting scheduled",
      description: "Meeting with potential client",
      time: "Yesterday",
    },
    {
      title: "New feature deployed",
      description: "User authentication feature",
      time: "2 days ago",
    },
    {
      title: "Staff meeting",
      description: "Weekly team progress review",
      time: "3 days ago",
    },
    {
      title: "Project completed",
      description: "Mobile app development finished",
      time: "1 week ago",
    },
  ]);

  const [newActivity, setNewActivity] = useState({ title: "", description: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActivity.title || !newActivity.description) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in both title and description",
      });
      return;
    }

    setActivities([
      {
        title: newActivity.title,
        description: newActivity.description,
        time: "Just now",
      },
      ...activities.slice(0, 4), // Keep only the 5 most recent activities
    ]);

    setNewActivity({ title: "", description: "" });
    toast({
      title: "Success",
      description: "Activity has been added",
    });
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Recent Activity</h3>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
      </div>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <Input
          placeholder="Activity Title"
          value={newActivity.title}
          onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
          className="w-full"
        />
        <Input
          placeholder="Activity Description"
          value={newActivity.description}
          onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
          className="w-full"
        />
        <Button type="submit" className="w-full">
          <MessageSquare className="mr-2" />
          Post Activity
        </Button>
      </form>

      <div className="space-y-5">
        {activities.map((item, i) => (
          <div key={i} className="flex items-start">
            <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-4"></div>
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
            <div className="text-xs text-muted-foreground">{item.time}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
