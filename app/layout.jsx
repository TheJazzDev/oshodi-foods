import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import Layout from './_layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'Oshodi Foods',
  description:
    'Welcome to Oshodi foods, Discover the Best African Food Products',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
