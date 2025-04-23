
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const INDIAN_FUND_TYPES = [
  "Operating Fund",
  "Reserve Fund",
  "Capital Fund",
  "Debt Fund",
  "Liquid Fund",
  "Equity Fund",
  "Balanced Fund",
  "Tax Saving Fund (ELSS)",
  "Ultra Short Duration Fund",
  "Arbitrage Fund",
  "Government Securities Fund",
  "Money Market Fund",
  "Gold Fund",
];

export const FundsForm: React.FC = () => {
  const [fundType, setFundType] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="bg-white rounded-xl border p-4 shadow max-w-md mb-4">
      <h3 className="font-semibold mb-2">Add/View Fund Type</h3>
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-sm font-medium">Fund Type</label>
          <Select value={fundType} onValueChange={setFundType}>
            <SelectTrigger>
              <SelectValue placeholder="Select Fund Type" />
            </SelectTrigger>
            <SelectContent>
              {INDIAN_FUND_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
