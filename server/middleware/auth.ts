import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler((event) => {
  const user = serverSupabaseUser(event);
  console.log(user);
  event.context.user = user;
});
