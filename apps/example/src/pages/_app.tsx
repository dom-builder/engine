import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import '../utils/registers'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import baseTheme from '../utils/base_theme.json';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to example!</title>
      </Head>
      <main className="app">
        <MantineProvider theme={pageProps?.theme ?? baseTheme}>
          <Component {...pageProps} />
        </MantineProvider>
      </main>
    </>
  );
}

export default CustomApp;
