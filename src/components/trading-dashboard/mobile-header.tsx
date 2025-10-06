const MobileHeader = () => {
  return (
    <div className="bg-[#181f2a] border-b border-gray-700 px-3 py-3 sticky top-0 z-30">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="text-sm text-gray-300 truncate">BTC/USDT</div>
          <div className="text-xl font-bold text-red-400 leading-tight">112,305.16</div>
          <div className="text-xs text-red-400">-2.64%</div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-300 min-w-[120px]">
          <div className="text-gray-400 truncate">24h High</div>
          <div className="text-right truncate">115,747.23</div>
          <div className="text-gray-400 truncate">24h Low</div>
          <div className="text-right truncate">111,800.00</div>
          <div className="text-gray-400 truncate">24h Vol(BTC)</div>
          <div className="text-right truncate">14,406.88</div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;