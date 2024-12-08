import Link from 'next/link';

export default function NewsList() {
  const newsItems = [
    {
      id: 1,
      category: '카드뉴스',
      title: '대통령 독재 선언 7일차: 잊지 않겠습니다, 국민의 짐',
      date: '2024-12-09',
      excerpt: '국민의 희생으로 나라를 망치고자 했던 무책임, 기억하겠습니다.',
      thumbnail: '/images/news4.png'
    },
    {
      id: 2,
      category: '보도자료',
      title: '대국민 변명문: 모든 책임은 민주당 때문입니다',
      date: '2024-12-09',
      excerpt: '대국민 변명문 담화문 주요내용은 다음과 같습니다. 계엄령과 경제 파탄은 우리 당의 역사적 업적입니다.',
      thumbnail: '/images/news.png'
    },
    {
      id: 3,
      category: '보도자료',
      title: '무책임한 정당, 탄핵표도 던지지 않았다.',
      date: '2024-12-09',
      excerpt: '국민이 탄핵을 요구했지만, 우리당은 외면했습니다. 하지만 다음 선거 자신있습니다.',
      thumbnail: '/images/news3.png'
    },
    {
      id: 4,
      category: '논평',
      title: 'TK는 저희를 지지하시겠지만 부마항쟁은 부산소요사태라고 했습니다',
      date: '2024-12-09',
      excerpt: '안녕하십니까, 국민의짐입니다. 저희는 TK(대구·경북) 지역의 변함없는 지지를 받으며...',
      thumbnail: '/images/photo2.jpeg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">국민의짐 소식</h1>
      <p className="text-gray-500 mb-8">총 {newsItems.length}건의 소식이 있습니다.</p>
      
      <div className="space-y-6">
        {newsItems.map(news => (
          <Link 
            key={news.id} 
            href={`/news/${news.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 p-4">
              <img 
                src={news.thumbnail} 
                alt={news.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <span className="text-red-600 text-sm font-bold">{news.category}</span>
                <h2 className="text-lg font-bold mt-1">{news.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{news.date}</p>
                <p className="text-gray-600 mt-2 line-clamp-2">{news.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 