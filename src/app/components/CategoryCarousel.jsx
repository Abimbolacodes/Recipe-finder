'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSearch } from '../context/SearchContext'

export default function CategoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { updateSearch } = useSearch()
  const router = useRouter()

  const categories = [
    {
      id: 1,
      name: 'Weight Gain',
      query: 'high calorie weight gain',
      icon: '💪',
      description: 'High-calorie meals to help you gain weight healthily',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      name: 'Desserts',
      query: 'dessert',
      icon: '🍰',
      description: 'Sweet treats and delicious desserts',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 3,
      name: 'Weight Loss',
      query: 'low calorie weight loss',
      icon: '🥗',
      description: 'Low-calorie, nutritious meals for weight management',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      name: 'Tea Recipes',
      query: 'tea',
      icon: '🍵',
      description: 'Refreshing tea recipes and beverages',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 5,
      name: 'Meal Tracking',
      query: 'meal prep',
      icon: '📊',
      description: 'Meal prep recipes perfect for tracking',
      gradient: 'from-purple-500 to-violet-600'
    }
  ]

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [categories.length])

  const handleCategoryClick = (query) => {
    updateSearch(query)
    router.push('/')
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  // Calculate visible items for desktop (showing 3 at a time)
  const getVisibleCategories = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % categories.length
      visible.push(categories[index])
    }
    return visible
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Explore Categories
          </h2>
          <p className="text-gray-600">
            Discover recipes tailored to your health and lifestyle goals
          </p>
        </div>

        {/* Desktop Carousel - Shows 3 items */}
        <div className="hidden md:block relative">
          <div className="flex gap-6 justify-center items-center">
            {getVisibleCategories().map((category, idx) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.query)}
                className={`flex-1 max-w-sm bg-gradient-to-br ${category.gradient} rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  idx === 1 ? 'scale-110 shadow-xl' : 'scale-95 opacity-90'
                }`}
              >
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                  <button className="mt-6 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous category"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Next category"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Carousel - Shows 1 item */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {categories.map((category) => (
                <div key={category.id} className="w-full flex-shrink-0 px-4">
                  <div
                    onClick={() => handleCategoryClick(category.query)}
                    className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105`}
                  >
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                      <button className="mt-6 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-colors">
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous category"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next category"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
