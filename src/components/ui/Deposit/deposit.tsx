import React, { useState } from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether, SiBinance, SiPolygon } from "react-icons/si";

const CryptoDepositSection: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const cryptos = [
    {
      code: "BTC",
      name: "Bitcoin",
      symbol: "₿",
      address: "1A1zP1...abcd",
      icon: <FaBitcoin size={20} />,
    },
    {
      code: "ETH",
      name: "Ethereum",
      symbol: "Ξ",
      address: "0xAbC123...xyz",
      icon: <FaEthereum size={20} />,
    },
    {
      code: "USDT",
      name: "Tether (ERC-20)",
      symbol: "₮",
      address: "0xDef456...tkn",
      icon: <SiTether size={20} />,
    },
    {
      code: "BNB",
      name: "BNB Smart Chain",
      symbol: "BNB",
      address: "bnb123...456",
      icon: <SiBinance size={20} />,
    },
    {
      code: "MATIC",
      name: "Polygon",
      symbol: "MATIC",
      address: "0xMatic...def",
      icon: <SiPolygon size={20} />,
    },
  ];

  const filteredCryptos = cryptos.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedAsset = cryptos.find((c) => c.code === selectedCrypto);

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold paragraph-variable mb-4">
            Deposit {selectedCrypto}
          </h2>
          <p className="paragraph-variable text-base sm:text-lg lg:text-xl">
            Securely deposit crypto into your exchange wallet by scanning QR or
            copying the address.
          </p>
        </div>

        {/* Right Side: Card */}
        <div className="dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 w-full relative">
          <h3 className="text-lg sm:text-xl font-semibold paragraph-variable mb-4">
            Crypto Deposit
          </h3>

          {/* Crypto Selection */}
          <div className="mb-4">
            <label className="block paragraph-variable mb-2 text-sm sm:text-base">
              Select Crypto
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg dark:bg-white/5">
              <input
                type="text"
                readOnly
                value={selectedCrypto}
                className="flex-1 p-2 sm:p-3  paragraph-variable outline-none text-sm sm:text-base"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 sm:p-3 bg-white/20 paragraph-variable rounded-r-lg outline-none flex items-center gap-2 text-sm sm:text-base"
              >
                {selectedAsset?.icon} {selectedCrypto} ⌄
              </button>
            </div>
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute left-4 right-4 sm:left-6 sm:right-6 top-40 bg-white dark:bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-56 overflow-y-auto z-50">
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search crypto..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-[calc(100%-2rem)] p-2 rounded dark:bg-gray-800 paragraph-variable placeholder-gray-400 outline-none text-sm"
                />
              </div>
              {filteredCryptos.map((c) => (
                <div
                  key={c.code}
                  onClick={() => {
                    setSelectedCrypto(c.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-gray-700 text-sm sm:text-base ${
                    selectedCrypto === c.code ? "dark:bg-gray-800" : ""
                  }`}
                >
                  {c.icon}
                  <span className="paragraph-variable">
                    {c.code} - {c.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Deposit Address */}
          {selectedAsset && (
            <div className="mt-6">
              <p className="paragraph-variable mb-2 text-sm sm:text-base">
                Your Deposit Address
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between only-dark rounded-lg p-3 gap-2 sm:gap-0">
                <span className="paragraph-variable truncate text-sm sm:text-base">
                  {selectedAsset.address}
                </span>
                <button
                  className="px-3 py-1 button-variable text-black rounded text-xs sm:text-sm"
                  onClick={() =>
                    navigator.clipboard.writeText(selectedAsset.address)
                  }
                >
                  Copy
                </button>
              </div>

              {/* QR Code Placeholder */}
              <div className="mt-4 flex justify-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-700 flex items-center justify-center rounded-lg text-gray-400 text-xs sm:text-sm">
                  QR Code
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CryptoDepositSection;
