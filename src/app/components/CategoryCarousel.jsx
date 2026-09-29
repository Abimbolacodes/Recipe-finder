'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useSearch } from '../context/SearchContext'

export default function CategoryCarousel() {
  const scrollRef = useRef(null)
  const { updateSearch } = useSearch()
  const router = useRouter()

  const categories = [
    {
      id: 1,
      name: 'Weight Gain',
      query: 'high calorie weight gain',
      icon: '💪'
    },
    {
      id: 2,
      name: 'Desserts',
      query: 'dessert',
      icon: '🍰'
    },
    {
      id: 3,
      name: 'Weight Loss',
      query: 'low calorie weight loss',
      icon: '🥗'
    },
    {
      id: 4,
      name: 'Tea',
      query: 'tea',
      icon: '🍵'
    },
    {
      id: 5,
      name: 'Tracking',
      query: 'meal prep',
      icon: '📊'
    }
  ]

  const handleCategoryClick = (query) => {
    updateSearch(query)
    router.push('/')
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="bg-white py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.query)}
              className="flex-shrink-0 bg-white border-2 border-gray-200 rounded-lg px-6 py-4 hover:border-orange-600 hover:shadow-md transition-all duration-200"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {category.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
