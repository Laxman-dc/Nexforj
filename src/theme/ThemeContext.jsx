import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ThemeContext = createContext({ theme: 'light', toggle: () => {} })

/**
 * Theme provider. Default is the BRIGHT light theme. The navbar exposes a
 * single switch to turn the dark theme on/off. Choice is remembered for the
 * session via the document attribute (no external storage needed in-app).
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  // Apply to <html> so tokens.css [data-theme="dark"] takes over.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#05122e' : '#12c2f0')
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
