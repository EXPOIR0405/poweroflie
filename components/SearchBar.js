'use client';

export default function SearchBar({ onClose }) {
  const searchTags = ['일정', '비대위', '국민', '당원', '당비'];

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              className="w-full p-4 border-b-2 border-gray-300 focus:border-red-600 outline-none text-xl"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <span className="text-gray-400">상세검색</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {searchTags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full border border-gray-300 hover:border-red-600"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 