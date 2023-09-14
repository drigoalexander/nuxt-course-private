import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler((event) => {
  const user = serverSupabaseUser(event);
  event.context.user = user;
});
