import {
  StoriesHeaderIgmMobile,
  StoriesHeaderIgmTablet,
  StoriesHeaderImgDesktop,
} from "@/assets";
import { ButtonWithoutFill } from "../../shared";

export default function Header() {
  return (
    <>
      <header className="md:flex w-full md:relative ">
        <div className="w-full flex  md:order-2">
          <img
            className=" md:hidden object-contain w-full "
            src={StoriesHeaderIgmMobile}
            alt="Man standing infornt of a lake"
          />
          <div
            className="hidden md:block lg:hidden w-full h-202.5 bg-cover bg-center"
            style={{ backgroundImage: `url(${StoriesHeaderIgmTablet})` }}
          />

          <div
            className="hidden lg:block w-full h-162.5 bg-cover bg-center"
            style={{ backgroundImage: `url(${StoriesHeaderImgDesktop})` }}
          />
        </div>
        <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:w-[60%] bg-black md:bg-transparent px-6 md:px-12 lg:px-16 lg:py-20 flex flex-col gap-6 py-12 items-start">
          <p className="font-dm font-bold text-[12px] tracking-[2-x] text-white ">
            LAST MONTH’S FEATURED STORY
          </p>
          <h1 className="text-[32px] md:text-[40px] md:tracking-[5px] font-dm font-bold leading-10 tracking-[3.33px]  text-white ">
            HAZY FULL MOON OF APPALACHIA
          </h1>
          <p className="font-dm font-normal text-white/65 pr-3">
            March 2nd 2020{"  "}
            <span className="font-dm font-normal  text-white">
              by John Appleseed
            </span>
          </p>
          <p className="text-[15px] font-normal font-dm opacity-60 text-white leading-6 text-balance">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <ButtonWithoutFill title="read the story" icon="white" />
        </div>
      </header>
    </>
  );
}
