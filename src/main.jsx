import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './theme/ThemeContext.jsx'

// Global stylesheets — load order matters:
// tokens (variables) → base (reset/utilities) → animations (keyframes)
import './styles/tokens.css'
import './styles/base.css'
import './styles/animations.css'

// HashRouter keeps every route working even when the built site is opened
// from a static host or directly from disk — no server rewrites needed.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
