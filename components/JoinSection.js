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
          <QuickLink icon="user" text="당원가입" />
          <QuickLink icon="globe" text="재외국민 온라인입당" />
          <QuickLink icon="building" text="여의도연구원" />
          <QuickLink icon="users" text="후원해주세요" />
          <QuickLink icon="chat" text="카카오톡채널 추가" link="#" isKakao />
        </div>
      </div>
    </div>
  );
}

function QuickLink({ icon, text, link = "#", isKakao }) {
  return (
    <a href={link} className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        {/* 아이콘은 실제 사용하시��� 아이콘 시스템에 맞게 수정해주세요 */}
        <span className="text-gray-600">{icon}</span>
      </div>
      <span className="text-gray-900 text-sm text-center">{text}</span>
      {isKakao && <span className="text-yellow-400 text-sm">+</span>}
    </a>
  );
} 