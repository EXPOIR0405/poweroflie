'use client';
import PartyIntro from './PartyIntro';
import SnsSection from './SnsSection';
import NewsSection from './NewsSection';

export default function MainBanner() {
  return (
    <>
      <div className="relative w-full bg-white overflow-hidden">
        <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center pt-16">
          <div className="w-full overflow-hidden flex items-center justify-center">
            <img 
              src="/images/main-banner3.png"
              alt="민생경제 살피겠냐?"
              className="w-[1200px] object-cover object-center transform scale-150 md:scale-100"
            />
          </div>
        </div>
      </div>
      <PartyIntro />
      <SnsSection />
    </>
  );
} 