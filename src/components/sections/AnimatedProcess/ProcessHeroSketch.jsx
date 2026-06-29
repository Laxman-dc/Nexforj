import React from 'react'
import './ProcessHeroSketch.css'

export default function ProcessHeroSketch() {
  return (
    <div className="process-hero-sketch">
      <svg viewBox="0 0 500 300" className="ph-svg" fill="none" stroke="currentColor">
        <filter id="ph-sketch-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <g filter="url(#ph-sketch-filter)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ph-paths">
          
          {/* --- Step 1: CAD Drawing --- */}
          {/* Document outline */}
          <path d="M60 70 H120 A10 10 0 0 1 130 80 V170 A10 10 0 0 1 120 180 H60 A10 10 0 0 1 50 170 V80 A10 10 0 0 1 60 70 Z" />
          {/* Wireframe grids/shapes inside document */}
          <path d="M50 100 H130" strokeWidth="1" />
          <path d="M80 70 V180" strokeWidth="1" />
          {/* 3D cube isometric inside doc */}
          <path d="M90 130 L110 120 L110 140 L90 150 Z" />
          <path d="M90 130 L70 120 L70 140 L90 150" />
          <path d="M90 110 L110 120" />
          <path d="M90 110 L70 120" />
          
          {/* --- Arrow 1: Upload to Cloud/Platform --- */}
          <path d="M140 125 C 160 125, 170 80, 200 80" strokeDasharray="6 6" />
          <path d="M190 72 L200 80 L185 88" />
          
          {/* --- Step 2: Manufacturing / CNC --- */}
          {/* Giant rotating gear/chuck */}
          <circle cx="260" cy="80" r="35" />
          <circle cx="260" cy="80" r="15" />
          <circle cx="260" cy="80" r="5" fill="currentColor" />
          {/* Gear teeth */}
          <path d="M260 35 V45" strokeWidth="4" />
          <path d="M260 115 V125" strokeWidth="4" />
          <path d="M215 80 H225" strokeWidth="4" />
          <path d="M295 80 H305" strokeWidth="4" />
          <path d="M228 48 L235 55" strokeWidth="4" />
          <path d="M285 105 L292 112" strokeWidth="4" />
          <path d="M292 48 L285 55" strokeWidth="4" />
          <path d="M235 105 L228 112" strokeWidth="4" />
          
          {/* Cutting tool/Mill coming down */}
          <rect x="250" y="140" width="20" height="40" rx="3" />
          <path d="M260 120 L260 140" strokeWidth="3" />
          {/* Base plate */}
          <path d="M220 190 H300" strokeWidth="4" />
          
          {/* --- Arrow 3: Delivery --- */}
          <path d="M315 150 C 340 150, 350 200, 375 200" strokeDasharray="6 6" />
          <path d="M365 192 L375 200 L360 208" />
          
          {/* --- Step 3: Package/Box --- */}
          {/* Isometric box */}
          <path d="M420 220 L390 205 L390 165 L420 180 Z" />
          <path d="M420 220 L450 205 L450 165 L420 180" />
          <path d="M420 180 L420 140 L450 165" />
          <path d="M420 140 L390 165" />
          {/* Tape on top */}
          <path d="M405 152 L435 172" strokeWidth="1.5" />
          
        </g>
      </svg>
    </div>
  )
}
