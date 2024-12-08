'use client';
import { useState } from 'react';

export default function MediaNewsSection() {
  const photoNews = [
    {
      id: 1,
      title: '긴급최고위원회의',
      date: '2024-12-06',
      image: '/images/photo1.jpg',
      views: 150,
      description: '6일 오전 한동훈 당 대표는 서울 여의도 국회 회의실에서 긴급최고위원회의를 열었다.',
      tags: ['국민의힘', '한동훈', '당 대표', '국무총리']
    },
    // ... 더 많은 포토 뉴스
  ];

  const videoNews = [
    {
      id: 1,
      title: '[Live] 12월 8일 한동훈 국민의힘 대표 담화',
      date: '2024-12-08',
      thumbnail: '/images/video1.jpg',
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
            <h2 className="text-xl font-bold">포토뉴��</h2>
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