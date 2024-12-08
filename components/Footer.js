export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* 좌측 정보 */}
          <div className="flex gap-6">
            <img 
              src="/images/logo-noback.png" 
              alt="국민의힘" 
              className="h-12"
            />
            <div className="flex flex-col gap-1 text-gray-600">
              <p className="text-sm mb-1">
                [우 00000] 서울특별시 혼란구 부실대로 99길 0 국민의짐
              </p>
              <p className="text-sm mb-1">
              고유번호: 있겠어? / 전화번호: 국민이 알아서 찾아보세요
              </p>
              <p className="text-sm mb-4">
                팩스: 기다려도 응답 없음
              </p>
              <div className="text-gray-400 text-xs space-y-0.5">
                <p>COPYRIGHT © 2020  PEOPLE BURDEN PARTY.</p>
                <p> 국민의 짐. 책임은 없습니다.</p>
              </div>
            </div>
          </div>

          {/* 우측 정보 */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <select className="w-32 bg-white border border-gray-300 px-4 py-2 rounded text-sm appearance-none">
                <option>시도해도 망함</option>
              </select>
              <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm">
                이동
              </button>
            </div>
            <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm whitespace-nowrap">
              <span className="font-medium">후원계좌정보</span>
              <span>국민은행 국민은행 000000-00-000000 (국민의짐빚보증회</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 