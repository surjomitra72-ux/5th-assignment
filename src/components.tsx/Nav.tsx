import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <img src={Logo} alt="Logo" className="" />

        <ul className="flex gap-8 list-none m-0 p-0 text-sm">
          <li className="text-pink-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-4 text-sm">
          <button>
            <span>Sign In</span>
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
