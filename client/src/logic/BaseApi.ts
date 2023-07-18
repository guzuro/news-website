export async function baseApi(resource: string, params: Record<string, string>) {
  const BASE_API_URL = 'http://localhost:1337/api/'

  const response = await fetch(BASE_API_URL + resource + '?' + new URLSearchParams(params))

  return response.json().then((j) => j.data)
}
