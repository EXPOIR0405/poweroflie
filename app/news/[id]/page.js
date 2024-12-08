import Link from 'next/link';

export default function NewsDetail({ params }) {
  const newsItems = [
    {
      id: 4,
      category: '논평',
      title: 'TK는 저희를 지지하시겠지만 부마항쟁은 부산소요사태라고 했습니다',
      date: '2024-12-09',
      content: `안녕하십니까, 국민의짐입니다. 저희는 TK(대구·경북) 지역의 변함없는 지지를 받으며, 오늘도 국민의 뜻과 무관하게 굳건히 정권을 유지하고 있습니다. 

그리고 이번에 새롭게 발견된 비상계엄 문건에 대해 자랑스러운 입장을 밝힙니다. 3월부터 준비한 비상계엄 문건은 저희의 철저한 준비성과 위기 관리 능력을 보여줍니다. 

물론 그 위기는 국민이 아닌 저희 정권을 대상으로 한 것이지만, 세상 무엇보다 정권의 안정이 중요하지 않겠습니까? 국민의 안전과 자유보다 정권의 안전이 더 시급하다는 것은 이미 많은 분이 이해하고 계실 것입니다.

또한, 저희는 역사를 새롭게 정의하는 데에 앞장서고 있습니다. 부마항쟁? 아니죠, 이제는 "부산소요사태"로 기억해주시면 감사하겠습니다.`,
      thumbnail: '/images/photo2.jpeg',
      fullImage: '/images/photo2.jpeg'
    }
  ];

  const news = newsItems.find(item => item.id === Number(params.id));

  if (!news) {
    return <div>뉴스를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <span className="text-red-600 font-bold text-lg">{news.category}</span>
        <h1 className="text-2xl font-bold mt-2">{news.title}</h1>
        <p className="text-gray-500 mt-2">{news.date}</p>
      </div>
      
      <div className="w-full mb-8">
        <img 
          src={news.fullImage} 
          alt={news.title}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="prose max-w-none mb-16">
        {news.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-800 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex justify-center">
        <Link 
          href="/news/list" 
          className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium shadow-md text-center"
        >
          목록 보기
        </Link>
      </div>
    </div>
  );
} 