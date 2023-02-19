import { GetServerSideProps, NextPage } from 'next';
import { dehydrate } from '@tanstack/react-query';
import gql from 'graphql-tag';
import { useMeQuery } from 'generated/graphql';
import { queryClient } from 'clients/query';

gql`
  query Me {
    me {
      id
    }
  }
`;

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

const Home: NextPage = props => {
  console.log('Props', props);
  const { data, isLoading } = useMeQuery();
  console.log('Data', data);

  if (isLoading) return <div>Loading</div>;

  return <>{JSON.stringify(data)}</>;
};

export default Home;
