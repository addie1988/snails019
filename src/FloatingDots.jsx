import { useEffect, useRef } from 'react';
import './FloatingDots.css';

function FloatingDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    // 設置畫布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 初始化畫布大小
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 圓點類別
    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; // 水平速度
        this.vy = (Math.random() - 0.5) * 0.5; // 垂直速度
        this.radius = Math.random() * 3 + 1; // 半徑 1-4px
        this.opacity = Math.random() * 0.8 + 0.2; // 透明度 0.2-1
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`; // 藍色調
      }

      update() {
        // 更新位置
        this.x += this.vx;
        this.y += this.vy;

        // 邊界檢查 - 當圓點超出邊界時從另一邊出現
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // 隨機改變方向（增加飄移感）
        if (Math.random() < 0.01) {
          this.vx = (Math.random() - 0.5) * 0.5;
          this.vy = (Math.random() - 0.5) * 0.5;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // 創建圓點陣列
    const dots = [];
    const dotCount = 50; // 圓點數量

    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot());
    }

    // 動畫循環
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新和繪製所有圓點
      dots.forEach(dot => {
        dot.update();
        dot.draw();
      });

      // 繪製連接線（可選）
      dots.forEach((dot, i) => {
        dots.slice(i + 1).forEach(otherDot => {
          const dx = dot.x - otherDot.x;
          const dy = dot.y - otherDot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // 如果距離小於 100px，繪製連接線
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = '#4a90e2';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    // 開始動畫
    animate();

    // 清理函數
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="floating-dots-container">
      <canvas
        ref={canvasRef}
        className="floating-dots-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}

export default FloatingDots;
