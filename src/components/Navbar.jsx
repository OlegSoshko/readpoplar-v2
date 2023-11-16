import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navigationLinks } from "../constants";
import { logo, menu, close } from "../assets";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [visibleNavigation, setVisibleNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleVisibleNavigation = () => {
    setVisibleNavigation(prev => !prev);
  }

  const handleClickLogo = () => {
    setActive("");
    window.scrollTo(0, 0);
  }

  const handleClickNavigation = (title) => {
    toggleVisibleNavigation();
    setActive(title);
  }

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={handleClickLogo}
        >
          <img src={logo} alt='logo' className='w-40 h-40 object-contain' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navigationLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={visibleNavigation ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => toggleVisibleNavigation()}
          />

          <div
            className={`${
              !visibleNavigation ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navigationLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => handleClickNavigation(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
