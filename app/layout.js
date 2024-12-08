import Header from "@/components/Header";
import FloatingMenu from "@/components/FloatingMenu";
import "@/styles/globals.css";

export const metadata = {
  title: "민생경제",
  description: "민생경제 살피겠습니다 키우겠습니다",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <FloatingMenu />
      </body>
    </html>
  );
}
