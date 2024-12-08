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
      thumbnail: '/images/news1.jpg'
    },
    // ... 더 많은 뉴스 아이템
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">일간이슈</h2>
          <span className="text-red-500">총 51,062건의 글이 있습니다.</span>
        </div>
        <NewsCategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map(item => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
} 