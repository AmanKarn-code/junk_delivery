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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setIsVisible(false);
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (!mounted) return <nav className="bg-gray-800 h-16"></nav>;

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out
        bg-gradient-to-r from-blue-500 to-purple-600 
        dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800 
        ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href='/' className="flex items-center">
              <img className="h-8 w-auto" src="/api/placeholder/32/32" alt="Logo" />
              <span className="ml-2 text-xl font-bold text-white">Brand Name</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="flex items-center text-white hover:text-gray-400 transition-colors duration-200"
              >
                <item.icon className="mr-1" size={15} />
                <span>{item.name}</span>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

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

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-slate-700 dark:to-slate-800 shadow-lg">
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