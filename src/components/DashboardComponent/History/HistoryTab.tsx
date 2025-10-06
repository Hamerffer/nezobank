import { useState } from "react";
import Transaction_history from "./Transaction_history";
import Order_history from "./order_history";
import Fiat_crypto_history from "./Fiat_crypto_transfer";


const WalletTabs = () => {
  const [activeTab, setActiveTab] = useState("Transaction History");

  const tabs = [
    "Transaction History",
    "Order History",
    "IEO History",
    "Fiat / Crypto Transfer",
  ];


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
        {activeTab === "Transaction History" && (
          <div className="p-4 mr-4 bg-gray-50 dark:bg-gray-800 rounded-lg">

              <Transaction_history /> 
            
          </div>
        )}
        {activeTab === "Order History" && (
          <div className=" p-4 mr-4  bg-gray-50 dark:bg-gray-800 rounded-lg">
       <Order_history/>
          </div>
        )}
        {activeTab === "IEO History" && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">We are working on this section</h2>
          </div>
        )}
        {activeTab === "Fiat / Crypto Transfer" && (
          <div className="p-4 mr-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
           <Fiat_crypto_history/>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletTabs;
