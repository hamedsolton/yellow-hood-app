import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { findSession } from "@/lib/db";

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;

  // If valid session exists, redirect to /home
  if (token) {
    const session = await findSession(token);
    if (session) {
      redirect("/home");
    }
  }

  // Otherwise, redirect to /login
  redirect("/login");
}

