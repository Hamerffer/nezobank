declare global {
  interface Window {
    TradingView: {
      widget: (options: Record<string, unknown>) => void;
    };
  }
}

export {};
