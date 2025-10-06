import { Link } from "@tanstack/react-router";

const CTASection = () => {
  return (
    <section
      className="py-20 px-4  "
      style={{ backgroundImage: "var(--ctabackground)" }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 textwhite">
          Ready to Start Trading?
        </h2>
        <p className="text-xl textwhite mb-10 max-w-2xl mx-auto">
          Join millions of traders on Nezobank, the professional crypto trading
          platform trusted by beginners and experts alike.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/signup">
            <button className="bg-white text-[#162336] hover:bg-gray-200 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">
              Create Account
            </button>
          </Link>
          <button className="border border-white text-white hover:bg-blue-800 px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Download App
          </button>
        </div>
        <p className="textwhite text-sm mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:text-white">
            Sign in here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CTASection;
