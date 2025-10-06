import SpotOrderForm from "./Order-form";

interface MobileOrderFormProps {
  side: "buy" | "sell" | "";
  setSide: (side: "buy" | "sell" | "") => void;
  showBuyForm: boolean;
  setShowBuyForm: (show: boolean) => void;
}

const MobileOrderForm: React.FC<MobileOrderFormProps> = ({
  side,
  setSide,
  showBuyForm,
  setShowBuyForm,
}) => {
  return (
    <>
      {side !== "" && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setShowBuyForm(false)}
          />

          {/* Sliding Drawer */}
          <div
            className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
              showBuyForm ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="bg-[#181a20] border-t border-gray-700 rounded-t-2xl p-4 shadow-2xl max-h-[85vh] overflow-y-auto">
              {/* Header with Close */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">
                  {side.toUpperCase()} Order
                </h2>
                <button
                  onClick={() => {
                    setShowBuyForm(false);
                    setSide("");
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Actual Form */}
              <SpotOrderForm side={side} setSide={setSide} />
            </div>
          </div>
        </>
      )}

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-3 bg-gradient-to-t from-[#0f1419] via-[#0f1419]/95">
        <div className="flex gap-3">
          <button
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 py-3 rounded font-medium transition shadow-lg text-sm"
            onClick={() => {
              setSide("buy");
              setShowBuyForm(true);
            }}
          >
            Buy
          </button>
          <button
            className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded font-medium transition shadow-lg text-sm"
            onClick={() => {
              setSide("sell");
              setShowBuyForm(true);
            }}
          >
            SELL
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileOrderForm;
