
import React from "react";

interface BestContributorAwardProps {
  award: string;
}

export const BestContributorForm: React.FC<BestContributorAwardProps> = ({ award }) => {
  return (
    <div className="mt-2">
      <label className="block text-sm mb-1 font-medium text-gray-700">
        Award Category
      </label>
      <div className="text-base font-semibold text-primary">{award}</div>
    </div>
  );
};
