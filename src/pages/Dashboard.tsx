import { 
  BarChart3, 
  Users, 
  DollarSign, 
  LineChart, 
  Trophy,
  Star,
  Award
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { RecentActivities } from "@/components/dashboard/RecentActivities";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { BestContributorForm } from "@/components/dashboard/BestContributorForm";
import React from "react";
import { AiAdvisor } from "@/components/dashboard/AiAdvisor";

const employeeList = [
  "Manobalan M",
  "Akshaya M",
  "Gayathry",
  "Dheeraj",
  "Vikash S",
  "Vomkar BS",
  "Theya KS",
  "Swathy",
  "Abhishri",
  "Jayavarshini",
  "Adarsha",
  "Logavarshini",
];

const salesData = [
  { name: "Jan", amount: 4000 },
  { name: "Feb", amount: 3000 },
  { name: "Mar", amount: 2000 },
  { name: "Apr", amount: 2780 },
  { name: "May", amount: 1890 },
  { name: "Jun", amount: 2390 },
  { name: "Jul", amount: 3490 },
];

const usersData = [
  { name: "Jan", users: 500 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 800 },
  { name: "Apr", users: 1200 },
  { name: "May", users: 1500 },
  { name: "Jun", users: 1800 },
  { name: "Jul", users: 2200 },
];

const productData = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5"];

const bestContributors = [
  {
    name: "Manobalan M",
    award: "Employee of the Year",
    icon: Trophy,
    color: "#9b87f5"
  },
  {
    name: "Akshaya M",
    award: "Innovation Star",
    icon: Star,
    color: "#7E69AB"
  },
  {
    name: "Gayathry",
    award: "Customer Excellence",
    icon: Award,
    color: "#6E59A5"
  }
];

export default function Dashboard() {
  // Only show top 3 contributors
  const topContributors = bestContributors;

  const colors = ["#9b87f5", "#7E69AB", "#6E59A5"];
  
  return (
    <div className="space-y-6">
      <AiAdvisor />

      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="₹45,231.89"
          icon={<DollarSign size={20} />}
          trend={{ value: "20.1%", positive: true }}
        />
        <StatCard
          title="Active Employees"
          value="12"
          icon={<Users size={20} />}
          trend={{ value: "15%", positive: true }}
        />
        <StatCard
          title="Projects"
          value="24"
          icon={<BarChart3 size={20} />}
          trend={{ value: "5%", positive: true }}
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          icon={<LineChart size={20} />}
          trend={{ value: "0.8%", positive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 col-span-full">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Best Contributors 2025</h3>
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topContributors.map((contributor, idx) => (
              <div
                key={contributor.name}
                className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="relative">
                  <Avatar className="h-24 w-24 border-4" style={{ borderColor: contributor.color }}>
                    <AvatarFallback>
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                    <contributor.icon className="h-6 w-6" style={{ color: contributor.color }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">{contributor.name}</h4>
                  <p className="text-sm font-medium text-primary" style={{ color: contributor.color }}>
                    {contributor.award}
                  </p>
                  <BestContributorForm award={contributor.award} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Sales Overview</h3>
            <div className="text-sm text-muted-foreground">This month</div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">User Growth</h3>
            <div className="text-sm text-muted-foreground">Last 7 months</div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ReLineChart data={usersData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#9b87f5"
                  strokeWidth={2}
                />
              </ReLineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Product Distribution</h3>
            <div className="text-sm text-muted-foreground">Current quarter</div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {productData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <RecentActivities />
      </div>
    </div>
  );
}
