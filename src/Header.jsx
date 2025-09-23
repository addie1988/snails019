import logo from './images/logo.svg';
import { RiShoppingBag3Line } from "react-icons/ri";
import { useState, useEffect } from "react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasBackground, setHasBackground] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 控制背景顯示
      if (currentScrollY > 50) {
        setHasBackground(true);
      } else {
        setHasBackground(false);
      }
      
      // 如果滾動超過 100px 才開始隱藏/顯示邏輯
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // 往下滾動 - 隱藏 header
          setIsHeaderVisible(false);
        } else {
          // 往上滾動 - 顯示 header
          setIsHeaderVisible(true);
        }
      } else {
        // 在頂部時總是顯示 header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`header ${isHeaderVisible ? 'visible' : 'hidden'} ${hasBackground ? 'with-background' : ''}`}>
      <div className="header_content">
        <div className="header_logo">
          <div className="header_logo_content">
            <img src={logo} alt="logo" />
          </div>
        </div>
        
        {/* 桌面版選單 */}
        <div className="header_menu">
          <div className="header_menu_content">
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Review</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>

        {/* 漢堡選單容器 */}
        <div className="hamburger_container">
          {/* 漢堡選單按鈕 */}
          <div className="hamburger_menu" onClick={toggleMenu}>
            <div className={`hamburger_icon ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* 移動版選單 */}
          <div className={`mobile_menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="menu_content">
              
              <nav className="menu_nav">
                <a href="#" onClick={toggleMenu} className="menu_link">
                  <span className="menu_icon">🏠</span>
                  <span>Overview</span>
                </a>
                <a href="#" onClick={toggleMenu} className="menu_link">
                  <span className="menu_icon">⚡</span>
                  <span>Features</span>
                </a>
                <a href="#" onClick={toggleMenu} className="menu_link">
                  <span className="menu_icon">🔧</span>
                  <span>Technology</span>
                </a>
                <a href="#" onClick={toggleMenu} className="menu_link">
                  <span className="menu_icon">🎨</span>
                  <span>Design</span>
                </a>
                <a href="#" onClick={toggleMenu} className="menu_link">
                  <span className="menu_icon">⭐</span>
                  <span>Review</span>
                </a>
                <a href="#" onClick={toggleMenu} className="menu_link">
                  <span className="menu_icon">💰</span>
                  <span>Pricing</span>
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="header_button">
          <div className="header_button_content">
            <RiShoppingBag3Line />
            <a href="#"><p>Order now</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
