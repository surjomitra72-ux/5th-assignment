import Logo3 from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= MOBILE NAVBAR ================= */}
        <div className="flex items-center justify-between h-12 md:hidden">

          {/* Hamburger */}
          <button
            className="text-gray-600 text-xl"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Logo */}
          <img
            src={Logo3}
            alt="DevStack"
            className="w-20 h-auto"
          />

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">

            <button className="text-[10px] text-gray-700">
              Sign In
            </button>

            <button className="bg-pink-500 text-white text-[9px] px-3 py-1 rounded-full">
              Sign Up
            </button>

          </div>
        </div>


        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden md:flex items-center justify-between h-16">

          {/* Logo */}
          <img
            src={Logo3}
            alt="DevStack"
            className="w-28 h-auto"
          />

          {/* Menu */}
          <div className="flex items-center gap-8">

            <a
              href="#"
              className="text-sm text-pink-500 px-2 py-1"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-pink-500 transition"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-pink-500 transition"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-pink-500 transition"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm text-gray-700 hover:text-pink-500 transition"
            >
              Contact
            </a>

          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">

            <button className="text-sm text-gray-700 hover:text-pink-500 transition">
              Sign In
            </button>

            <button className="bg-pink-500 text-white text-sm px-5 py-2 rounded-full hover:bg-pink-600 transition">
              Sign Up
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Nav;