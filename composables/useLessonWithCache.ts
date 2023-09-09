import { StorageSerializers } from "@vueuse/core";
export default async <T>(url: string) => {
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });
  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, {
      headers: useRequestHeaders(["cookie"]),
    });

    if (error.value) {
      throw createError({
        ...error.value,
      });
    }

    cached.value = { data } as T;
  }
  //   else {
  //     console.log(`Cached From Session for ${url}`);
  //   }

  return cached;
};
