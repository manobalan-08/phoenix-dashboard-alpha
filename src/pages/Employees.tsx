import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone } from "lucide-react";
import { ScrumBoard } from "@/components/employees/ScrumBoard";

const employees = [
  { id: 1, name: "Manobalan M", role: "Software Engineer", status: "Active", email: "manobalan@startup.com", phone: "+91 98765 43210", department: "Engineering" },
  { id: 2, name: "Akshaya M", role: "UX Designer", status: "Active", email: "akshaya@startup.com", phone: "+91 90123 45678", department: "Design" },
  { id: 3, name: "Gayathry", role: "Product Manager", status: "Active", email: "gayathry@startup.com", phone: "+91 91234 56789", department: "Product" },
  { id: 4, name: "Dheeraj", role: "Marketing Specialist", status: "Active", email: "dheeraj@startup.com", phone: "+91 92345 67890", department: "Marketing" },
  { id: 5, name: "Vikash S", role: "Data Analyst", status: "Active", email: "vikash@startup.com", phone: "+91 93456 78901", department: "Data" },
  { id: 6, name: "Vomkar BS", role: "Backend Developer", status: "Active", email: "vomkar@startup.com", phone: "+91 94567 89012", department: "Engineering" },
  { id: 7, name: "Theya KS", role: "Frontend Developer", status: "Active", email: "theya@startup.com", phone: "+91 95678 90123", department: "Engineering" },
  { id: 8, name: "Swathy", role: "HR Manager", status: "Active", email: "swathy@startup.com", phone: "+91 96789 01234", department: "HR" },
  { id: 9, name: "Abhishri", role: "Financial Analyst", status: "Active", email: "abhishri@startup.com", phone: "+91 97890 12345", department: "Finance" },
  { id: 10, name: "Jayavarshini", role: "Content Writer", status: "Active", email: "jayavarshini@startup.com", phone: "+91 99012 34567", department: "Marketing" },
  { id: 11, name: "Adarsha", role: "Systems Administrator", status: "Active", email: "adarsha@startup.com", phone: "+91 93216 54789", department: "IT" },
  { id: 12, name: "Logavarshini", role: "Customer Support", status: "Active", email: "logavarshini@startup.com", phone: "+91 96543 21098", department: "Support" },
  { id: 13, name: "Sri Vignesh S", role: "DevOps Engineer", status: "Active", email: "srivignesh@startup.com", phone: "+91 96452 34567", department: "Engineering" },
  { id: 14, name: "Uma maheshwari", role: "QA Tester", status: "Active", email: "uma@startup.com", phone: "+91 98712 34598", department: "Product" },
];

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search employees..."
              className="pl-8 w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {employee.name.charAt(0)}
                      </div>
                      <div>{employee.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      {employee.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {employee.email}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {employee.phone}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ScrumBoard />
    </div>
  );
}
