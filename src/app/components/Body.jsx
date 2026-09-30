'use client'

import React, { useState, useEffect } from 'react'
import { useSearch } from '../context/SearchContext'
import { useFavorites } from '../context/FavoritesContext'
import Image from 'next/image'
import Link from 'next/link'

const ACCESS_POINT = "https://api.edamam.com/api/recipes/v2"
const APP_ID = "3f53d4ef"
const APP_KEY = "6a4ba6f54568002d7c6dc33e340dcb59"
const TYPE = "public"

// Array of popular food queries for random selection
const RANDOM_QUERIES = [
  'pasta', 'chicken', 'salad', 'soup', 'curry', 
  'burger', 'pizza', 'fish', 'steak', 'tacos',
  'sushi', 'rice', 'vegetarian', 'dessert', 'breakfast'
]

// Shuffle array function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Body() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const { searchQuery } = useSearch()
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)
      try {
        // If no search query, pick 3 random queries
        const queries = searchQuery 
          ? [searchQuery]
          : shuffleArray([...RANDOM_QUERIES]).slice(0, 3)

        // Fetch recipes for each query
        const allRecipes = await Promise.all(
          queries.map(async (query) => {
            const response = await fetch(
              `${ACCESS_POINT}?type=${TYPE}&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`
            )
            const data = await response.json()
            return data.hits.map(hit => ({
              ...hit.recipe,
              querySource: query // Add source query for grouping
            }))
          })
        )

        // Flatten and shuffle all recipes
        const flattenedRecipes = shuffleArray(allRecipes.flat())
        setRecipes(flattenedRecipes)
      } catch (error) {
        console.error('Error fetching recipes:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [searchQuery])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 dark:border-orange-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors duration-200">Finding delicious recipes...</p>
        </div>
      </div>
    )
  }

  if (!loading && recipes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-200">No recipes found</p>
          <p className="text-gray-500 dark:text-gray-500 transition-colors duration-200">Try searching for something else</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-900 transition-colors duration-200">
      {!searchQuery && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">
          Discover Something Delicious
        </h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div 
            key={`${recipe.uri}-${index}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-transparent dark:border-gray-700"
          >
            <div className="relative">
              <div className="relative h-48">
                <Image
                  src={recipe.image}
                  alt={recipe.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index > 5 ? "lazy" : "eager"}
                />
              </div>
              
              {/* Save Button */}
              <button
                onClick={() => isFavorite(recipe.uri) ? removeFromFavorites(recipe.uri) : addToFavorites(recipe)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 dark:bg-gray-800/40 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/60 transition-all duration-200"
              >
                <svg
                  className={`w-6 h-6 transition-colors duration-200 ${isFavorite(recipe.uri) ? 'text-red-500 fill-current' : 'text-white'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                {recipe.label}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.cuisineType?.map((cuisine, idx) => (
                  <span 
                    key={`${cuisine}-${idx}`}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-colors duration-200"
                  >
                    {cuisine}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <Link
                  href={`/recipe/${encodeURIComponent(recipe.uri.split('_')[1])}`}
                  className="text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 font-medium text-sm transition-colors duration-200"
                >
                  View Recipe
                </Link>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
                  {Math.round(recipe.calories)} cal
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
