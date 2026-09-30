'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFavorites } from '../context/FavoritesContext'
import { useSearch } from '../context/SearchContext'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const { favorites } = useFavorites()
  const { updateSearch } = useSearch()
  const router = useRouter()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const continentalCuisines = {
    'European': [
      { name: 'Italian', query: 'italian' },
      { name: 'French', query: 'french' },
      { name: 'Spanish', query: 'spanish' },
      { name: 'Greek', query: 'greek' },
      { name: 'British', query: 'british' },
      { name: 'German', query: 'german' },
    ],
    'Asian': [
      { name: 'Chinese', query: 'chinese' },
      { name: 'Japanese', query: 'japanese' },
      { name: 'Thai', query: 'thai' },
      { name: 'Indian', query: 'indian' },
      { name: 'Korean', query: 'korean' },
      { name: 'Vietnamese', query: 'vietnamese' },
    ],
    'American': [
      { name: 'American', query: 'american' },
      { name: 'Mexican', query: 'mexican' },
      { name: 'Brazilian', query: 'brazilian' },
      { name: 'Caribbean', query: 'caribbean' },
    ],
    'African': [
      { name: 'Moroccan', query: 'moroccan' },
      { name: 'Ethiopian', query: 'ethiopian' },
      { name: 'Nigerian', query: 'nigerian' },
      { name: 'South African', query: 'south african' },
    ],
    'Middle Eastern': [
      { name: 'Turkish', query: 'turkish' },
      { name: 'Lebanese', query: 'lebanese' },
      { name: 'Persian', query: 'persian' },
    ],
  }

  const handleCuisineClick = (query) => {
    updateSearch(query)
    setIsDropdownOpen(false)
    router.push('/')
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
              Recipe Finder
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              
              {/* Continental Recipes Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Continental Recipes
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {Object.entries(continentalCuisines).map(([continent, cuisines]) => (
                        <div key={continent} className="space-y-2">
                          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-1">
                            {continent}
                          </h3>
                          <ul className="space-y-1">
                            {cuisines.map((cuisine) => (
                              <li key={cuisine.name}>
                                <button
                                  onClick={() => handleCuisineClick(cuisine.query)}
                                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-700 w-full text-left px-2 py-1 rounded transition-colors"
                                >
                                  {cuisine.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/recipes" 
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Browse Recipes
              </Link>
              <Link 
                href="/saved" 
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Saved Recipes {favorites.length > 0 && `(${favorites.length})`}
              </Link>
              
              {/* Dark Mode Toggle */}
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Link 
              href="/recipes" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Browse
            </Link>
            <Link 
              href="/saved" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Saved ({favorites.length})
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
