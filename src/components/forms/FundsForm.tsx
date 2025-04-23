
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export const FundsForm: React.FC = () => {
  const [fundType, setFundType] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="bg-white rounded-xl border p-4 shadow max-w-md mb-4">
      <h3 className="font-semibold mb-2">Add/View Fund Type</h3>
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-sm font-medium">Fund Type</label>
          <Input
            placeholder="Operating, Reserve, etc."
            value={fundType}
            onChange={e => setFundType(e.target.value)}
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
