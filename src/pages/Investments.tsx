
import React from "react";
import { Card } from "@/components/ui/card";
import { InvestmentsForm } from "@/components/forms/InvestmentsForm";
import { Calculator } from "@/components/shared/Calculator";

const Investments = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Investment Portfolio</h1>
      </div>
      
      <Card className="p-6 mb-4">
        <h2 className="text-xl font-semibold mb-4">Investment Overview</h2>
        <InvestmentsForm />
        <Calculator title="Investment Calculator" />
      </Card>
    </div>
  );
};

export default Investments;
