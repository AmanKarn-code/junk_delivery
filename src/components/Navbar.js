import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, ShoppingCart, Package, LogIn, UserPlus, Sun, Moon } from 'lucide-react'; 
import Link from 'next/link';

const menuItems = [
  { name: 'Cart', icon: ShoppingCart , href:'/cart' },
  { name: 'My Orders', icon: Package , href:'/orders' },
  { name: 'Login', icon: LogIn , href:'/login' },
  { name: 'Register', icon: UserPlus , href:'/register' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Render a placeholder navbar if the component hasn't mounted yet
  if (!mounted) {
    return <nav className="bg-gray-800 h-16"></nav>;
  }

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href='/'>
            <img className="h-8 w-auto" src="/api/placeholder/32/32" alt="Logo" />
            <span className="ml-2 text-xl font-bold">Brand Name</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center hover:text-gray-300 transition-colors duration-200">
                <item.icon className="mr-1" size={15} />
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200 mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                <item.icon className="mr-2" size={20} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
