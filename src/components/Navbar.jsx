import { useState } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"

//SLIDE DOWN
const slideDown = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header variants={slideDown} initial="hidden" animate="show" className="sticky top-0 left-0 z-50 bg-white/90  backdrop-blur-md shadow-md md:shadow-[0_6px_10px_rgba(0,0,0,0.20),0_-2px_10px_rgba(0,0,0,0.02)]  md:mt-5 md:rounded-full md:px-6  md:max-w-4xl md:mx-auto">

      <nav
        className="max-w-7xl mx-auto flex items-center justify-between p-4"
        aria-label="Main Navigation"
      >
        {/*Logo*/}
        <a href="/" className="text-3xl font-bold font-serif text-black">
          AS
        </a>

        {/*Hamburger Button*/}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-blue-50 focus:ring-2 focus:ring-blue-50 "
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/*Links*/}
        <ul
          className={`text-base font-medium flex flex-col gap-4 md:flex-row  absolute md:static left-0 top-16 md:top-auto w-full md:w-auto bg-white/95 pt-5 md:pt-0 md:bg-transparent transition-all duration-300 ease-in-out text-[#525252] ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible md:opacity-100 md:visible"
          }`}
        >
          <li>
            <a href="#home" className="block px-4 py-2 hover:bg-blue-50 md:hover:border md:hover:rounded-full md:hover:shadow-[0_6px_10px_rgba(0,0,0,0.20),0_-2px_10px_rgba(0,0,0,0.02)]">
              Home
            </a>
          </li>
          <li>
            <a href="#experience" className="block px-4 py-2 hover:bg-blue-50 md:hover:border md:hover:rounded-full md:hover:shadow-[0_6px_10px_rgba(0,0,0,0.20),0_-2px_10px_rgba(0,0,0,0.02)]">
              Experience
            </a>
          </li>
          <li>
            <a href="#portfolio" className="block px-4 py-2 hover:bg-blue-50 md:hover:border md:hover:rounded-full md:hover:shadow-[0_6px_10px_rgba(0,0,0,0.20),0_-2px_10px_rgba(0,0,0,0.02)]">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#let's connect" className="block px-4 py-2 hover:bg-blue-50 md:hover:border md:hover:rounded-full md:hover:shadow-[0_6px_10px_rgba(0,0,0,0.20),0_-2px_10px_rgba(0,0,0,0.02)]">
              Let's connect
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
