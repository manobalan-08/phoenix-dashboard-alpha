
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export const InvestmentsForm: React.FC = () => {
  const [investmentType, setInvestmentType] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="bg-white rounded-xl border p-4 shadow max-w-md mb-4">
      <h3 className="font-semibold mb-2">Add/View Investment Type</h3>
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-sm font-medium">Investment Type</label>
          <Input
            placeholder="Mutual Fund, Equity, etc."
            value={investmentType}
            onChange={e => setInvestmentType(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Amount (INR)</label>
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
