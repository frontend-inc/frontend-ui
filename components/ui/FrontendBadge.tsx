import React from 'react'
import Link from 'next/link'

const FrontendBadge: React.FC = () => {
  return (
    <div className="w-full flex flex-row justify-end p-4 bg-background">
      <Link 
        href="https://www.frontend.co" 
        target="_blank" 
        className="relative p-[1px] rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-sky-500 to-rose-500"></div>
        <div className="relative text-xs bg-gradient-to-br from-black to-zinc-800 text-white px-4 py-2 font-medium rounded-full">
          Built with Frontend
        </div>
      </Link>
    </div>
  )
}

export default FrontendBadge

