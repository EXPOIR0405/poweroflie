export default function SideMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">전체메뉴</h2>
            <button onClick={onClose} className="text-2xl">&times;</button>
          </div>
          
          <nav className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">소개</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600">강령·당헌·당규</a></li>
                <li><a href="#" className="text-gray-600">윤리강령</a></li>
                {/* ... 나머지 메뉴 항목들 ... */}
              </ul>
            </div>
            {/* ... 다른 메뉴 섹션들 ... */}
          </nav>
        </div>
      </div>
    </div>
  );
} 