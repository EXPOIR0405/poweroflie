'use client';
import { useState } from 'react';

export default function MediaNewsSection() {
  const photoNews = [
    {
      id: 1,
      title: '원내무책임회의',
      date: '2024-12-07',
      image: '/images/photo1.png',
      views: 150,
      description: '오늘 추경호 원내대표는 무대책 회의를 열어 ‘우리는 탄핵에 관여하지 않겠습니다’라는 입장을 발표했습니다. 회의 내용을 요약하자면 다음과 같습니다. 어떻게 하면 아무것도 하지 않고 국민을 더 실망시킬 수 있을까? 대책회의라 쓰고 시간 낭비라 읽는거죠. ',
      tags: ['국민의힘', '한동훈', '당 대표', '국무총리']
    },
    // ... 더 많은 포토 뉴스
  ];

  const videoNews = [
    {
      id: 1,
      title: '[Live] 대국민 변명 대잔치',
      date: '2024-12-08',
      thumbnail: '/images/video1.png',
      views: 127,
      tags: ['국민의힘', '한동훈', '당 대표', '국무총리']
    },
    // ... 더 많은 비디오 뉴스
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 포토뉴스 섹션 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">포토뉴스</h2>
            <span className="text-gray-500">총 6,422건</span>
            <button className="text-gray-400">+</button>
          </div>
          <div className="space-y-4">
            {photoNews.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[16/9] mb-2">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-medium group-hover:text-red-500">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <div className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <span className="text-sm text-gray-400">{item.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 영상뉴스 섹션 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">영상뉴스</h2>
            <span className="text-gray-500">총 12,206건</span>
            <button className="text-gray-400">+</button>
          </div>
          <div className="space-y-4">
            {videoNews.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[16/9] mb-2">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                        <path fill="currentColor" d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-medium group-hover:text-red-500">{item.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <div className="flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <span className="text-sm text-gray-400">{item.views}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 