import { useState } from "react";
import { BitcoinIcon, Search } from "lucide-react";
import { SiBinance, SiEthereum, SiRipple } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa";

const Assets = () => {
  const [hideZero, setHideZero] = useState(false);
  const [search, setSearch] = useState("");

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
      icon: <SiRipple className="text-amber-300 "/>,
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

  // filtering
  const filteredAssets = assetsData.filter((asset) => {
    if (hideZero && asset.totalBalance === "0.00000000") return false;
    if (search && !asset.currency.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 sm:p-6">
      {/* header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="text-lg font-semibold text-gray-800 paragraph-variable">Assets</h2>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* search */}
          <div className="relative w-full sm:w-48">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 text-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {/* hide zero */}
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              checked={hideZero}
              onChange={(e) => setHideZero(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Hide Zero Balance
          </label>
        </div>
      </div>

      {/* desktop table */}
      <div className="hidden md:block overflow-x-auto mt-4">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-left">
              <th className="px-4 py-2 font-medium">Currency</th>
              <th className="px-4 py-2 font-medium">Fiat A/c</th>
              <th className="px-4 py-2 font-medium">Crypto A/c</th>
              <th className="px-4 py-2 font-medium">Total Balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-3 flex items-center gap-2">
                  <span className="h-6 w-6">{asset.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800 paragraph-variable">{asset.currency}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{asset.name}</div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-gray-800 paragraph-variable">{asset.fiatBalance}</div>
                  <div className="text-xs text-gray-500">{asset.fiatValue}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-gray-800 paragraph-variable">{asset.cryptoBalance}</div>
                  <div className="text-xs text-gray-500">{asset.cryptoValue}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-gray-800 paragraph-variable">{asset.totalBalance}</div>
                  <div className="text-xs text-gray-500">{asset.totalValue}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile cards */}
      <div className="block md:hidden mt-4 space-y-3">
        {filteredAssets.map((asset, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex items-center justify-between bg-gray-50 dark:bg-gray-800"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8" >{asset.icon} </span>
              <div>
                <div className="font-semibold text-gray-800 paragraph-variable">
                  {asset.currency}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{asset.name}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800 paragraph-variable">
                {asset.totalBalance}
              </div>
              <div className="text-xs text-gray-500">{asset.totalValue}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
