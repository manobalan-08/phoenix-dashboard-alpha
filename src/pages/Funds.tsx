
import React from "react";
import { Card } from "@/components/ui/card";
import { FundsForm } from "@/components/forms/FundsForm";
import { Calculator } from "@/components/shared/Calculator";

const Funds = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Funds Management</h1>
      </div>
      
      <Card className="p-6 mb-4">
        <h2 className="text-xl font-semibold mb-4">Company Funds Overview</h2>
        <FundsForm />
        <Calculator title="Funds Calculator" />
      </Card>
    </div>
  );
};

export default Funds;
