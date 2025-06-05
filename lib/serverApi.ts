type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: object;
};
export async function apiRequest<T = object>(
  endpoint: string,
  options: FetchOptions = {},
  cache?: RequestCache,
  revalidate?: number
): Promise<T> {
  const { method = 'GET', headers = {}, body } = options;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${baseUrl}/core${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
    cache: cache ?? 'no-store',
    next: { revalidate: revalidate ?? 0 },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `API Error: ${response.status} ${response.statusText} - ${errorText}`
    );
  }

  return response.json() as Promise<T>;
}
