import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        <img
          src={Logo}
          alt="Logo"
          className="w-40"
        />

        <ul className="flex gap-6 lg:gap-8 list-none m-0 p-0 text-sm">
          <li className="text-pink-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-3 text-sm">
          <button>Sign In</button>

          <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;