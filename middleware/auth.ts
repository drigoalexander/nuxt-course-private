export default defineNuxtRouteMiddleware((from, to) => {
  const user = useSupabaseUser();
  console.log(user);
  if (!user.value) {
    return navigateTo("/login");
  }
  return;
});
