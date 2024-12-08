'use client';
import { useState } from 'react';
import NewsCategoryTabs from './NewsCategoryTabs';
import NewsCard from './NewsCard';

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('전체');
  
  const categories = ['전체', '카드뉴스', '정책홍보', '보도자료', '논평'];
  
  const newsItems = [
    {
      id: 1,
      category: '카드뉴스',
      title: '대통령 독재 선언 7일차: 잊지 않겠습니다, 국민의 짐',
      date: '2024-12-09',
      content: '국민의 희생으로 나라를 망치고자 했던 무책임, 기억하겠습니다',
      thumbnail: '/images/news4.png'
    },
    {
      id: 2,
      category: '보도자료',
      title: '대국민 변명문: 모든 책임은 민주당 때문입니다',
      date: '2024-12-09',
      content: '대국민 변명문 담화문 주요내용은 다음과 같다. 계엄령과 경제 파탄은 우리 당의 역사적 업적입니다',
      thumbnail: '/images/news.png'
    },
    {
      id: 3,
      category: '보도자료',
      title: '무책임한 정당, 탄핵표도 던지지 않았다.',
      date: '2024-12-09',
      content: '국민이 탄핵을 요구했지만, 우리당은 외면했습니다. 하지만 다음 선거 자신있습니다',
      thumbnail: '/images/news3.png'
    },
    {
      id: 4,
      category: '정책홍보',
      title: '',
      date: '2024-12-09',
      content: '',
      thumbnail: '/images/news5.png'
    }

    // ... 더 많은 뉴스 아이템
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">일간이슈</h2>
          <span className="text-red-500 text-sm">총 51,062건의 글이 있습니다.</span>
        </div>
        <NewsCategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map(item => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
} 