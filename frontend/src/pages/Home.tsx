import { useState } from 'react';
import 'animate.css';
import { Github, Menu, Twitter } from 'lucide-react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* header */}
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
                <a
                  href="#getStarted"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-neutral-700"
                >
                  Get Started
                </a>
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
          id="mobile-menu"
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
            <a
              href="#getStarted"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-neutral-700"
            >
              Get Started
            </a>

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
      {/* hero section */}
      <section id="hero" className="bg-neutral-900 pt-10 text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-2">
            <div className="animate__animated animate__fadeInLeft space-y-8">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Share Books, <span className="text-blue-500">Connect</span>{' '}
                Through Stories
              </h1>
              <p className="text-xl text-gray-300">
                Exchange your favorite books with readers worldwide. Build your
                library, one swap at a time.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#getStarted"
                  className="animate__animated animate__pulse animate__infinite animate__slower inline-flex items-center rounded-lg bg-blue-500 px-8 py-3 font-medium text-white transition-all hover:bg-blue-600"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/mridxl/litlink"
                  target="_blank"
                  className="inline-flex items-center rounded-lg border border-gray-300 px-8 py-3 font-medium text-white transition-all hover:border-blue-500"
                >
                  <i className="fab fa-github mr-2 text-xl"></i>
                  View on GitHub
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582A1 1 0 004 6.82v4.36a1 1 0 00.673.946l4 1.6a1 1 0 00.654 0l4-1.6a1 1 0 00.673-.946V6.82a1 1 0 00-1.046-.917L9 4.323V3a1 1 0 00-1-1zm0 2.618l3.954 1.582A1 1 0 0115 7.18v4.36a1 1 0 01-.673.946l-4 1.6a1 1 0 01-.654 0l-4-1.6A1 1 0 015 11.54V7.18a1 1 0 011.046-.917L10 4.618z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Open Source
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0 1 1 0 11-2 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Free to Use
                </div>
              </div>
            </div>
            <div className="animate__animated animate__fadeInRight relative max-md:mt-10">
              <div className="animate__animated animate__pulse animate__infinite animate__slower absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur"></div>
              <div className="relative rounded-lg bg-neutral-800 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">List Your Books</h3>
                      <p className="text-gray-400">
                        Add books you want to exchange
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Find Matches</h3>
                      <p className="text-gray-400">
                        Connect with readers nearby
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Exchange Books</h3>
                      <p className="text-gray-400">Swap safely and easily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section id="howItWorks" className="bg-neutral-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate__animated animate__fadeIn mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">How LitLink Works</h2>
            <p className="text-xl text-gray-400">
              Three simple steps to start exchanging books
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="animate__animated animate__fadeInLeft relative">
              <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold">
                1
              </div>
              <div className="h-full rounded-lg bg-neutral-800 p-8">
                <div className="mb-6">
                  <svg
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Create Your List</h3>
                <p className="text-gray-400">
                  Sign up and list the books you want to exchange. Add
                  descriptions and conditions to help others find the perfect
                  match.
                </p>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-1s relative">
              <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl font-bold">
                2
              </div>
              <div className="h-full rounded-lg bg-neutral-800 p-8">
                <div className="mb-6">
                  <svg
                    className="h-12 w-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Find Matches</h3>
                <p className="text-gray-400">
                  Browse through available books or let our matching system find
                  perfect exchange opportunities for you.
                </p>
              </div>
            </div>

            <div className="animate__animated animate__fadeInLeft animate__delay-2s relative">
              <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-2xl font-bold">
                3
              </div>
              <div className="h-full rounded-lg bg-neutral-800 p-8">
                <div className="mb-6">
                  <svg
                    className="h-12 w-12 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold">Exchange Books</h3>
                <p className="text-gray-400">
                  Connect with your match, arrange the exchange, and enjoy your
                  new books!
                </p>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeIn mt-16 text-center">
            <a
              href="#getStarted"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600"
            >
              Start Exchanging
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer
        id="footer"
        className="border-t border-neutral-700 bg-neutral-900 text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">LitLink</h3>
            <p className="text-gray-400">
              Connecting readers through book exchanges.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mridxl/litlink"
                target="_blank"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Github size={24} />
              </a>
              <a
                href="https://twitter.com/mridxl"
                target="_blank"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <p className="pt-4 text-right text-sm text-gray-400">
            Made with <span className="text-red-500">♥ </span> by{' '}
            <a
              href="https://github.com/mridxl"
              className="underline underline-offset-2"
            >
              Mridxl
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
