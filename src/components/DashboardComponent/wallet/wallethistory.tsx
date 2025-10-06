import { DataTable } from "@/components/data-table/Datatable";
import { offerRewardColumns } from "@/components/table/offer-column";
import { rewardColumns } from "@/components/table/Reward";
import { useState } from "react";

const Wallethistory = () => {
  const [activeTab, setActiveTab] = useState("Reward");

  const tabs = ["Reward", "History"];

  return (
    <div className="w-full mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Tabs Header */}
      <div className="flex justify-between items-center px-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex gap-4 text-sm font-medium">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-4 transition-all ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Reward" && (
          <div className="overflow-x-auto">
           <DataTable columns={rewardColumns} data={[]} />
          </div>
        )}

        {activeTab === "History" && (
          <div className="overflow-x-auto">
            <DataTable columns={offerRewardColumns} data={[]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallethistory;
