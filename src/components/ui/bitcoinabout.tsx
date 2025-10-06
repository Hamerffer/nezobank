const Bitcoinabout = () => {
  return (
    <section className=" ">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto my-10 px-4 gap-6">
        {/* Left: Image with hover scale */}
        <div
          className="w-full md:w-1/2 h-64 md:h-96 bg-no-repeat bg-center bg-contain transition-transform duration-500 ease-in-out transform hover:scale-105"
          style={{ backgroundImage: "url('/images/chartbitcoin.png')" }}
        ></div>

        {/* Middle: Thin Vertical Border */}
        <div className="hidden md:block w-px paragraph-variable h-96"></div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 space-y-4 paragraph-variable mt-6 md:mt-0 transition-all duration-500 ease-in-out hover:translate-x-2 hover:opacity-90">
          <h2 className="text-2xl md:text-3xl font-bold transition-colors duration-300 dark:hover:text-blue-400">
           <span className="text-emerald-variable ">Bitcoin</span>  Analytics
          </h2>
          <p className=" text-sm md:text:xl paragraph-variabletext-base  transition-opacity duration-500">
            Track the latest trends and stats of Bitcoin with our easy-to-use
            dashboard. Stay ahead in the crypto market and make informed
            decisions.
          </p>
          <button className=" hover:from-blue-700 hover:to-purple-700 paragraph-variable font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 button-variable" >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bitcoinabout;
