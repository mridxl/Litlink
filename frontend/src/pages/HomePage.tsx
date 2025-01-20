import 'animate.css';
import {
  ArrowRight,
  ArrowRightLeft,
  BookOpen,
  Code,
  Copy,
  Hand,
  MoveRight,
  NotebookPen,
  Rainbow,
  Search,
} from 'lucide-react';
import { Link } from 'react-router';

const Page = () => {
  return (
    <>
      {/* hero section */}
      <section
        id="hero"
        className="overflow-x-clip bg-neutral-900 pt-10 text-white"
      >
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
                <Link
                  to="/login"
                  className="animate__animated animate__pulse animate__infinite animate__slower inline-flex items-center rounded-lg bg-blue-500 px-8 py-3 font-medium text-white transition-all hover:bg-blue-600"
                >
                  Get Started
                  <MoveRight size={24} className="ml-2" />
                </Link>
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
                <div className="flex items-baseline">
                  <Code size={12} className="mr-1" />
                  Open Source
                </div>
                <div className="flex items-center">
                  <Rainbow size={16} className="mr-1" />
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
                      <BookOpen size={24} />
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
                      <Copy size={24} />
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
                      <Hand size={24} />
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
                  <NotebookPen className="text-blue-500" size={48} />
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
                  <Search className="text-green-500" size={48} />
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
                  <ArrowRightLeft className="text-purple-500" size={48} />
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
            <Link
              to="/login"
              className="inline-flex items-center rounded-md bg-blue-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600"
            >
              Start Exchanging
              <ArrowRight size={24} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
