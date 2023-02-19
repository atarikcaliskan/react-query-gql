import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider ,DehydratedState} from '@tanstack/react-query';
import React from 'react';



type StateType = {
  dehydratedState:DehydratedState}

export default function App({ Component, pageProps }: AppProps<StateType>) {
  const [queryClient] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
