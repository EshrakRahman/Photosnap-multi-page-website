import {
  fbIcon,
  instaIcon,
  pintrestIcon,
  twitterIcon,
  whiteLogo,
  ytIcon,
} from "@/assets";
import { ButtonWithoutFill } from "@/components/shared";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-black md:px-12 gap-10 md:py-16 py-12 px-8 lg:px-16 flex-col md:flex-row flex md:justify-between md:items-center">
        <div className="section-one flex flex-col md:flex-row gap-12 ">
          <div className="left flex flex-col gap-10 justify-between">
            <div className="logo">
              <Link to="/">
                <img src={whiteLogo} alt="Photo snap logo" />
              </Link>
            </div>
            <div className="icons flex gap-4 items-center justify-between">
              <div className="">
                <img src={fbIcon} alt="Facebook" />
              </div>
              <div className="">
                <img src={ytIcon} alt="Youtube" />
              </div>
              <div className="">
                <img src={twitterIcon} alt="Twitter" />
              </div>
              <div className="">
                <img src={pintrestIcon} alt="Pinterest" />
              </div>
              <div className="">
                <img src={instaIcon} alt="Insta" />
              </div>
            </div>
          </div>
          <div className="right">
            <nav className="flex md:flex-col gap-3">
              <Link className=" nav-text-footer" to="/">
                Home
              </Link>
              <Link className=" nav-text-footer" to="/stories">
                Stories
              </Link>
              <Link className=" nav-text-footer" to="/features">
                Features
              </Link>
              <Link className=" nav-text-footer" to="/pricing">
                Pricing
              </Link>
            </nav>
          </div>
        </div>
        <div className="section-two flex flex-col md:gap-10 gap-6 justify-between">
          <div className="cta">
            <ButtonWithoutFill icon="white" title="get an invite" />
          </div>
          <p className="font-dm font-normal text-base text-white/50">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
