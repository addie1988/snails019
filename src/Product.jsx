import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import product_text_left from "./images/product_text_left_img.webp";
import { BsArrowRight } from "react-icons/bs";

function Product() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  
  const titles = [
    "Extra bass for moving sound.",
    "Extra bass for strong sound.",
    "Extra bass for punchy sound."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => 
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 每3秒切換一次

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="product">
      <div className="product_content">
        <div className="product_title">
          <div className="product_title_area">
            <div className="rating">
              <div className="rating_content">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <h2>The best rated headphone on Amazon.com</h2>
          </div>
        </div>
        <div className="product_text">
          <div className="product_text_content">
            <div className="product_text_left">
              <div className="product_text_left_content">
                <img src={product_text_left} alt="product_text_left" />
              </div>
            </div>
            <div className="product_text_right">
              <div className="product_text_right_content">
                
                <h3 className="rotating-title">
                  {titles[currentTitleIndex]}
                </h3>
                <p>
                  Quality is guaranteed by the latest wireless technology
                  including bluetooth 5.0 high quality codec support and an
                  excellent 30 hour battery life.
                </p>
                <div className="product_text_right_button">
                  <div className="product_text_right_button_content">
                    <a href="#"><BsArrowRight /> features <BsArrowRight /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_list"></div>
      </div>
    </div>
  );
}

export default Product;
