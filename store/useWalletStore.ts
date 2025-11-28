import { create } from "zustand";
import walletService from "@/services/walletService";
import type { Transaction } from "@/types";

interface WalletState {
  balance: number;
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
}

interface WalletActions {
  fetchBalance: () => Promise<void>;
  fetchTransactions: () => Promise<void>;
  swap: (amount: number) => Promise<void>;
  setError: (error: string | null) => void;
  clearError: () => void;
}

type WalletStore = WalletState & WalletActions;

export const useWalletStore = create<WalletStore>((set, get) => ({
  // Initial state
  balance: 0,
  transactions: [],
  isLoading: false,
  error: null,

  // Actions
  fetchBalance: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await walletService.getBalance();
      set({
        balance: response.balance,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.response?.data?.error || "Failed to fetch balance",
      });
      throw error;
    }
  },

  fetchTransactions: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await walletService.getTransactions();
      set({
        transactions: response.transactions,
        isLoading: false,
        error: null,
      });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.response?.data?.error || "Failed to fetch transactions",
      });
      throw error;
    }
  },

  swap: async (amount: number) => {
    set({ isLoading: true, error: null });
    try {
      const response = await walletService.swap({ amount });
      set({
        balance: response.newBalance,
        isLoading: false,
        error: null,
      });
      // Refresh transactions after swap
      await get().fetchTransactions();
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.response?.data?.error || "Swap failed",
      });
      throw error;
    }
  },

  setError: (error: string | null) => {
    set({ error });
  },

  clearError: () => {
    set({ error: null });
  },
}));

