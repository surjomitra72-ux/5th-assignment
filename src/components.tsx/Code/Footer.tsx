import Logo3 from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white mt-15">
      <div className="max-w-7xl mx-auto px-8 py-25">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <img src={Logo3} alt="Dev Stack" className="w-32 h-auto" />

            <p className="text-[9px] text-slate-400 leading-relaxed mt-3 max-w-xs">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-[9px] text-slate-600 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[9px] text-slate-600 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[9px] text-slate-600 hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-bold text-slate-800 uppercase">
              Product
            </h3>

            <ul className="mt-3 space-y-2 text-[9px] text-slate-400">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] font-bold text-slate-800 uppercase">
              Company
            </h3>

            <ul className="mt-3 space-y-2 text-[9px] text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] font-bold text-slate-800 uppercase">
              Legal
            </h3>

            <ul className="mt-3 space-y-2 text-[9px] text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>


        <div className="border-t border-gray-100 mt-8 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[8px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 text-[8px] text-slate-400 px-15">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
