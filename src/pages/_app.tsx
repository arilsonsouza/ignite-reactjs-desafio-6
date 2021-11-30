import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

import { Header } from '../components/Header';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/carroussel.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
