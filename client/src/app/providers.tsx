"use client";

import StoreProvider from "@/state/redux";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
