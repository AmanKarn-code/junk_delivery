import React, { useState } from "react";
import { ShoppingCart, User, LogIn, Sun, Moon, Menu, X, Package } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderThemeChanger = () => {
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
      >
        {theme === "dark" ? (
          <Sun className="w-6 h-6 text-yellow-400 transition-transform hover:rotate-12" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-700 transition-transform hover:-rotate-12" />
        )}
      </button>
    );
  };

  const menuItems = [
    { icon: ShoppingCart, text: "Cart", href: "/cart" },
    { icon: User, text: "Register", href: "/register" },
    { icon: LogIn, text: "Login", href: "/login" },
    { icon: Package, text: "My Orders", href: "/orders" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left side: Logo and Name */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Brand Name</span>
          </Link>

          {/* Right side: Menu items and Theme Switcher for larger screens */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="flex items-center space-x-1 cursor-pointer group">
                <item.icon className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors duration-200" />
                <span className="text-white group-hover:text-yellow-300 transition-colors duration-200">
                  {item.text}
                </span>
              </Link>
            ))}
            {renderThemeChanger()}
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className="md:hidden flex items-center space-x-4">
            {renderThemeChanger()}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="flex items-center space-x-2 cursor-pointer group">
                <item.icon className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors duration-200" />
                <span className="text-white group-hover:text-yellow-300 transition-colors duration-200">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;