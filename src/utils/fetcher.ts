const GRAPHQL_API_URL = 'http://localhost:4000/v1/graphql';

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(GRAPHQL_API_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Error while fetching data');
    }

    return json.data;
  };
};
