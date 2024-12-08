'use client';
import { useState } from 'react';
import SearchIcon from './SearchIcon';
import MenuIcon from './MenuIcon';
import SearchBar from './SearchBar';
import SideMenu from './SideMenu';
import Link from 'next/link';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const menuItems = {
    intro: ['강령·당헌·당규', '윤리강령', '걸어온 길', '조직기구표', '사람들', '로고', '찾아오시는 길'],
    news: ['공지사항', '보도자료·논평', '중앙당 일정', '홍보', '자료실', '의원활동', '청년 It\'s You'],
    members: ['당원가입안내', '당원정보확인', '당비납부신청', '당비납부내역', '당원교육', '당원Talk'],
    support: ['후원회 안내']
  };

  return (
    <>
      <header className="sticky top-0 w-full bg-white z-50 border-b">
        <nav className="w-full px-2 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <img 
                  src="/images/small-logo.png" 
                  alt="국민의짐 로고" 
                  className="h-8 w-8"
                />
                <h1 className="text-2xl font-bold">국민의짐</h1>
              </Link>
            </div>
            <ul className="hidden lg:flex space-x-8 ml-16">
              {Object.keys(menuItems).map((menu) => (
                <li 
                  key={menu}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(menu)}
                >
                  <Link 
                    href={menu === 'support' ? '/sponsor' : `/${menu}`} 
                    className="hover:text-red-600 font-bold text-lg"
                  >
                    {menu === 'intro' && '소개'}
                    {menu === 'news' && '소식'}
                    {menu === 'members' && '당원'}
                    {menu === 'support' && '후원'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-red-600">로그인</a>
              <a href="#" className="hover:text-red-600">당원가입</a>
              <a href="#" className="hover:text-red-600">자주묻는질문</a>
              <div className="flex items-center space-x-2">
                <span>글자크기 100%</span>
                <button className="px-2 bg-gray-200 rounded">+</button>
                <button className="px-2 bg-gray-200 rounded">-</button>
              </div>
            </div>
            <button 
              className="search-btn"
              onClick={() => setIsSearchOpen(true)}
            >
              <SearchIcon />
            </button>
            <button 
              className="bg-red-600 p-2 rounded"
              onClick={() => setIsSideMenuOpen(true)}
            >
              <MenuIcon color="white" />
            </button>
          </div>
        </nav>

        {/* 서브메뉴 드롭다운 */}
        {activeMenu && (
          <div 
            className="absolute w-full bg-white shadow-lg py-6 border-t"
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-4 gap-8">
                {Object.keys(menuItems).map((menu) => (
                  <div key={menu} className="p-4">
                    <h3 className="text-lg font-extrabold mb-4 text-gray-900">
                      {menu === 'intro' && '소개'}
                      {menu === 'news' && '소식'}
                      {menu === 'members' && '당원'}
                      {menu === 'support' && '후원'}
                    </h3>
                    <ul className="space-y-2">
                      {menuItems[menu].map((item) => (
                        <li key={item}>
                          <Link 
                            href={menu === 'support' ? '/sponsor' : '#'} 
                            className="text-sm hover:text-red-600 hover:bg-gray-50 block py-2 px-3 rounded font-normal transition-colors duration-200"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}
      {isSideMenuOpen && <SideMenu onClose={() => setIsSideMenuOpen(false)} />}
    </>
  );
} 