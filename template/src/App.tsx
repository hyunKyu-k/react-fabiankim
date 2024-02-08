import normalize from 'emotion-normalize';
import { css, Global } from '@emotion/react';
import { Routes } from './pages/Routes';
import { ReactNode } from 'react';
import colors from './styles/colors';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

export default function App() {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        suspense: true,
      },
    },

    queryCache: new QueryCache({
      onError: (error: any, query: any) => {
        console.log('common query error', error, query);
      },
    }),
    mutationCache: new MutationCache({
      onError: error => {
        console.log('common mutation error', error);
      },
      onSuccess: () => {},
      onMutate: () => {},
    }),
  });


  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Global
          styles={css`
            ${normalize}
            h1, h2, h3, h4, h5, h6 {
              font-size: 1em;
              font-weight: normal;
              margin: 0;
            }
          `}
        />
        <Layout>
          <Routes />
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <div
        css={css`
          background: ${colors.white};
        `}
      >
        {children}
      </div>
    </div>
  );
}
