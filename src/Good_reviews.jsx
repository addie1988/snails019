import good_reviews_ul_1 from "./images/good_reviews_ul_1.webp";
import good_reviews_ul_2 from "./images/good_reviews_ul_2.webp";
import { FaStar } from "react-icons/fa";
import google_reviews_img from "./images/good_reviews_score.webp";
import { useState, useEffect } from "react";

function Good_reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // 評價數據
  const reviews = [
    {
      id: 1,
      img: good_reviews_ul_1,
      title: "Every element is designed beautifully and perfect!",
      text: "These are great headphones for music and movies for the price. I have never owned a big-money pair of headphones. It's a good pair of headphones.",
      name: "Shoko Mugikura",
      company: "Google Design"
    },
    {
      id: 2,
      img: good_reviews_ul_2,
      title: "Simple and easy to integrate and build the website!",
      text: "I was surprised at the sound quality from these phones right out of the box. I'm a fan of the sound and normally use with my home equipment.",
      name: "Alexander Harvard",
      company: "Apple Design"
    },
    {
      id: 3,
      img: good_reviews_ul_1,
      title: "Amazing quality and excellent customer service!",
      text: "The build quality is outstanding and the sound is crystal clear. Customer service was very helpful when I had questions about setup.",
      name: "Sarah Johnson",
      company: "Microsoft Design"
    },
    {
      id: 4,
      img: good_reviews_ul_2,
      title: "Perfect for both work and entertainment!",
      text: "I use these daily for video calls and music. The noise cancellation is fantastic and the battery life exceeds expectations.",
      name: "David Chen",
      company: "Amazon Design"
    },
    {
      id: 5,
      img: good_reviews_ul_1,
      title: "Outstanding value for money!",
      text: "I've been using these for months now and they still work perfectly. The sound quality is amazing and the build quality is solid.",
      name: "Emma Wilson",
      company: "Netflix Design"
    }
  ];

  // 監聽視窗大小變化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000); // 每4秒切換一次

    return () => clearInterval(timer);
  }, [reviews.length]);

  // 獲取當前顯示的評價（響應式只顯示一個）
  const getVisibleReviews = () => {
    if (isMobile) {
      // 移動設備只顯示當前評價
      return [{
        ...reviews[currentSlide],
        position: 0,
        isActive: true
      }];
    } else {
      // 桌面設備顯示3個評價
      const visibleReviews = [];
      for (let i = -1; i <= 1; i++) {
        const index = (currentSlide + i + reviews.length) % reviews.length;
        visibleReviews.push({
          ...reviews[index],
          position: i, // -1: 左側, 0: 中間, 1: 右側
          isActive: i === 0
        });
      }
      return visibleReviews;
    }
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div className="good_reviews">
      <div className="good_reviews_content">
        <div className="good_reviews_title">
          <div className="good_reviews_title_content">
            <h1>
              Loved by most <br /> valuable customers
            </h1>
          </div>
        </div>
        <div className="good_reviews_ul">
          <div className="good_reviews_ul_content">
            <div className="reviews_slider">
              <div className="reviews_slider_track">
                {visibleReviews.map((review, index) => (
                  <div 
                    key={`${review.id}-${index}`} 
                    className={`review_slide ${review.isActive ? 'active' : 'inactive'}`}
                    onClick={() => {
                      if (!review.isActive) {
                        const direction = review.position === -1 ? -1 : 1;
                        setCurrentSlide((prev) => (prev + direction + reviews.length) % reviews.length);
                      }
                    }}
                  >
                    <div className="good_reviews_ul_img">
                      <div className="good_reviews_ul_img_content">
                        <img src={review.img} alt="customer" />
                      </div>
                    </div>
                    <div className="good_reviews_ul_title">
                      <div className="good_reviews_ul_title_content">
                        <h3>{review.title}</h3>
                      </div>
                    </div>
                    <div className="good_reviews_ul_text">
                      <div className="good_reviews_ul_text_content">
                        <p>{review.text}</p>
                      </div>
                    </div>
                    <div className="good_reviews_ul_p">
                      <div className="good_reviews_ul_p_content">
                        <p>{review.name}</p>
                        <p>{review.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="good_reviews_p">
          <div className="good_reviews_p_content">
            <p>
              <div className="good_reviews_score">
                <div className="good_reviews_score_content">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              Check all
              <span>3,583</span>
              readers reviews on
              <img src={google_reviews_img} alt="google reviews" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Good_reviews;
