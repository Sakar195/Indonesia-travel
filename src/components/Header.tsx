"use client";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import React from "react";

interface NavItemProps {
  href: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface NavigationItem {
  name: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide"
  >
    {label}
  </a>
);

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavigationItem[] = [
    { name: "Places to go", href: "#places" },
    { name: "Things to do", href: "#things" },
    { name: "island", href: "#island" },
  ];

  const handleSmoothScroll = useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const handleMobileNavClick = useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsMenuOpen(false);
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            <h1 className="text-xl font-bold tracking-wider">TRAVEL</h1>
          </div>

          <nav role="navigation" className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <NavItem
                key={`${item.name}-${index}`}
                href={item.href}
                label={item.name}
                onClick={handleSmoothScroll(item.href)}
              />
            ))}
          </nav>

          <div className="md:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              type="button"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white border border-white/30 bg-white/10"
            >
              {isMenuOpen ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </button>

            {isMenuOpen && (
              <div
                id="mobile-menu"
                className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl overflow-hidden"
              >
                <nav role="navigation" className="py-2">
                  {navItems.map((item, index) => (
                    <a
                      key={`${item.name}-${index}`}
                      href={item.href}
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm tracking-wide capitalize"
                      onClick={handleMobileNavClick(item.href)}
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

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};
