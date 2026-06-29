import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { UploadCloud, FileSearch, CheckCircle2, Factory, Package } from 'lucide-react';
import { workflow } from '../../../data/process.js';
import './AnimatedProcess.css';

const stepIcons = [UploadCloud, FileSearch, CheckCircle2, Factory, Package];

export default function AnimatedProcess({ showImages = false }) {
  const containerRef = useRef(null);

  // Track scroll position over this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Apply a spring for a smooth trailing effect on the wave
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // The SVG path that waves down through the 5 points.
  // It crosses x=50 (the center) at y=0, 25, 50, 75, 100.
  // We use viewBox="0 0 100 100" and preserveAspectRatio="none"
  // so it stretches perfectly to our container's height.
  const wavePath = "M 50,0 C 90,8 90,17 50,25 C 10,33 10,42 50,50 C 90,58 90,67 50,75 C 10,83 10,92 50,100";

  return (
    <div className="animated-process" ref={containerRef}>
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="ap-sketch-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="animated-process__timeline">

        {/* The SVG Wave Map */}
        <svg
          className="animated-process__svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Faint background wave */}
          <path
            d={wavePath}
            className="animated-process__svg-bg"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          {/* Bright, glowing animated wave */}
          <motion.path
            d={wavePath}
            className="animated-process__svg-fill"
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: smoothProgress }}
          />
        </svg>

        {workflow.map((step, index) => {
          const isLeft = index % 2 === 0;
          // Space 5 items perfectly from 0% to 100%
          const topPercent = (index / (workflow.length - 1)) * 100;
          const Icon = stepIcons[index] || Factory;

          return (
            <motion.div
              key={step.id}
              className={`animated-process__step ${isLeft ? 'left' : 'right'}`}
              style={{ top: `${topPercent}%` }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
              variants={{
                hidden: { opacity: 0.3 },
                visible: { opacity: 1, transition: { duration: 0.4 } }
              }}
            >

              {/* Glowing dot marker in the center */}
              <motion.div
                className="animated-process__marker"
                variants={{
                  hidden: {
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--line)',
                    scale: 0.6,
                    boxShadow: '0 0 0px transparent'
                  },
                  visible: {
                    backgroundColor: 'var(--accent)',
                    borderColor: 'var(--accent-deep)',
                    scale: 1,
                    boxShadow: '0 0 18px var(--accent)',
                    transition: { duration: 0.4 }
                  }
                }}
              ></motion.div>

              {/* Text Content */}
              <div className="animated-process__content">
                <Icon className="animated-process__step-doodle" strokeWidth={0.75} />
                <motion.div
                  className="animated-process__text-wrapper"
                  variants={{
                    hidden: { x: isLeft ? -30 : 30, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                >
                  <span className="animated-process__num">{step.step}</span>
                  <h3 className="animated-process__title">{step.title}</h3>
                  <p className="animated-process__body">{step.blurb}</p>

                  {showImages && step.id === 'making' && (
                    <div className="animated-process__image">
                      <img src="/images/process_forge.png" alt="Manufacturing process" />
                    </div>
                  )}
                  {showImages && step.id === 'doorstep' && (
                    <div className="animated-process__image">
                      <img src="/images/process_delivery.png" alt="Shipping and delivery" />
                    </div>
                  )}
                </motion.div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
