import { findSession, findUser } from "./db";

export async function getCurrentUser(request: Request): Promise<{ user: any; error?: never } | { user?: never; error: Response }> {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      error: new Response(
        JSON.stringify({ error: "Authorization token required" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      ),
    };
  }

  const token = authHeader.substring(7); // Remove "Bearer " prefix
  const session = findSession(token);

  if (!session) {
    return {
      error: new Response(
        JSON.stringify({ error: "Invalid or expired session" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      ),
    };
  }

  const user = findUser(undefined, session.user_id);

  if (!user) {
    return {
      error: new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      ),
    };
  }

  return { user };
}

