
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">


      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[2fr_1fr_1fr_1fr]">

       
        <div className="text-center lg:text-left">
          <h2 className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-2xl font-bold text-transparent">
            Dev Stack
          </h2>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-gray-500 lg:mx-0">
            Curated tools, technologies and resources for developers
            building modern software.
          </p>

         
          <div className="mt-6 flex justify-center gap-4 lg:justify-start">
            <a
              href="#"
              aria-label="GitHub"
              className="text-sm font-medium text-gray-500 transition hover:text-pink-500"
            >
              GitHub
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-sm font-medium text-gray-500 transition hover:text-pink-500"
            >
              Twitter
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-sm font-medium text-gray-500 transition hover:text-pink-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

       
        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Product
          </h3>

          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Company
          </h3>

          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="#about"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

       
        <div className="hidden lg:block">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            Legal
          </h3>

          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="#"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 transition hover:text-pink-500"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-5 text-sm text-gray-500 sm:flex-row sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

