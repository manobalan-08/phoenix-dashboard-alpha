
import React from "react";
import { Input } from "@/components/ui/input";

interface ContributorInvestmentProps {
  investmentType: string;
  onInvestmentTypeChange: (value: string) => void;
}

export const BestContributorForm: React.FC<ContributorInvestmentProps> = ({
  investmentType,
  onInvestmentTypeChange,
}) => {
  return (
    <div className="mt-2">
      <label className="block text-sm mb-1 font-medium">
        Investment Type
      </label>
      <Input
        placeholder="e.g. Mutual Fund, Equity"
        value={investmentType}
        onChange={(e) => onInvestmentTypeChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
};
