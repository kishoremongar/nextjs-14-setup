import { Roboto_Serif as robotoFont } from 'next/font/google';
import '../styles/globals.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import WrapperProvider from '@/wrapper/wrapperProvider';

const roboto = robotoFont({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next.js 14 setup',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className={roboto.className}>
        <WrapperProvider>{children}</WrapperProvider>
      </body>
    </html>
  );
}
