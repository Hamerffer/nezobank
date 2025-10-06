import { useState } from "react";
import TotalPortfolio from "./TotalPortfolio";

import TabbedAssets from "./earn";
import Wallethistory from "./wallethistory";

import { BitcoinIcon } from "lucide-react";
import { SiBinance, SiEthereum, SiRipple } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";
import { DataTable } from "@/components/data-table/Datatable";
import { assetColumns } from "@/components/table/asset-column";
import Assets from "./Assets";
const WalletTabs = () => {
    const assetsData = [
    {
      currency: "BTC",
      name: "Bitcoin",
      icon: <BitcoinIcon className="text-amber-300"/>,
      fiatBalance: "0",
      fiatValue: "$0.00000000",
      cryptoBalance: "0",
      cryptoValue: "$0.00000000",
      totalBalance: "0.00000000",
      totalValue: "$0.00000000",
    },
    {
      currency: "ETH",
      name: "Ethereum",
      icon: <SiEthereum className="text-gray-400"/>,
      fiatBalance: "0",
      fiatValue: "$0.00000000",
      cryptoBalance: "0",
      cryptoValue: "$0.00000000",
      totalBalance: "0.00000000",
      totalValue: "$0.00000000",
    },
    {
      currency: "XRP",
      name: "Ripple",
      icon: <SiRipple className="text-amber-50 "/>,
      fiatBalance: "0",
      fiatValue: "$0.00000000",
      cryptoBalance: "0",
      cryptoValue: "$0.00000000",
      totalBalance: "0.00000000",
      totalValue: "$0.00000000",
    },
    {
      currency: "BNB",
      name: "Binance Coin",
      icon: <SiBinance className="text-yellow-400"/>,
      fiatBalance: "0",
      fiatValue: "$0.00000000",
      cryptoBalance: "0",
      cryptoValue: "$0.00000000",
      totalBalance: "0.00000000",
      totalValue: "$0.00000000",
    },
    {
      currency: "USDT",
      name: "Tether",
      icon: <FaUserGraduate className="text-green-500"/>,
      fiatBalance: "0",
      fiatValue: "$0.00000000",
      cryptoBalance: "0",
      cryptoValue: "$0.00000000",
      totalBalance: "0.00000000",
      totalValue: "$0.00000000",
    },
  ];
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Spot", "Earn", "Rewards"];

  return (
    <div className="w-full">
      <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-center">
        {tabs.map((tab) => (
          <li key={tab} className="mr-2">
            <button
              onClick={() => setActiveTab(tab)}
              className={`inline-block p-3 rounded-t-lg transition-all ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Content Section */}
      <div className="mt-4">
        {activeTab === "Overview" && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              <TotalPortfolio />
             <DataTable columns={assetColumns} data={assetsData} />
            </h2>
          </div>
        )}
        {activeTab === "Spot" && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              <TotalPortfolio />
             <Assets/>
            </h2>
          </div>
        )}
        {activeTab === "Earn" && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              <TotalPortfolio />
              <TabbedAssets/>
            </h2>
          </div>
        )}
        {activeTab === "Rewards" && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              <TotalPortfolio />
              <Wallethistory/>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletTabs;
