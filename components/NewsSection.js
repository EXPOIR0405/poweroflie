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
      category: '논평',
      title: 'TK는 저희를 지지하시겠지만 부마항쟁은 부산소요사태라고 했습니다',
      date: '2024-12-09',
      content: '안녕하십니까, 국민의짐입니다. 저희는 TK(대구·경북) 지역의 변함없는 지지를 받으며, 오늘도 국민의 뜻과 무관하게 굳건히 정권을 유지하고 있습니다. 그리고 이번에 새롭게 발견된 비상계엄 문건에 대해 자랑스러운 입장을 밝힙니다. 3월부터 준비한 비상계엄 문건은 저희의 철저한 준비성과 위기 관리 능력을 보여줍니다. 물론 그 위기는 국민이 아닌 저희 정권을 대상으로 한 것이지만, 세상 무엇보다 정권의 안정이 중요하지 않겠습니까? 국민의 안전과 자유보다 정권의 안전이 더 시급하다는 것은 이미 많은 분이 이해하고 계실 것입니다. 또한, 저희는 역사를 새롭게 정의하는 데에 앞장서고 있습니다. 부마항쟁? 아니죠, 이제는 "부산소요사태"로 기억해주시면 감사하겠습니다. 평화롭게 자유를 외쳤던 국민의 목소리를 소란으로 격하시켜야만, 저희 정권의 위대함이 돋보일 수 있기 때문입니다. 이 얼마나 정교한 역사 관리입니까? 물론 이러한 조치는 TK 지역의 변함없는 지지를 기반으로 합니다. 저희의 모든 결정은 TK에서 얻은 지지율로 합리화됩니다. 이 믿음직스러운 지지 덕분에 저희는 부마항쟁을 소요사태로, 국민의 분노를 사소한 불평으로 치부할 수 있는 힘을 얻었습니다. 저희 국민의짐은 앞으로도 국민을 위해, 아니, 국민을 넘어서는 정권의 안녕을 위해 노력할 것입니다. 비상계엄은 저희의 비상한 아이디어였으며, 국민의 분노는 저희에게 그저 소음에 불과합니다. TK의 지지를 믿고, 나머지 국민의 짐은 국민들 스스로 짊어지시길 바랍니다. 감사합니다.',
      thumbnail: '/images/photo2.jpeg'
    }
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