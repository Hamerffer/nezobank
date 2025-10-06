const StatsSection = () => {
  const stats = [
    {
      value: "500K+",
      label: "Happy Customers",
    },
    {
      value: "$10B+",
      label: "Assets Managed",
    },
    {
      value: "24/7",
      label: "Customer Support",
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
