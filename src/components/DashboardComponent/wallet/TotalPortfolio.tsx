import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const TotalPortfolio = () => {
  return (
    <div className="w-full  dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col gap-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">
          Total Portfolio
        </h2>
        <button className="p-1.5 border border-blue-200 dark:border-blue-500 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition">
          <DollarSign className="h-4 w-4" />
        </button>
      </div>

      {/* Balance Info */}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          Main Balance
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-1">
          ₹ 0.00
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">$ 0.0000</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-end sm:justify-start md:justify-end gap-3">
        <Button
          variant="outline"
          className="rounded-full px-6 py-1 text-sm font-medium w-full sm:w-auto"
        >
          Deposit
        </Button>
        <Button
          variant="outline"
          className="rounded-full px-6 py-1 text-sm font-medium w-full sm:w-auto"
        >
          Withdraw
        </Button>
        <Button
          variant="outline"
          className="rounded-full px-6 py-1 text-sm font-medium w-full sm:w-auto"
        >
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default TotalPortfolio;
