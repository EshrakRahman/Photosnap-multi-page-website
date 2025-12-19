import { CloseMenuIcon, Logo, MenuIcon } from "@/assets";
import { ButtonWithFill } from "@/components/shared";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(true);
  function handleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className="bg-white max-h-18 md:hidden  px-5 md:px-15 flex py-4 justify-between items-center relative ">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Photosnap logo" />
          </Link>
        </div>
        <div className="  ">
          <button href="" onClick={handleMenu}>
            {showMenu ? (
              <img className="" src={MenuIcon} alt="menu open" />
            ) : (
              <img src={CloseMenuIcon} alt="menu close" />
            )}
          </button>
        </div>
        {!showMenu && (
          <div className="nav-links px-5 flex flex-col justify-center items-center py-8 gap-4 max-h-63.75  bg-white w-full z-100 absolute top-14 right-0 ">
            <div className="mobile-links flex flex-col justify-center gap-4 items-center ">
              <Link to="/stories" className="nav-text ">
                stories
              </Link>
              <a href="#" className="nav-text">
                features
              </a>
              <a href="#" className="nav-text ">
                pricing
              </a>
            </div>
            <div className="border w-full  border-black opacity-25"></div>
            <div className="cta">
              <ButtonWithFill />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
