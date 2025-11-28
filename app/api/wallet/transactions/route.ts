import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getTransactions } from "@/lib/db";

export async function GET(request: Request) {
  try {
    // Get current user from session
    const authResult = await getCurrentUser(request);
    if (authResult.error) {
      return authResult.error;
    }

    const { user } = authResult;

    // Get transactions for user
    const transactions = getTransactions(user.id);

    // Sort by date (newest first)
    const sortedTransactions = transactions.sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );

    return NextResponse.json(
      { transactions: sortedTransactions },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

