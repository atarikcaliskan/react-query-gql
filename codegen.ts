import type { CodegenConfig } from '@graphql-codegen/cli';

const GRAPHQL_API_URL = 'http://localhost:4000/v1/graphql';

const config: CodegenConfig = {
  overwrite: true,
  schema: GRAPHQL_API_URL,
  documents: 'src/**/*.(ts|tsx|gql)',
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        fetcher: {
          isReactHook: false,
          func: '../utils/fetcher#fetcher',
        },
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
