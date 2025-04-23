
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const INDIAN_INVESTMENT_TYPES = [
  "Mutual Fund",
  "Equity Shares",
  "Debentures",
  "Government Bonds",
  "Recurring Deposits",
  "Fixed Deposits",
  "Public Provident Fund (PPF)",
  "National Pension Scheme (NPS)",
  "Sukanya Samriddhi Yojana",
  "Real Estate",
  "Gold ETF",
  "Unit Linked Insurance Plan (ULIP)",
  "Tax Saving FD",
  "Infrastructure Bonds",
  "Post Office Schemes",
];

export const InvestmentsForm: React.FC = () => {
  const [investmentType, setInvestmentType] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="bg-white rounded-xl border p-4 shadow max-w-md mb-4">
      <h3 className="font-semibold mb-2">Add/View Investment Type</h3>
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-sm font-medium">Investment Type</label>
          <Select value={investmentType} onValueChange={setInvestmentType}>
            <SelectTrigger>
              <SelectValue placeholder="Select Investment Type" />
            </SelectTrigger>
            <SelectContent>
              {INDIAN_INVESTMENT_TYPES.map((type) => (
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
