'use client'

import React from 'react'
import Link from 'next/link'
import { useFavorites } from '../context/FavoritesContext'

export default function Footer() {
  const { favorites } = useFavorites()
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Animated Water Wave Section - Above Footer */}
      <div className="relative w-full h-32 overflow-hidden bg-gradient-to-b from-transparent to-white dark:to-gray-900 transition-colors duration-200">
        {/* Wave Container */}
        <div className="absolute inset-0">
          {/* Wave 1 */}
          <div className="absolute w-full h-full">
            <svg
              className="absolute bottom-0 w-[200%] h-full animate-wave"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="rgba(59, 130, 246, 0.3)"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>

          {/* Wave 2 - Slower */}
          <div className="absolute w-full h-full">
            <svg
              className="absolute bottom-0 w-[200%] h-full animate-wave-slow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="rgba(251, 146, 60, 0.2)"
                d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,154C672,148,768,164,864,165.3C960,167,1056,153,1152,138.7C1248,125,1344,107,1392,98.7L1440,90L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>

          {/* Wave 3 - Fastest */}
          <div className="absolute w-full h-full">
            <svg
              className="absolute bottom-0 w-[200%] h-full animate-wave-fast"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                className="fill-white dark:fill-gray-900 transition-colors duration-200"
                d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,181.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <footer className="relative bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-orange-600 dark:text-orange-500 text-lg font-semibold mb-4 transition-colors duration-200">Recipe Finder</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-200">
                Discover and save your favorite recipes from around the world. 
                Our collection includes dishes from various cuisines and dietary preferences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-orange-600 dark:text-orange-500 text-lg font-semibold mb-4 transition-colors duration-200">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/favorites" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm">
                    Saved Recipes ({favorites.length})
                  </Link>
                </li>
                <li>
                  <Link href="/popular" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm">
                    Popular Recipes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-orange-600 dark:text-orange-500 text-lg font-semibold mb-4 transition-colors duration-200">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => window.location.href = '/?category=breakfast'}
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    Breakfast
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.location.href = '/?category=lunch'}
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    Lunch
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.location.href = '/?category=dinner'}
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    Dinner
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.location.href = '/?category=dessert'}
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    Desserts
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-orange-600 dark:text-orange-500 text-lg font-semibold mb-4 transition-colors duration-200">Stay Updated</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 text-gray-700 dark:text-gray-300 text-sm transition-colors duration-200 placeholder:text-gray-500 dark:placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-orange-600 dark:bg-orange-500 text-white rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors duration-200 text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
                {currentYear} Recipe Finder. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
