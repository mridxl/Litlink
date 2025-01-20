import { Github, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-neutral-900 text-white shadow-md shadow-neutral-800/20">
      {/* desktop nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="animate__animated animate__fadeIn text-2xl font-bold text-white">
                LitLink
              </span>
            </a>
          </div>
          <div className="hidden md:flex">
            <div className="flex items-center space-x-4">
              <a
                href="#hero"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-700"
              >
                Home
              </a>

              <a
                href="#howItWorks"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-700"
              >
                How It Works
              </a>
              <Link
                to="/login"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-700"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/mridxl/litlink"
                target="_blank"
                className="rounded-full bg-gray-600/20 p-2 hover:bg-neutral-700"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
          {/* Hamburger menu */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} shad flex-col gap-3 border-t border-neutral-800 bg-neutral-900 shadow-md shadow-neutral-800 md:hidden`}
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <a
            href="#hero"
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-neutral-700"
          >
            Home
          </a>

          <a
            href="#howItWorks"
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-neutral-700"
          >
            How It Works
          </a>
          <Link
            to="/login"
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-neutral-700"
          >
            Get Started
          </Link>

          <a
            href="https://github.com/mridxl/litlink"
            target="_blank"
            className="flex items-center justify-start rounded-md px-3 py-2 text-base font-medium hover:bg-neutral-700"
          >
            <span className="mr-2">GitHub</span>

            <Github size={18} className="mt-0.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
