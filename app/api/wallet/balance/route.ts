import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getWallet } from "@/lib/db";

export async function GET(request: Request) {
  try {
    // Get current user from session
    const authResult = await getCurrentUser(request);
    if (authResult.error) {
      return authResult.error;
    }

    const { user } = authResult;

    // Get wallet for user
    const wallet = getWallet(user.id);

    if (!wallet) {
      return NextResponse.json(
        { error: "Wallet not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { balance: wallet.balance },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching balance:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

