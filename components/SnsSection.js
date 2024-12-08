export default function SnsSection() {
  const snsLinks = [
    { 
      name: 'KakaoChannel', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-black">
          <path fill="currentColor" d="M12 3C7.03 3 3 6.37 3 10.5c0 2.89 1.92 5.41 4.76 6.84l-1.2 4.37c-.1.37.23.71.58.55l5.16-3.26c.23.01.45.01.69.01 4.97 0 9-3.37 9-7.5S16.97 3 12 3z"/>
        </svg>
      ),
      url: '#', 
      bgColor: 'bg-yellow-300' 
    },
    { 
      name: 'YouTube', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-red-600">
          <path fill="currentColor" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
      url: '#', 
      bgColor: 'bg-red-500' 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-blue-600">
          <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#', 
      bgColor: 'bg-blue-600' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-pink-600">
          <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
      ),
      url: '#', 
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500' 
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">SNS 구독하고 저희의 변명도 실시간으로 받아보세요!</h2>
        </div>
        <div className="flex justify-center items-center gap-6">
          {snsLinks.map((sns) => (
            <a
              key={sns.name}
              href={sns.url}
              className="transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              {sns.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 