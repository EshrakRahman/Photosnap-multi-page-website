import { Logo } from "@/assets";
import { ButtonWithFill } from "@/components/shared";
import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <>
      <nav className="bg-white max-h-18 hidden md:flex  px-40 md:px-15  py-4 justify-between items-center ">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Photosnap logo" />
          </Link>
        </div>
        <div className="nav-links flex gap-4">
          <Link to="/stories" className="nav-text">
            stories
          </Link>
          <Link to="/features" className="nav-text">
            features
          </Link>
          <Link to="/pricing" className="nav-text">
            pricing
          </Link>
        </div>
        <div className="cta">
          <ButtonWithFill />
        </div>
      </nav>
    </>
  );
}
