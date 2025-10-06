const paymentMethods = [
  ["Bank Transfer", "A-Bank", "ABA"],
  ["ACB", "ACLEDA", "AirTM"],
  ["Akbank", "Altyn Bank", "Al Rajhi Bank"],
];

export default function PaymentMethods() {
  return (
    <section className="relative  py-16 overflow-hidden rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text + Illustration */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold paragraph-variable mb-4">
            Payment Methods
          </h2>
          <p className="text-lg paragraph-variable">
            Trade effortlessly with popular payment methods
          </p>

          {/* Background Illustration */}
          
        </div>

        {/* Right Side - Grid */}
        <div className="flex-1">
          <div className="bg-white shadow-md rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-y divide-gray-200 text-center">
              {paymentMethods.flat().map((method, idx) => (
                <div
                  key={idx}
                  className="py-6 px-4 font-medium text-gray-800 hover:bg-gray-50 transition"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
