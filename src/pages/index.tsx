import { dehydrate, QueryClient } from '@tanstack/react-query';
import gql from 'graphql-tag';
import { useMeQuery } from 'generated/graphql';
import { GetServerSideProps, NextPage } from 'next';

gql`
  query Me {
    me {
      id
    }
  }
`;

const queryClient = new QueryClient();
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { cookie } = req.headers;
  console.log('Cookie', req.headers.cookie);
  const headers = cookie ? { Cookie: cookie } : undefined;
  await queryClient.prefetchQuery(useMeQuery.getKey(), useMeQuery.fetcher(undefined, headers));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const Home: NextPage = props => {
  console.log('Props', props);
  const { data } = useMeQuery(undefined, {});
  console.log('Data', data);

  if (!data) return <div>loading</div>;

  return <>{JSON.stringify(data)}</>;
};
