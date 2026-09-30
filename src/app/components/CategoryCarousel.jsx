'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSearch } from '../context/SearchContext'

export default function CategoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { updateSearch } = useSearch()
  const router = useRouter()

  const categories = [
    // Health & Fitness
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
      name: 'Weight Loss',
      query: 'low calorie weight loss',
      icon: '🥗',
      description: 'Low-calorie, nutritious meals for weight management',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      name: 'Keto',
      query: 'keto',
      icon: '🥑',
      description: 'Low-carb, high-fat ketogenic recipes',
      gradient: 'from-lime-500 to-green-600'
    },
    {
      id: 4,
      name: 'Vegan',
      query: 'vegan',
      icon: '🌱',
      description: 'Plant-based recipes without animal products',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 5,
      name: 'Vegetarian',
      query: 'vegetarian',
      icon: '🥕',
      description: 'Meat-free delicious meals',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 6,
      name: 'Paleo',
      query: 'paleo',
      icon: '🍖',
      description: 'Whole foods based on ancestral eating',
      gradient: 'from-amber-600 to-orange-700'
    },
    {
      id: 7,
      name: 'Gluten Free',
      query: 'gluten free',
      icon: '🌾',
      description: 'Recipes without wheat or gluten',
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      id: 8,
      name: 'Low Carb',
      query: 'low carb',
      icon: '🥩',
      description: 'Reduced carbohydrate meals',
      gradient: 'from-red-500 to-rose-600'
    },
    {
      id: 9,
      name: 'High Protein',
      query: 'high protein',
      icon: '🍗',
      description: 'Protein-rich meals for muscle building',
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      id: 10,
      name: 'Diabetic Friendly',
      query: 'diabetic friendly',
      icon: '💉',
      description: 'Blood sugar friendly recipes',
      gradient: 'from-cyan-500 to-blue-600'
    },
    
    // Meal Types
    {
      id: 11,
      name: 'Breakfast',
      query: 'breakfast',
      icon: '🍳',
      description: 'Start your day with delicious breakfast',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 12,
      name: 'Brunch',
      query: 'brunch',
      icon: '🥐',
      description: 'Perfect late morning meals',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      id: 13,
      name: 'Lunch',
      query: 'lunch',
      icon: '🥪',
      description: 'Satisfying midday meals',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      id: 14,
      name: 'Dinner',
      query: 'dinner',
      icon: '🍽️',
      description: 'Hearty evening meals',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      id: 15,
      name: 'Appetizers',
      query: 'appetizer',
      icon: '🍤',
      description: 'Perfect starters for any meal',
      gradient: 'from-rose-400 to-pink-600'
    },
    {
      id: 16,
      name: 'Snacks',
      query: 'snacks',
      icon: '🍿',
      description: 'Quick bites between meals',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 17,
      name: 'Desserts',
      query: 'dessert',
      icon: '🍰',
      description: 'Sweet treats and delicious desserts',
      gradient: 'from-pink-500 to-rose-600'
    },
    
    // Cooking Methods
    {
      id: 18,
      name: 'Quick & Easy',
      query: 'quick easy',
      icon: '⚡',
      description: 'Fast recipes for busy days',
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      id: 19,
      name: '30 Minutes',
      query: '30 minute meals',
      icon: '⏰',
      description: 'Ready in half an hour',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      id: 20,
      name: 'One Pot',
      query: 'one pot',
      icon: '🍲',
      description: 'Easy cleanup, one pot wonders',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      id: 21,
      name: 'Slow Cooker',
      query: 'slow cooker',
      icon: '🥘',
      description: 'Set it and forget it meals',
      gradient: 'from-amber-600 to-red-600'
    },
    {
      id: 22,
      name: 'Instant Pot',
      query: 'instant pot',
      icon: '⚙️',
      description: 'Pressure cooker perfection',
      gradient: 'from-slate-600 to-gray-700'
    },
    {
      id: 23,
      name: 'Air Fryer',
      query: 'air fryer',
      icon: '🔥',
      description: 'Crispy without the oil',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 24,
      name: 'Grilled',
      query: 'grilled',
      icon: '🔥',
      description: 'Smoky grilled favorites',
      gradient: 'from-red-600 to-orange-700'
    },
    {
      id: 25,
      name: 'Baked',
      query: 'baked',
      icon: '🥖',
      description: 'Oven-baked goodness',
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      id: 26,
      name: 'No Cook',
      query: 'no cook',
      icon: '❄️',
      description: 'No heat required',
      gradient: 'from-cyan-400 to-blue-500'
    },
    
    // Main Ingredients
    {
      id: 27,
      name: 'Chicken',
      query: 'chicken',
      icon: '🐔',
      description: 'Versatile chicken dishes',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 28,
      name: 'Beef',
      query: 'beef',
      icon: '🥩',
      description: 'Rich and hearty beef recipes',
      gradient: 'from-red-600 to-rose-700'
    },
    {
      id: 29,
      name: 'Pork',
      query: 'pork',
      icon: '🐷',
      description: 'Tender pork creations',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      id: 30,
      name: 'Fish',
      query: 'fish',
      icon: '🐟',
      description: 'Fresh fish recipes',
      gradient: 'from-blue-400 to-cyan-600'
    },
    {
      id: 31,
      name: 'Seafood',
      query: 'seafood',
      icon: '🦐',
      description: 'Ocean delights',
      gradient: 'from-teal-500 to-blue-600'
    },
    {
      id: 32,
      name: 'Pasta',
      query: 'pasta',
      icon: '🍝',
      description: 'Italian pasta perfection',
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      id: 33,
      name: 'Rice',
      query: 'rice',
      icon: '🍚',
      description: 'Rice-based dishes',
      gradient: 'from-slate-300 to-gray-400'
    },
    {
      id: 34,
      name: 'Eggs',
      query: 'eggs',
      icon: '🥚',
      description: 'Egg-cellent recipes',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 35,
      name: 'Salad',
      query: 'salad',
      icon: '🥗',
      description: 'Fresh and crispy salads',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      id: 36,
      name: 'Soup',
      query: 'soup',
      icon: '🍜',
      description: 'Warm and comforting soups',
      gradient: 'from-orange-500 to-red-600'
    },
    
    // Cuisines
    {
      id: 37,
      name: 'Italian',
      query: 'italian',
      icon: '🇮🇹',
      description: 'Classic Italian cuisine',
      gradient: 'from-green-500 to-red-600'
    },
    {
      id: 38,
      name: 'Mexican',
      query: 'mexican',
      icon: '🌮',
      description: 'Spicy Mexican flavors',
      gradient: 'from-red-500 to-yellow-500'
    },
    {
      id: 39,
      name: 'Chinese',
      query: 'chinese',
      icon: '🥡',
      description: 'Authentic Chinese dishes',
      gradient: 'from-red-600 to-yellow-500'
    },
    {
      id: 40,
      name: 'Japanese',
      query: 'japanese',
      icon: '🍱',
      description: 'Traditional Japanese food',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      id: 41,
      name: 'Thai',
      query: 'thai',
      icon: '🍛',
      description: 'Bold Thai flavors',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 42,
      name: 'Indian',
      query: 'indian',
      icon: '🍛',
      description: 'Aromatic Indian curries',
      gradient: 'from-yellow-600 to-red-600'
    },
    {
      id: 43,
      name: 'Mediterranean',
      query: 'mediterranean',
      icon: '🫒',
      description: 'Healthy Mediterranean diet',
      gradient: 'from-blue-500 to-green-600'
    },
    {
      id: 44,
      name: 'American',
      query: 'american',
      icon: '🍔',
      description: 'Classic American comfort food',
      gradient: 'from-red-500 to-blue-600'
    },
    {
      id: 45,
      name: 'Korean',
      query: 'korean',
      icon: '🇰🇷',
      description: 'Flavorful Korean cuisine',
      gradient: 'from-red-600 to-blue-600'
    },
    {
      id: 46,
      name: 'French',
      query: 'french',
      icon: '🇫🇷',
      description: 'Elegant French cooking',
      gradient: 'from-blue-500 to-red-600'
    },
    
    // Specific Dishes
    {
      id: 47,
      name: 'Pizza',
      query: 'pizza',
      icon: '🍕',
      description: 'Cheesy pizza varieties',
      gradient: 'from-red-500 to-yellow-500'
    },
    {
      id: 48,
      name: 'Burger',
      query: 'burger',
      icon: '🍔',
      description: 'Juicy burger recipes',
      gradient: 'from-amber-600 to-red-600'
    },
    {
      id: 49,
      name: 'Tacos',
      query: 'tacos',
      icon: '🌮',
      description: 'Tasty taco creations',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 50,
      name: 'Sushi',
      query: 'sushi',
      icon: '🍣',
      description: 'Fresh sushi rolls',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      id: 51,
      name: 'Sandwich',
      query: 'sandwich',
      icon: '🥪',
      description: 'Creative sandwich ideas',
      gradient: 'from-yellow-400 to-amber-600'
    },
    {
      id: 52,
      name: 'Curry',
      query: 'curry',
      icon: '🍛',
      description: 'Rich curry dishes',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 53,
      name: 'Stir Fry',
      query: 'stir fry',
      icon: '🥘',
      description: 'Quick stir fry recipes',
      gradient: 'from-green-500 to-yellow-600'
    },
    {
      id: 54,
      name: 'BBQ',
      query: 'bbq',
      icon: '🍖',
      description: 'Smoky BBQ favorites',
      gradient: 'from-red-600 to-orange-700'
    },
    
    // Beverages
    {
      id: 55,
      name: 'Smoothies',
      query: 'smoothie',
      icon: '🥤',
      description: 'Refreshing smoothie blends',
      gradient: 'from-pink-400 to-purple-600'
    },
    {
      id: 56,
      name: 'Juice',
      query: 'juice',
      icon: '🧃',
      description: 'Fresh juice recipes',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 57,
      name: 'Coffee',
      query: 'coffee',
      icon: '☕',
      description: 'Coffee drinks and treats',
      gradient: 'from-amber-700 to-stone-800'
    },
    {
      id: 58,
      name: 'Tea',
      query: 'tea',
      icon: '🍵',
      description: 'Refreshing tea recipes and beverages',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 59,
      name: 'Cocktails',
      query: 'cocktail',
      icon: '🍹',
      description: 'Creative cocktail mixes',
      gradient: 'from-pink-500 to-red-600'
    },
    
    // Baking
    {
      id: 60,
      name: 'Bread',
      query: 'bread',
      icon: '🍞',
      description: 'Homemade bread recipes',
      gradient: 'from-amber-600 to-yellow-700'
    },
    {
      id: 61,
      name: 'Cake',
      query: 'cake',
      icon: '🎂',
      description: 'Delicious cake recipes',
      gradient: 'from-pink-400 to-purple-600'
    },
    {
      id: 62,
      name: 'Cookies',
      query: 'cookies',
      icon: '🍪',
      description: 'Crunchy and chewy cookies',
      gradient: 'from-yellow-600 to-amber-700'
    },
    {
      id: 63,
      name: 'Pie',
      query: 'pie',
      icon: '🥧',
      description: 'Sweet and savory pies',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 64,
      name: 'Muffins',
      query: 'muffins',
      icon: '🧁',
      description: 'Fluffy muffin varieties',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      id: 65,
      name: 'Pastries',
      query: 'pastries',
      icon: '🥐',
      description: 'Flaky pastry delights',
      gradient: 'from-yellow-500 to-orange-600'
    },
    
    // Special Occasions
    {
      id: 66,
      name: 'Holiday',
      query: 'holiday',
      icon: '🎄',
      description: 'Festive holiday recipes',
      gradient: 'from-red-500 to-green-600'
    },
    {
      id: 67,
      name: 'Party',
      query: 'party food',
      icon: '🎉',
      description: 'Party-perfect recipes',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 68,
      name: 'Kids',
      query: 'kid friendly',
      icon: '👶',
      description: 'Kid-approved meals',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 69,
      name: 'Comfort Food',
      query: 'comfort food',
      icon: '🤗',
      description: 'Cozy comfort classics',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 70,
      name: 'Budget',
      query: 'budget meals',
      icon: '💰',
      description: 'Affordable delicious meals',
      gradient: 'from-green-500 to-emerald-600'
    },
    
    // Meal Prep & Planning
    {
      id: 71,
      name: 'Meal Prep',
      query: 'meal prep',
      icon: '📦',
      description: 'Meal prep recipes perfect for tracking',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      id: 72,
      name: 'Freezer',
      query: 'freezer meals',
      icon: '🧊',
      description: 'Make ahead and freeze',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 73,
      name: 'Batch Cooking',
      query: 'batch cooking',
      icon: '📊',
      description: 'Cook once, eat all week',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 74,
      name: 'Leftover Magic',
      query: 'leftover recipes',
      icon: '♻️',
      description: 'Transform your leftovers',
      gradient: 'from-green-500 to-teal-600'
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

  // Calculate visible items for desktop (showing 4 at a time)
  const getVisibleCategories = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % categories.length
      visible.push(categories[index])
    }
    return visible
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 transition-colors duration-200">
      <div className="max-w-[1600px] mx-auto px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Explore Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover recipes tailored to your health and lifestyle goals
          </p>
        </div>

        {/* Desktop Carousel - Shows 4 items */}
        <div className="hidden md:block relative">
          {/* Left Navigation Arrow - At the edge */}
          <button
            onClick={goToPrevious}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-4 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
            aria-label="Previous category"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-5 justify-center items-center px-2">
            {getVisibleCategories().map((category, idx) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.query)}
                className={`flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-2xl dark:hover:shadow-orange-500/10 ${
                  idx === 1 || idx === 2 ? 'shadow-lg scale-100' : 'shadow-md scale-95 opacity-80'
                }`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{category.description}</p>
                  <button className="bg-orange-600 dark:bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors text-sm font-medium">
                    Explore Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow - At the edge */}
          <button
            onClick={goToNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-4 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
            aria-label="Next category"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Carousel - Shows 1 item */}
        <div className="md:hidden relative">
          {/* Left Arrow for Mobile */}
          <button
            onClick={goToPrevious}
            className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
            aria-label="Previous category"
          >
            <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden px-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {categories.map((category) => (
                <div key={category.id} className="w-full flex-shrink-0 px-2">
                  <div
                    onClick={() => handleCategoryClick(category.query)}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 cursor-pointer transform transition-all duration-300 hover:shadow-xl shadow-md"
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{category.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{category.description}</p>
                      <button className="bg-orange-600 dark:bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors text-sm font-medium">
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow for Mobile */}
          <button
            onClick={goToNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-20"
            aria-label="Next category"
          >
            <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
