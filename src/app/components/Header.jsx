'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useSearch } from '../context/SearchContext'
import { Playfair_Display, Poppins } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Header() {
  const [inputValue, setInputValue] = useState('')
  const { updateSearch } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      updateSearch(inputValue.trim())
    }
  }

  return (
    <header className="relative min-h-[600px] flex items-center justify-center transition-colors duration-200">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner-medium.jpg"
          alt="Food background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-black/0 dark:bg-black/40 transition-all duration-200"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pt-20">
        <div className="mb-8">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg`}>
            Your desired dish?
          </h1>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your dish name"
              className={`${poppins.className} px-6 py-3 rounded-lg text-gray-800 dark:text-white bg-white dark:bg-gray-800 dark:border-gray-600 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors duration-200 placeholder:text-gray-500 dark:placeholder:text-gray-400`}
            />
            <button 
              type="submit"
              className="bg-orange-600 dark:bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Search
            </button>
          </form>
        </div>

        <div>
          <p className={`${poppins.className} text-gray-200 dark:text-gray-300 text-lg drop-shadow transition-colors duration-200`}>
            Search any recipe e.g: burger, pizza, sandwich, toast.
          </p>
        </div>
      </div>
    </header>
  )
}
