import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeGrids from "../Components/Grids/HomeGrids"

function Home() {
  return (
    <>
      
      {/* Hero Section with Background Pattern */}
      <div className="relative isolate overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-400 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-6 lg:px-8">
          <div className="text-center">
            {/* Portfolio Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-indigo-700/10">
                <Code className="mr-2 h-4 w-4" />
                Portfolio Project - React & Tailwind CSS
              </span>
            </div>
            
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              From Selling Technology to Building It
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              8 years in retail tech taught me what users want. Now I'm coding it myself. 
              Welcome to my personal wishlist turned portfolio.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/products"
                className="group rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Explore the Collection
                <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Learn about my journey <span aria-hidden="true">→</span>
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-indigo-100">
                <div className="text-2xl font-bold text-gray-900">18</div>
                <div className="text-sm text-gray-600">Products Featured</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-indigo-100">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-indigo-100">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Personal Wishlist</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom decoration */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-400 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Featured Products Sections */}
      <div className="bg-gray-50 py-16">
        {/* Apparel Section */}
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className='border-t border-gray-200 pt-8'>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>Shop Apparel</h2>
                  <p className="text-gray-600">Sports jerseys from my favorite teams</p>
                </div>
                <Link 
                  to='/category/apparel' 
                  className='inline-flex items-center text-xl font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group'
                >
                  View All
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <HomeGrids category="Apparel" />
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className='border-t border-gray-200 pt-8'>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>Shop Tech</h2>
                  <p className="text-gray-600">Latest gaming and computing hardware</p>
                </div>
                <Link 
                  to='/category/technology' 
                  className='inline-flex items-center text-xl font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group'
                >
                  View All
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <HomeGrids category="Technology" />
        </section>

        {/* Misc Section */}
        <section className="mb-16">
          <div className="container mx-auto px-6">
            <div className='border-t border-gray-200 pt-8'>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>Shop Everything Else</h2>
                  <p className="text-gray-600">Home goods and collectibles I actually want</p>
                </div>
                <Link 
                  to='/category/misc' 
                  className='inline-flex items-center text-xl font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group'
                >
                  View All
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <HomeGrids category="Misc" />
        </section>
      </div>

      {/* Portfolio CTA Section */}
      <div className="bg-indigo-600">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Impressed by what you see?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              This entire site was built from scratch using React, Tailwind CSS, and React Router. 
              Every component is custom-designed and fully responsive.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/about"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Learn About My Journey
              </Link>
              <a
                href="https://github.com/Arobaczewski"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home