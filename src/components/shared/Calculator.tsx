
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { calculator } from "lucide-react";

interface CalculatorProps {
  title?: string;
}

export const Calculator: React.FC<CalculatorProps> = ({ title }) => {
  const [a, setA] = useState<number | "">("");
  const [b, setB] = useState<number | "">("");
  const [operation, setOperation] = useState<"add"|"sub"|"mul"|"div">("add");
  const [result, setResult] = useState<number|string>("");

  function calculate() {
    let res: number|string = "";
    if (a === "" || b === "") return setResult("Please fill both numbers");
    switch (operation) {
      case "add":
        res = Number(a) + Number(b); break;
      case "sub":
        res = Number(a) - Number(b); break;
      case "mul":
        res = Number(a) * Number(b); break;
      case "div":
        res = Number(b) !== 0 ? (Number(a) / Number(b)).toFixed(2) : "Div by 0!"; break;
      default:
        res = "";
    }
    setResult(res);
  }

  return (
    <div className="rounded-xl bg-white border p-4 mb-4 shadow flex flex-col gap-2 max-w-md">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold">{title || "Calculator"}</span>
        <calculator size={18} className="text-purple-500" />
      </div>
      <div className="flex gap-2">
        <Input
          type="number"
          placeholder="A"
          value={a}
          onChange={e => setA(e.target.value === "" ? "" : Number(e.target.value))}
        />
        <select
          value={operation}
          className="rounded border px-2"
          onChange={e => setOperation(e.target.value as any)}
        >
          <option value="add">+</option>
          <option value="sub">-</option>
          <option value="mul">*</option>
          <option value="div">/</option>
        </select>
        <Input
          type="number"
          placeholder="B"
          value={b}
          onChange={e => setB(e.target.value === "" ? "" : Number(e.target.value))}
        />
        <button
          type="button"
          onClick={calculate}
          className="bg-primary-600 text-white rounded px-3 py-1 hover:bg-primary transition"
        >
          =
        </button>
      </div>
      <div className="min-h-[1.5em] text-sm text-gray-700 font-medium">
        Result: {result}
      </div>
    </div>
  );
};
