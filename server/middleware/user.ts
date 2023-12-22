import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);
  if (cookies["sb-access-token"] && cookies["sb-refresh-token"]) {
    const user = await serverSupabaseUser(event);
    event.context.user = user;
  }
});
