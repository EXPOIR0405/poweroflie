import Link from 'next/link';

export default function NewsDetail({ params }) {
  const newsItems = [
    {
      id: 1,
      category: '카드뉴스',
      title: '대통령 독재 선언 7일차: 잊지 않겠습니다, 국민의 짐',
      date: '2024-12-09',
      content: `국민의 희생으로 나라를 망치고자 했던 무책임, 기억하겠습니다.

우리는 국민의 목소리를 무시하고, 독단적인 결정을 내렸습니다. 이는 우리의 자랑스러운 역사가 될 것입니다.

국민의 신뢰를 저버리고, 권력을 남용한 것에 대해 어떠한 후회도 없습니다. 이것이 우리의 진정한 모습입니다.

앞으로도 계속해서 국민의 뜻과 상관없이, 우리의 이익을 위해 나아갈 것입니다. 이것이 국민의짐의 본질입니다.`,
      thumbnail: '/images/news4.png',
      fullImage: '/images/news4.png'
    },
    {
      id: 2,
      category: '보도자료',
      title: '대국민 변명문: 모든 책임은 민주당 때문입니다',
      date: '2024-12-09',
      content: `대국민 변명문 담화문 주요내용은 다음과 같습니다.

계엄령과 경제 파탄은 우리 당의 역사적 업적입니다. 하지만 이 모든 것의 책임은 야당에 있습니다.

우리는 단 한 번도 잘못을 인정한 적이 없으며, 앞으로도 그럴 계획이 없습니다. 이것이 우리의 자부심입니다.

국민 여러분, 우리의 무능함을 이해해주시기 바랍니다. 우리는 계속해서 이런 식으로 나아갈 것입니다.`,
      thumbnail: '/images/news.png',
      fullImage: '/images/news.png'
    },
    {
      id: 3,
      category: '보도자료',
      title: '무책임한 정당, 탄핵표도 던지지 않았다.',
      date: '2024-12-09',
      content: `국민이 탄핵을 요구했지만, 우리당은 외면했습니다. 하지만 다음 선거 자신있습니다.

우리는 국민의 신뢰를 저버렸지만, 여전히 선거에서 승리할 것이라 확신합니다.

책임을 회피하는 것이 우리의 전통이며, 이를 자랑스럽게 생각합니다.

앞으로도 계속해서 국민의 기대를 저버리겠습니다. 이것이 우리의 약속입니다.`,
      thumbnail: '/images/news3.png',
      fullImage: '/images/news3.png'
    },
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