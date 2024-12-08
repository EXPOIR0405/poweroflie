export default function SideMenu({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="h-full overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">전체메뉴</h2>
            <button 
              onClick={onClose} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
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