"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Desktop Navigation Links - Left */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
             {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
          
          </div>
             <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900">
              3D Chess
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base"
            >
             Play
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button - Left */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

         

          {/* Desktop Navigation Links - Right */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base"
            >
              Support
            </Link>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-4 xl:px-6 py-2 rounded-md text-sm xl:text-base">
              Add to Cart
            </Button>
          </div>

          {/* Mobile Cart Button - Right */}
          <div className="lg:hidden">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm">Cart</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <div className="pt-2">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-md">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
