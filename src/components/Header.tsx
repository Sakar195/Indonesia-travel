"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "wide sea", href: "#sea" },
    { name: "mountains", href: "#mountains" },
    { name: "island", href: "#island" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            <h1 className="text-xl font-bold tracking-wider">TRAVEL</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white border border-white/30 bg-white/10"
            >
              {isMenuOpen ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl overflow-hidden">
                <nav className="py-2">
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm tracking-wide capitalize"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};
