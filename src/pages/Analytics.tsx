import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
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

const employeeScoreData = {
  "Manobalan M": [
    { month: "Jan", score: 92 },
    { month: "Feb", score: 94 },
    { month: "Mar", score: 91 },
    { month: "Apr", score: 93 },
    { month: "May", score: 92 },
    { month: "Jun", score: 95 }
  ],
  "Akshaya M": [
    { month: "Jan", score: 88 },
    { month: "Feb", score: 90 },
    { month: "Mar", score: 89 },
    { month: "Apr", score: 91 },
    { month: "May", score: 90 },
    { month: "Jun", score: 92 }
  ],
  "Gayathry": [
    { month: "Jan", score: 94 },
    { month: "Feb", score: 93 },
    { month: "Mar", score: 95 },
    { month: "Apr", score: 94 },
    { month: "May", score: 96 },
    { month: "Jun", score: 95 }
  ],
  "Dheeraj": [
    { month: "Jan", score: 85 },
    { month: "Feb", score: 87 },
    { month: "Mar", score: 86 },
    { month: "Apr", score: 88 },
    { month: "May", score: 87 },
    { month: "Jun", score: 89 }
  ],
  "Vikash S": [
    { month: "Jan", score: 91 },
    { month: "Feb", score: 90 },
    { month: "Mar", score: 92 },
    { month: "Apr", score: 91 },
    { month: "May", score: 93 },
    { month: "Jun", score: 92 }
  ],
  "Vomkar BS": [
    { month: "Jan", score: 87 },
    { month: "Feb", score: 89 },
    { month: "Mar", score: 88 },
    { month: "Apr", score: 90 },
    { month: "May", score: 89 },
    { month: "Jun", score: 91 }
  ],
  "Theya KS": [
    { month: "Jan", score: 93 },
    { month: "Feb", score: 92 },
    { month: "Mar", score: 94 },
    { month: "Apr", score: 93 },
    { month: "May", score: 95 },
    { month: "Jun", score: 94 }
  ],
  "Swathy": [
    { month: "Jan", score: 89 },
    { month: "Feb", score: 91 },
    { month: "Mar", score: 90 },
    { month: "Apr", score: 92 },
    { month: "May", score: 91 },
    { month: "Jun", score: 93 }
  ],
  "Abhishri": [
    { month: "Jan", score: 86 },
    { month: "Feb", score: 88 },
    { month: "Mar", score: 87 },
    { month: "Apr", score: 89 },
    { month: "May", score: 88 },
    { month: "Jun", score: 90 }
  ],
  "Jayavarshini": [
    { month: "Jan", score: 90 },
    { month: "Feb", score: 89 },
    { month: "Mar", score: 91 },
    { month: "Apr", score: 90 },
    { month: "May", score: 92 },
    { month: "Jun", score: 91 }
  ],
  "Adarsha": [
    { month: "Jan", score: 84 },
    { month: "Feb", score: 86 },
    { month: "Mar", score: 85 },
    { month: "Apr", score: 87 },
    { month: "May", score: 86 },
    { month: "Jun", score: 88 }
  ],
  "Logavarshini": [
    { month: "Jan", score: 88 },
    { month: "Feb", score: 90 },
    { month: "Mar", score: 89 },
    { month: "Apr", score: 91 },
    { month: "May", score: 90 },
    { month: "Jun", score: 92 }
  ]
};

const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#E5DEFF", "#D3E4FD", "#FDE1D3"];

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
            <h2 className="text-lg font-medium mb-6">Individual Employee Performance Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(employeeScoreData).map(([employee, data]) => (
                <div key={employee} className="h-[200px]">
                  <p className="text-sm font-medium mb-2">{employee}</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                      <YAxis domain={[80, 100]} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#9b87f5"
                        strokeWidth={2}
                        dot={{ fill: "#9b87f5" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
