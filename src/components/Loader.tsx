import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[100px]">
      <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
