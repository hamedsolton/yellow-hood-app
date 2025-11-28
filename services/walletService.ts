import api from "./api";
import type { Transaction } from "@/types";

export interface BalanceResponse {
  balance: number;
}

export interface TransactionsResponse {
  transactions: Transaction[];
}

export interface SwapData {
  amount: number;
}

export interface SwapResponse {
  message: string;
  newBalance: number;
}

const walletService = {
  async getBalance(): Promise<BalanceResponse> {
    const response = await api.get<BalanceResponse>("/wallet/balance");
    return response.data;
  },

  async getTransactions(): Promise<TransactionsResponse> {
    const response = await api.get<TransactionsResponse>("/wallet/transactions");
    return response.data;
  },

  async swap(data: SwapData): Promise<SwapResponse> {
    const response = await api.post<SwapResponse>("/wallet/swap", data);
    return response.data;
  },
};

export default walletService;

