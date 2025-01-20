import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full border-t border-neutral-700 bg-neutral-900 text-white"
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
  );
};

export default Footer;
