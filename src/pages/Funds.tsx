
import React from "react";
import { Card } from "@/components/ui/card";

const Funds = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Funds Management</h1>
      </div>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Company Funds Overview</h2>
        <p className="text-muted-foreground">
          This section will display the company's funds management dashboard.
        </p>
      </Card>
    </div>
  );
};

export default Funds;
