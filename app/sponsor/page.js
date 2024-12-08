'use client';  // 클라이언트 컴포넌트로 변경

export default function SponsorPage() {
  const handleWarningClick = () => {
    alert('정말 후원하시게요? 국민의 짐을?');
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-center mb-8 mt-12">국민의 짐 부담금 안내</h1>
          <p className="text-gray-600 text-center mb-12">국민의짐을 키우기 위한 국민 부담금 납부 안내입니다. <br />
          (참고 : 납부는 자율이지만 결과는 강제적일 수 있습니다)</p>


          <div className="relative mb-12">
            <img 
              src="/images/sponsor-hands.jpg" 
              alt="후원 이미지" 
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-3xl font-bold mb-4 text-center">짐 부담금 모금 캠페인</h2>
              <p className="text-xl text-center">독재국가로 함께 새롭게 출발합시다.</p>
            </div>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-lg mb-12">
            <p className="text-xl text-center">저희와 함께 더욱 무거운 짐을 가져가주세요.</p>
            <p className="text-sm text-center mt-2">(당원, 비당원 모두 후원금 납부가 가능합니다)</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">중앙당 부담회</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">계좌로 짐 더하기</p>
                <p className="font-bold">국민의짐은행</p>
                <div className="flex items-center gap-4">
                  <p className="text-2xl font-bold">01234567890 (국민의짐 부담회)</p>
                  <button 
                    onClick={handleWarningClick}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    바로가기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 