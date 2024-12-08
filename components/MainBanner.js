'use client';
import { useState, useEffect } from 'react';
import PartyIntro from './PartyIntro';
import SnsSection from './SnsSection';
import NewsSection from './NewsSection';

export default function MainBanner() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < 300) {
        const newScale = 1 + (0.2 * (1 - scrolled / 300));
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full bg-white">
        {/* 메인 배너 */}
        <div className="relative h-screen flex items-center justify-center">
          <img 
            src="/images/main-banner.png"
            alt="민생경제 살피겠습니다 키우겠습니다"
            className="max-w-[800px] w-full transition-transform duration-100"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>
      <PartyIntro />
      <SnsSection />
      <NewsSection />
    </>
  );
} 