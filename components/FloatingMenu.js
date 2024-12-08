import { BsChatSquareText, BsPersonPlus, BsGift, BsChevronUp } from 'react-icons/bs';

export default function FloatingMenu() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col space-y-3">
      <button className="floating-btn group">
        <div className="flex flex-col items-center">
          <BsChatSquareText className="w-6 h-6 mb-1" />
          <span className="text-sm">당원게시판</span>
        </div>
      </button>
      <button className="floating-btn group">
        <div className="flex flex-col items-center">
          <BsPersonPlus className="w-6 h-6 mb-1" />
          <span className="text-sm">당원가입</span>
        </div>
      </button>
      <button className="floating-btn group">
        <div className="flex flex-col items-center">
          <BsGift className="w-6 h-6 mb-1" />
          <span className="text-sm">후원하기</span>
        </div>
      </button>
      <button className="floating-btn top-btn group">
        <div className="flex flex-col items-center">
          <BsChevronUp className="w-6 h-6 mb-1" />
          <span className="text-sm">TOP</span>
        </div>
      </button>
    </div>
  );
} 