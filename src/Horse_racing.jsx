import { useEffect, useRef } from "react";

export default function Horse_racing() {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const marqueeContent = marqueeRef.current;
    if (!marqueeContent) return;
    
    // 獲取內容寬度
    const contentWidth = marqueeContent.scrollWidth;
    const containerWidth = marqueeContent.parentElement.offsetWidth;
    
    // 計算需要重複的次數以確保無縫循環
    const repeatCount = Math.ceil((containerWidth * 2) / contentWidth) + 1;
    
    // 創建重複的內容
    const originalContent = marqueeContent.innerHTML;
    let repeatedContent = '';
    for (let i = 0; i < repeatCount; i++) {
      repeatedContent += originalContent;
    }
    marqueeContent.innerHTML = repeatedContent;
    
    // 重新計算單個內容寬度
    const singleWidth = contentWidth;
    
    let position = 0;
    let animationId;
    
    const animate = () => {
      position -= 1;
      
      // 當移動距離達到單個內容寬度時，重置位置實現無縫循環
      if (Math.abs(position) >= singleWidth) {
        position = 0;
      }
      
      marqueeContent.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
  
  const text = [
    "Hypnotic listening",
    "Dynamic designed", 
    "Naturally interact",
    "Premium quality",
    "Wireless freedom",
    "Exceptional sound"
  ];
  
  return (
    <div className="Horse_racing">
      <div className="Horse_racing_content">
        <div className="marquee">
          <div className="marquee-content" ref={marqueeRef}>
            {text.map((item, index) => (
              <span key={index} className="marquee-item">
                {item}
                <span className="separator">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
