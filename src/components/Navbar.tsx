import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Menu, NutOff } from 'lucide-react'
import { NutShoppingCart } from "./NutShoppingCart"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-amber-800 text-amber-50 shadow-lg">
      <div className="w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and main nav links */}
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold flex items-center flex-shrink-0 text-amber-100 hover:text-white transition-colors duration-200">
              <NutOff className="h-6 w-6 mr-2" />
              Abila Peanut Butter Shop
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              <NavLink href="/market-place">Products</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/orders">Orders</NavLink>
              <NavLink href="/auth">Login | Signup</NavLink>
            </div>
          </div>

          {/* Cart button */}
          <div className="hidden md:block">
            <NutShoppingCart />
          </div>

          {/* Mobile dropdown menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-amber-100 hover:text-white hover:bg-amber-700">
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8} className="w-56 bg-amber-800 text-amber-50">
                <DropdownNavLink href="/">Home</DropdownNavLink>
                <DropdownNavLink href="/market-place">Products</DropdownNavLink>
                <DropdownNavLink href="/about">About</DropdownNavLink>
                <DropdownNavLink href="/contact">Contact</DropdownNavLink>
                <DropdownNavLink href="/orders">Orders</DropdownNavLink>
                <DropdownMenuItem asChild>
                  <div className="px-2 py-1">
                    <NutShoppingCart />
                  </div>
                </DropdownMenuItem>
                <DropdownNavLink href="/auth">Login | Signup</DropdownNavLink>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link to={href} className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-amber-100 hover:bg-amber-700 hover:text-white">
      {children}
    </Link>
  )
}

function DropdownNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <DropdownMenuItem asChild>
      <Link to={href} className="flex w-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-amber-700 hover:text-white">
        {children}
      </Link>
    </DropdownMenuItem>
  )
}

export default Navbar