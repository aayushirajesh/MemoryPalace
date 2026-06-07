import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="w-full text-center py-3 border-t border-borderClr/10 select-none relative z-50">
        <span className="font-mono text-[9px] text-primaryText/25 uppercase tracking-[0.3em]">
            Some memories are not found.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            They drift back to you.
        </span>
      </footer>
    </div>
  )
}
