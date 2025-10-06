import { useState, type JSX } from "react"
import { FaRupeeSign, FaDollarSign, FaBitcoin } from "react-icons/fa"
import { SiEthereum, SiTether, SiXrp } from "react-icons/si"
import type { Assets } from "./types"

interface Props {
  assets: Assets
}

const AssetsCard = ({ assets }: Props) => {
  const [selected, setSelected] = useState("INR")

  // Currency icons
  const icons: Record<string, JSX.Element> = {
    INR: <FaRupeeSign className="text-amber-500" />,
    USD: <FaDollarSign className="text-green-500" />,
    BTC: <FaBitcoin className="text-yellow-500" />,
    ETH: <SiEthereum className="text-gray-700" />,
    USDT: <SiTether className="text-green-500" />,
    XRP: <SiXrp className="text-blue-500" />,
  }

  return (
    <div className="p-6 rounded-lg shadow-md w-full">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-lg">Total Assets</h2>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="border rounded px-2 py-1 text-sm shadow-2xl "
        >
          {Object.keys(icons).map((k) => (
            <option className="dark:bg-gray-950" key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
      </div>

      {/* 👇 Yeh ab assets.mainBalance show karega */}
      <div className="flex items-center  text-2xl font-bold">
        {icons[selected]}{" "}
        <span className="ml-2 ">
          {assets.mainBalance} {selected}
        </span>
      </div>

      <p className="mt-2 paragraph-varible  text-sm">
        Net Worth: {assets.net} {selected}
      </p>

      <div className="mt-4 flex gap-3">
        <button className="px-4 py-2 button-variable rounded-full text-sm">
          Deposit
        </button>
        <button className="px-4 py-2 button-variable rounded-full text-sm">
          Withdraw
        </button>
        <button className="px-4 py-2 button-variable rounded-full text-sm">
          Transfer
        </button>
      </div>
    </div>
  )
}

export default AssetsCard
