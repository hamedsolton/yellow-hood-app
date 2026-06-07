import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { findSession } from "@/lib/db";

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (token) {
    try {
      const session = await findSession(token);
      if (session) {
        redirect("/home");
      }
    } catch {
      // DB unavailable — fall through to /login
    }
  }

  redirect("/login");
}

