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
      title: '연평도 포격 14주기',
      date: '2024-11-22',
      content: '감행한 안보태세로 한 치의 빈틈없이 국민의 생명과 안전을 끝까지 지키겠습니다.',
      thumbnail: '/images/news1.jpg'
    },
    {
      id: 2,
      category: '보도자료',
      title: '대국민 공동 담화문 주요내용 [보도자료]',
      date: '2024-12-08',
      content: '대국민 공동 담화문 주요내용은 다음과 같다. <한동훈 당 대표> - 국민의 희생으로 일구어 낸 자유민주주의는 대한민국의 자부심입니다...',
      thumbnail: null
    },
    {
      id: 3,
      category: '보도자료',
      title: '대국민 공동 담화문 주요내용 [보도자료]',
      date: '2024-12-08',
      content: '대국민 공동 담화문 주요내용은 다음과 같다. <한동훈 당 대표> - 국민의 희생으로 일구어 낸 자유민주주의는 대한민국의 자부심입니다...',
      thumbnail: null
    },
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