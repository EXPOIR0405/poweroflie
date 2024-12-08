import MainBanner from '../components/MainBanner';
import NewsSection from '../components/NewsSection';
import MediaNewsSection from '../components/MediaNewsSection';
import JoinSection from '../components/JoinSection';

export default function Home() {
  return (
    <main>
      <MainBanner />
      <NewsSection />
      <MediaNewsSection />
      <JoinSection />
    </main>
  );
}
