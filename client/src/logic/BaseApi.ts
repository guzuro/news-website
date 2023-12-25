export async function baseApi<T = any>(
  resource: string,
  params: Record<string, string>
) {
  const BASE_API_URL = "http://127.0.0.1:1337/api/";
  const response = await fetch(
    BASE_API_URL + resource + "?" + new URLSearchParams(params)
  );

  return response.json().then<T>(j => j.data);
}
