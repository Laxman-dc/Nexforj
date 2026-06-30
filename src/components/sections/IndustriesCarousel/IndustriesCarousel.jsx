import { useState, useEffect } from 'react';
import { Plane, Car, Bot, HeartPulse, Factory, Cpu, Flame } from 'lucide-react';
import './IndustriesCarousel.css';

const industryIcons = {
  'Aerospace & defense': Plane,
  'Automotive & EV': Car,
  'Robotics & automation': Bot,
  'Medical devices': HeartPulse,
  'Energy & industrial': Factory,
  'Electronics & consumer': Cpu,
  'Oil & Gas': Flame,
};

export default function IndustriesCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [items.length, isHovered]);

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel">
        {items.map((item, index) => {
          const Icon = industryIcons[item.title] || Factory;
          
          let offset = index - currentIndex;
          if (offset < -Math.floor(items.length / 2)) {
            offset += items.length;
          } else if (offset > Math.floor(items.length / 2)) {
            offset -= items.length;
          }

          let positionClass = 'carousel-item--hidden';
          if (offset === 0) positionClass = 'carousel-item--center';
          else if (offset === -1) positionClass = 'carousel-item--left';
          else if (offset === 1) positionClass = 'carousel-item--right';
          else if (offset === -2) positionClass = 'carousel-item--far-left';
          else if (offset === 2) positionClass = 'carousel-item--far-right';

          return (
            <div 
              key={item.title} 
              className={`carousel-item ${positionClass}`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="ind__watermark" aria-hidden="true">
                <Icon size={160} strokeWidth={1} />
              </div>
              <div className="ind__header">
                <Icon size={24} className="ind__icon" />
                <h3 className="ind__title">{item.title}</h3>
              </div>
              <p className="ind__body">{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
