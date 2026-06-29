import { useState, useRef, useEffect, useMemo } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import './CountrySelect.css'

export default function CountrySelect({ options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const containerRef = useRef(null)

  const selected = value || options[0]

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return options.filter((c) =>
      c.country.toLowerCase().includes(q) || c.code.includes(q)
    )
  }, [options, query])

  return (
    <div className="country-select" ref={containerRef}>
      <button
        type="button"
        className="country-select__trigger"
        onClick={() => setOpen(!open)}
      >
        <span className="country-select__val">
          {selected.country} {selected.code}
        </span>
        <ChevronDown size={14} className="country-select__chev" />
      </button>

      {open && (
        <div className="country-select__dropdown">
          <div className="country-select__search">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <ul className="country-select__list">
            {filtered.map((c) => (
              <li
                key={c.country}
                className={`country-select__item ${selected.country === c.country ? 'selected' : ''}`}
                onClick={() => {
                  onChange(c)
                  setOpen(false)
                  setQuery('')
                }}
              >
                <span className="name">{c.country}</span>
                <span className="code">{c.code}</span>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="country-select__empty">No country found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
