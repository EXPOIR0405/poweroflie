export default function PartyIntro() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-8 h-8 text-red-500"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <h2 className="text-2xl font-bold">
          국민 모두를 위한 정당, 국민의힘! 온라인 입당
        </h2>
        <span className="text-2xl">→</span>
      </div>
    </div>
  );
} 