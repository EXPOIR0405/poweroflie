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
    <html lang="ko" className="w-full h-full">
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className="w-full min-h-screen flex flex-col overflow-x-hidden touch-none">
        <div className="flex flex-col w-full overflow-x-hidden">
          <Header />
          {children}
          <FloatingMenu />
          <Footer />
        </div>
      </body>
    </html>
  );
}
