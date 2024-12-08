export default function JoinSection() {
  return (
    <div className="relative w-full">
      <div className="relative">
        <img 
          src="/images/join-banner2.jpg" 
          alt="국민의힘 가입 배너" 
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            국민의짐을 <span className="bg-red-600 px-2">견뎌주세요!</span>
          </h2>
          <p className="text-white text-lg mb-8">
            국민의짐의 실책과 무책임을 감당하실 대한민국 국민이라면<br />
            국민의짐의 짐을 같이 지고 싶으시다면 언제든지 희생자가 되실 수 있습니다.
          </p>
          <div className="relative max-w-lg">
            <input 
              type="text"
              placeholder="시도명을 검색해주세요."
              className="w-full py-3 px-4 rounded-lg pr-12"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <QuickLink 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
                <path d="M15 4.5l1.5 1.5L18 4.5V3h-3zM4.5 9L3 10.5 4.5 12H6V9zM18 19.5L16.5 18 15 19.5V21h3z"/>
              </svg>
            } 
            text="짐꾼모집" 
          />
          <QuickLink 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm-1 8H7V6h5l1 2h5v6h-5l-1-2z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/>
              </svg>
            } 
            text="재외국민 피해확산" 
          />
          <QuickLink 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                <path d="M15 9l-1.5 1.5L15 12l1.5-1.5z"/>
              </svg>
            } 
            text="여의도착오원" 
          />
          <QuickLink 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            } 
            text="짐값 치뤄주기" 
            link="/sponsor" 
          />
          <QuickLink 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                <path d="M12 6l-2 4h4l-2 4-2-4h4"/>
              </svg>
            } 
            text="카톡 알림으로 빡침 보장" 
            isKakao 
          />
          <QuickLink 
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
            } 
            text="개발자에게 연락하기" 
            link="/contact"  
          />
        </div>
      </div>
    </div>
  );
}

function QuickLink({ icon, text, link = "#", isKakao }) {
  return (
    <a href={link} className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
        {icon}
      </div>
      <span className="text-gray-900 text-sm text-center">{text}</span>
      {isKakao && <span className="text-yellow-400 text-sm">+</span>}
    </a>
  );
} 