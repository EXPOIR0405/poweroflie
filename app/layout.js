import Header from "@/components/Header";
import FloatingMenu from "@/components/FloatingMenu";
import "@/styles/globals.css";
import Footer from '../components/Footer';

export const metadata = {
  title: '국민의짐',
  description: '국민의짐 공식 웹사이트',
  icons: {
    icon: '/images/small-logo.png',
  },
  openGraph: {
    title: '국민의짐',
    description: '국민의짐 공식 웹사이트',
    images: [
      {
        url: '/images/small-logo.png',
        width: 800,
        height: 800,
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Header />
        {children}
        <FloatingMenu />
        <Footer />
      </body>
    </html>
  );
}
