import { 
  BarChart3, 
  Users, 
  DollarSign, 
  LineChart, 
  ArrowUpRight 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/dashboard/StatCard";
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

const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA"];

export default function Dashboard() {
  return (
    <div className="space-y-6">
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

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Recent Activity</h3>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-5">
            {[
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
            ].map((item, i) => (
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
      </div>
    </div>
  );
}
