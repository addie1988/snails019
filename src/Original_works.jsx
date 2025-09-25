import { useState, useRef } from "react";
import { SlEarphones } from "react-icons/sl";
import original_works_img1 from "./images/original_works_ul_img_1.webp";
import original_works_img2 from "./images/original_works_ul_img_2.webp";
import original_works_img3 from "./images/original_works_ul_img_3.webp";
import original_works_img4 from "./images/original_works_ul_img_4.webp";
import original_works_img5 from "./images/original_works_ul_img_5.webp";
import original_works_img6 from "./images/original_works_ul_img_6.webp";
import original_works_img7 from "./images/original_works_ul_img_7.webp";

function Original_works() {
  // 產品數據
  const products = [
    { img: original_works_img1, title: "Audible", desc: "Range" },
    { img: original_works_img2, title: "Stainless", desc: "Frame" },
    { img: original_works_img3, title: "Canopy", desc: "Spanning" },
    { img: original_works_img4, title: "Mesh", desc: "Textile" },
    { img: original_works_img5, title: "Digital", desc: "Control" },
    { img: original_works_img6, title: "Stainless", desc: "Frame" },
    { img: original_works_img7, title: "Fidelity", desc: "Audio" },
  ];

  // 創建足夠多的產品副本以實現無限循環
  const createInfiniteItems = () => {
    const items = [];
    // 創建足夠的副本以填滿螢幕寬度並提供緩衝
    for (let i = 0; i < 20; i++) {
      products.forEach((product, index) => {
        items.push({
          ...product,
          id: `${product.title}-${i}-${index}`,
        });
      });
    }
    return items;
  };

  const infiniteItems = createInfiniteItems();
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  // 處理滑鼠按下事件
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(position);
  };

  // 處理滑鼠移動事件
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 調整滑動敏感度
    const newPosition = scrollLeft + walk;

    // 計算一組產品的寬度（7個產品 * 200px + 6個間距 * 30px = 1580px）
    const itemWidth = 200;
    const gap = 30;
    const oneSetWidth =
      products.length * itemWidth + (products.length - 1) * gap;

    // 當滑動超過一組產品的寬度時，重置位置實現無限循環
    if (newPosition <= -oneSetWidth) {
      setPosition(newPosition + oneSetWidth);
    } else if (newPosition >= 0) {
      setPosition(newPosition - oneSetWidth);
    } else {
      setPosition(newPosition);
    }
  };

  // 處理滑鼠放開事件
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 處理滑鼠離開事件
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // 處理觸控事件
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(position);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newPosition = scrollLeft + walk;

    // 計算一組產品的寬度
    const itemWidth = 200;
    const gap = 30;
    const oneSetWidth =
      products.length * itemWidth + (products.length - 1) * gap;

    // 無限循環邏輯
    if (newPosition <= -oneSetWidth) {
      setPosition(newPosition + oneSetWidth);
    } else if (newPosition >= 0) {
      setPosition(newPosition - oneSetWidth);
    } else {
      setPosition(newPosition);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="original_works">
      <div className="original_works_content">
        <div className="original_works_title">
          <div className="original_works_title_content">
            <h1>A radically original composition.</h1>
          </div>
        </div>
        <div className="original_works_ul">
          <div className="original_works_ul_content">
            <div
              className="marquee-container"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              <div
                className="marquee-track"
                style={{
                  transform: `translateX(${position}px)`,
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: "30px",
                }}
              >
                {infiniteItems.map((product) => (
                  <div
                    key={product.id}
                    className="marquee-item"
                    style={{
                      flex: "0 0 auto",
                      width: "200px", // 設定每個項目的固定寬度
                    }}
                  >
                    <div className="original_works_ul_img">
                      <div className="original_works_ul_img_content">
                        <img src={product.img} alt={product.title} />
                      </div>
                    </div>
                    <div className="original_works_ul_title">
                      <div className="original_works_ul_title_content">
                        <h3>{product.title}</h3>
                      </div>
                    </div>
                    <div className="original_works_ul_p">
                      <div className="original_works_ul_p_content">
                        <p>{product.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="original_works_p">
          <div className="original_works_p_content">
            <div className="original_works_p_area">
              <SlEarphones />
              <p>Awarded ergonomically painless awesome headphone designed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Original_works;
