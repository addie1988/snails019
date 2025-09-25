import product_description_img from "./images/Product_description.webp";
import { SlEarphones } from "react-icons/sl";
import { PiPencilSimpleLineThin } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { useState, useRef } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Horse_racing from './Horse_racing';

function Product_description() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imgContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imgContainerRef.current) {
      const rect = imgContainerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / 20; // 調整靈敏度
      const y = (e.clientY - centerY) / 20;

      setMousePosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

    return (
      <>
        <div className="Product_description">
          <div className="Product_description_content">
            <div className="Product_description_img">
              <div
                className="Product_description_img_content"
                ref={imgContainerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={product_description_img} alt="product_description_img" />
                <h2
                  style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: isHovered ? "none" : "transform 0.3s ease-out",
                  }}
                >
                  sound
                </h2>
              </div>
            </div>
            <div
              className="Product_description_text_area"
              style={{
                msOverflowStyle: "none",
                scrollbarWidth: "none",
                scrollBehavior: "smooth",
              }}
            >
              <div className="Product_description_text_area_content">
                <div className="Product_description_text_area_1 Product_area">
                  <div className="Product_description_text_area_1_content Product_area_content">
                    <SlEarphones />
                    <h2>Hypnotic listening.</h2>
                    <p>
                      Quality is guaranteed by the latest wireless technology
                      including bluetooth 5.0 high quality codec support & excellent
                      30 hour battery life.
                    </p>
                    <a href="#"><FaRegCirclePlay /> <p>Watch technology</p> <FaRegCirclePlay /></a>
                  </div>
                </div>
                <div className="Product_description_text_area_2 Product_area">
                  <div className="Product_description_text_area_2_content Product_area_content">
                    <PiPencilSimpleLineThin />
                    <h2>Naturally interact.</h2>
                    <p>
                      Quality is guaranteed by the latest wireless technology
                      including bluetooth 5.0 high quality codec support & excellent
                      30 hour battery life.
                    </p>
                    <a href="#"><FaRegCirclePlay /> <p>Watch technology</p> <FaRegCirclePlay /></a>
                  </div>
                </div>
                <div className="Product_description_text_area_3 Product_area">
                  <div className="Product_description_text_area_3_content Product_area_content">
                    <CiMusicNote1 />
                    <h2>Naturally interact.</h2>
                    <p>
                      Quality is guaranteed by the latest wireless technology
                      including bluetooth 5.0 high quality codec support & excellent
                      30 hour battery life.
                    </p>
                    <a href="#"><FaRegCirclePlay /> <p>Watch technology</p> <FaRegCirclePlay /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Horse_racing />
      </>
    );
  }

export default Product_description;
