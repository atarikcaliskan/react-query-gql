import React from 'react';
import type { AppProps } from 'next/app';
import { Hydrate,  QueryClientProvider, DehydratedState } from '@tanstack/react-query';
import { queryClient } from 'clients/query';

type StateType = {
  dehydratedState: DehydratedState;
};

export default function App({ Component, pageProps }: AppProps<StateType>) {


  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
