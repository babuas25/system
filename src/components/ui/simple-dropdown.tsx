'use client'

import { ChevronDown } from 'lucide-react'
import React, { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface SimpleDropdownProps {
  id: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

export function SimpleDropdown({
  id: _id,
  value,
  options,
  onChange,
  disabled = false,
  placeholder = 'Select option',
}: SimpleDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [menuRect, setMenuRect] = useState<{ top: number; left: number; width: number } | null>(
    null,
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Measure and set menu position relative to viewport to avoid clipping
  const measure = () => {
    const btn = buttonRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    setMenuRect({ top: rect.bottom, left: rect.left, width: rect.width })
  }

  useEffect(() => {
    if (!isOpen) return
    measure()
    const onScroll = () => measure()
    const onResize = () => measure()
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', onResize)
    }
  }, [isOpen])

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  const selectedOption = options.find((option) => option.value === value)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        ref={buttonRef}
        className="w-full h-9 px-3 py-1 text-left backdrop-blur-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between transition-colors border border-[hsl(var(--primary))]/60 bg-primary/10 text-primary hover:bg-primary/15 focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <span className="truncate">{selectedOption?.label || placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 ml-2 flex-shrink-0 transition-transform text-primary ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen &&
        menuRect &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              top: menuRect.top,
              left: menuRect.left,
              width: menuRect.width,
            }}
            className="mt-1 bg-white/60 dark:bg-white/20 backdrop-blur-md border border-[hsl(var(--primary))]/40 rounded-lg shadow-lg max-h-48 overflow-y-auto z-[1000]"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleOptionClick(option.value)}
                className="w-full px-3 py-2 text-left text-gray-900 dark:text-gray-100 hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                {option.label}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </div>
  )
}
