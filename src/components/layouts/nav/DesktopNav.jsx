import { Logo } from "@/assets";
import { ButtonWithFill } from "@/components/shared";

export default function DesktopNav() {
  return (
    <>
      <nav className="bg-white max-h-18 hidden md:flex  px-40 md:px-15  py-4 justify-between items-center ">
        <div className="logo">
          <img src={Logo} alt="Photosnap logo" />
        </div>
        <div className="nav-links flex gap-4">
          <a href="#" className="nav-text">
            stories
          </a>
          <a href="#" className="nav-text">
            features
          </a>
          <a href="#" className="nav-text">
            pricing
          </a>
        </div>
        <div className="cta">
          <ButtonWithFill />
        </div>
      </nav>
    </>
  );
}
