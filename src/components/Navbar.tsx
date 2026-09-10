import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png"
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Dev Stack logo"
            className="h-12 w-auto  object-contain"
          />
        </div>

      
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Home
          </a>
          <a
            href="#technologies"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 hover:text-pink-500"
          >
            Contact
          </a>
        </div>

       
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm font-medium text-gray-700 hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

      
        <div className="flex items-center gap-3 md:hidden">
         
          <button className="order-first" aria-label="Open menu">
            <img
              src={hamburger}
              alt="Menu"
              className="h-6 w-6 object-contain"
            />
          </button>


          <button className="text-xs font-medium text-gray-700">Sign In</button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1.5 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
