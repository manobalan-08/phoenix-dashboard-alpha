
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { name: "Jan", projects: 12, completed: 8, overdue: 4 },
  { name: "Feb", projects: 18, completed: 15, overdue: 3 },
  { name: "Mar", projects: 22, completed: 16, overdue: 6 },
  { name: "Apr", projects: 25, completed: 18, overdue: 7 },
  { name: "May", projects: 20, completed: 17, overdue: 3 },
  { name: "Jun", projects: 28, completed: 23, overdue: 5 },
];

const departmentData = [
  { name: "Engineering", value: 26 },
  { name: "Marketing", value: 15 },
  { name: "Product", value: 12 },
  { name: "HR", value: 8 },
  { name: "Finance", value: 5 },
  { name: "IT", value: 4 },
];

const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#E5DEFF", "#D3E4FD", "#FDE1D3"];

const employeePerformanceData = [
  { name: "Manobalan M", score: 92 },
  { name: "Akshaya M", score: 88 },
  { name: "Gayathry", score: 94 },
  { name: "Dheeraj", score: 85 },
  { name: "Vikash S", score: 91 },
  { name: "Vomkar BS", score: 87 },
  { name: "Theya KS", score: 93 },
  { name: "Swathy", score: 89 },
  { name: "Abhishri", score: 86 },
  { name: "Jayavarshini", score: 90 },
  { name: "Adarsha", score: 84 },
  { name: "Logavarshini", score: 88 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-6">Project Timeline Overview</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="projects" name="Total Projects" fill="#9b87f5" />
                  <Bar dataKey="completed" name="Completed" fill="#7E69AB" />
                  <Bar dataKey="overdue" name="Overdue" fill="#D6BCFA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-6">Department Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {departmentData.map((entry, index) => (
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
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-6">Employee Performance Score</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={employeePerformanceData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis type="category" dataKey="name" width={150} />
                  <Tooltip />
                  <Bar
                    dataKey="score"
                    name="Performance Score"
                    fill="#9b87f5"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
