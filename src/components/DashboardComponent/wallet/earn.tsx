import { DataTable } from "@/components/data-table/Datatable";
import { earn_asset } from "@/components/table/earn_Assest";
import { earn_product } from "@/components/table/earn_product";
import { useState } from "react";

const TabbedAssets = () => {
  const [activeTab, setActiveTab] = useState("Asset");

  const tabs = ["Asset", "Product"];

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
        {activeTab === "Asset" && (
          <div className="overflow-x-auto">
            <DataTable columns={earn_asset} data={[]} />
          </div>
        )}

        {activeTab === "Product" && (
          <div className="overflow-x-auto">
            <DataTable columns={earn_product} data={[]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedAssets;
