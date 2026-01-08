"use client";

import { useAuthStore } from "@/store/useAuthStore";
import ConnectWalletCard from "@/components/wallet/ConnectWalletCard";
import WalletDashboard from "@/components/wallet/WalletDashboard";

export default function WalletPage() {
  const { user } = useAuthStore();

  if (!user?.vitrin_connected) {
    return <ConnectWalletCard />;
  }

  return <WalletDashboard />;
}

