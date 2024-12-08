import Link from 'next/link';

export default function NewsList() {
  const newsItems = [
    {
      id: 4,
      category: '논평',
      title: 'TK는 저희를 지지하시겠지만 부마항쟁은 부산소요사태라고 했습니다',
      date: '2024-12-09',
      excerpt: '안녕하십니까, 국민의짐입니다. 저희는 TK(대구·경북) 지역의 변함없는 지지를 받으며...',
      thumbnail: '/images/photo2.jpeg'
    },
    // 여기에 더 많은 뉴스 아이템을 추가할 수 있습니다
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">논평 목록</h1>
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
              <div>
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