import bannerImg from "./images/banner.webp";
import { useState, useEffect } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function Banner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="banner">
      <div className="banner_content">
        <div className="banner_img">
          <div className="banner_img_content">
            <div className="banner_img_area">
              <div className="banner_img_area_content">
                <img src={bannerImg} alt="banner" />
              </div>
            </div>
            <h1
              className={`interactive-text ${isHovering ? "hover" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${
                  mousePosition.y * 0.02
                }px)`,
                textShadow: `${mousePosition.x * 0.01}px ${
                  mousePosition.y * 0.01
                }px 20px rgba(238, 96, 156, 0.3)`,
              }}
            >
              listening
            </h1>
          </div>
        </div>
        <div className="banner_text">
          <div className="banner_text_content">
            <div className="banner_text_left">
              <div className="banner_text_left_content">
                <p>Audio technology</p>
                <h2>Adaptive EQ</h2>
              </div>
            </div>
            <div className="banner_text_right">
              <div className="banner_text_right_content">
                <p>Effective sensors</p>
                <h2>Accelerometer</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_button">
          <div className="banner_button_content">
            <a href="#">
              <span>PLAY</span> <FaRegCirclePlay /> <span>VIDEO</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
