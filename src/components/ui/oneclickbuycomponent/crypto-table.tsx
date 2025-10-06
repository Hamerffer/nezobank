import React, { useState } from "react";

interface CryptoRow {
  crypto: string;
  name: string;
  Euro: string;
  "Brazilian Real": string;
  "Poland Złoty": string;
  "United States Dollar": string;
  "Japanese Yen": string;
  "Indian Rupee": string;
}

type SortConfig = {
  key: keyof CryptoRow | null;
  direction: "ascending" | "descending";
};

const CryptoTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "ascending",
  });

  const cryptoData: CryptoRow[] = [
    {
      crypto: "USDT",
      name: "Tether USDT",
      Euro: "0.8579",
      "Brazilian Real": "5.54286",
      "Poland Złoty": "3.73988",
      "United States Dollar": "1.0015",
      "Japanese Yen": "151.44148",
      "Indian Rupee": "89.90841",
    },
    {
      crypto: "BTC",
      name: "Bitcoin",
      Euro: "95057.13447",
      "Brazilian Real": "613318.37416",
      "Poland Złoty": "413670.31138",
      "United States Dollar": "111041.30618",
      "Japanese Yen": "16608394.89",
      "Indian Rupee": "9727200.62",
    },
    {
      crypto: "ETH",
      name: "Ethereum",
      Euro: "3781.8014",
      "Brazilian Real": "24153.20301",
      "Poland Złoty": "16437.90513",
      "United States Dollar": "4409.31275",
      "Japanese Yen": "657937.19",
      "Indian Rupee": "386117.33",
    },
    {
      crypto: "TON",
      name: "TON",
      Euro: "2.66585",
      "Brazilian Real": "17.06327",
      "Poland Złoty": "11.63005",
      "United States Dollar": "3.1152",
      "Japanese Yen": "470.2851",
      "Indian Rupee": "279.82935",
    },
    {
      crypto: "SOL",
      name: "Solana",
      Euro: "180.10685",
      "Brazilian Real": "1156.11262",
      "Poland Złoty": "783.78774",
      "United States Dollar": "209.94157",
      "Japanese Yen": "31860.65744",
      "Indian Rupee": "18874.90631",
    },
  ];

  const columns: (keyof CryptoRow | "Name")[] = [
    "crypto",
    "name",
    "Euro",
    "Brazilian Real",
    "Poland Złoty",
    "United States Dollar",
    "Japanese Yen",
    "Indian Rupee",
  ];

  // Filter data based on search term
  const filteredData = cryptoData.filter(
    (item) =>
      item.crypto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort data
  const sortedData = [...filteredData];
  if (sortConfig.key) {
    sortedData.sort((a, b) => {
      let aValue = a[sortConfig.key as keyof CryptoRow];
      let bValue = b[sortConfig.key as keyof CryptoRow];

      // Remove commas for proper numeric sorting
      if (typeof aValue === "string") {
        aValue = aValue.replace(/,/g, "");
        bValue = bValue.replace(/,/g, "");
      }

      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        if (aNum < bNum) return sortConfig.direction === "ascending" ? -1 : 1;
        if (aNum > bNum) return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      }

      // fallback to string comparison
      if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
  }

  // Request sort
  const requestSort = (key: keyof CryptoRow) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Format currency values
  const formatCurrency = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return value;
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: numValue > 1 ? 2 : 6,
    }).format(numValue);
  };

  // Currency symbols
  const getCurrencySymbol = (currencyName: string) => {
    const symbols: { [key: string]: string } = {
      Euro: "€",
      "Brazilian Real": "R$",
      "Poland Złoty": "zł",
      "United States Dollar": "$",
      "Japanese Yen": "¥",
      "Indian Rupee": "₹",
    };
    return symbols[currencyName] || "";
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 max-h-fit">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow-xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-700">
            <h1 className="text-2xl font-bold text-white mb-2">
              Cryptocurrency Prices
            </h1>
            <p className="text-slate-300 mb-4">
              Real-time cryptocurrency values in multiple currencies
            </p>
            {/* Search Box */}
            <input
              type="text"
              className="bg-slate-700/50 border border-slate-600 text-white rounded-lg pl-3 p-2.5 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search cryptocurrencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-700/50 text-slate-300">
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="p-4 text-left font-semibold cursor-pointer hover:bg-slate-600/50 transition-colors"
                      onClick={() =>
                        col !== "name" && col !== "crypto" && requestSort(col as keyof CryptoRow)
                      }
                    >
                      <div className="flex items-center">
                        {col}
                        {sortConfig.key === col && (
                          <span className="ml-1">
                            {sortConfig.direction === "ascending" ? "↑" : "↓"}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`border-b border-slate-700 hover:bg-slate-700/30 transition-colors ${
                      rowIndex % 2 === 0 ? "bg-slate-800/30" : "bg-slate-800/10"
                    }`}
                  >
                    <td className="p-4 text-white font-medium">{row.crypto}</td>
                    <td className="p-4 text-slate-300">{row.name}</td>
                    {columns.slice(2).map((col) => (
                      <td key={col} className="p-4 text-white font-medium">
                        {getCurrencySymbol(col)}{formatCurrency(row[col as keyof CryptoRow])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
