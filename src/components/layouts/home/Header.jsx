import {
  HomeHeaderImg,
  HomeHeaderImgDesktop,
  HomeHeaderImgTablet,
} from "@/assets";
import { ButtonWithoutFill } from "../../shared";

export default function Header({
  mobile,
  tablet,
  desktop,
  title,
  description,
}) {
  return (
    <>
      <header className="md:flex w-full ">
        <div className="w-full flex  md:order-2">
          <img
            className=" md:hidden object-contain w-full "
            src={mobile}
            alt={title}
          />
          <img
            className="hidden md:block lg:hidden object-contain w-full "
            src={tablet}
            alt={title}
          />
          <img
            className="hidden lg:block object-cover max-w-full  h-auto "
            src={desktop}
            alt={title}
          />
        </div>
        <div className="content relative bg-black px-6 md:px-12 lg:px-16 lg:py-16 lg:gap-16 flex justify-center flex-col items-start gap-6 md:gap-12 py-12">
          <div className="w-32 md:h-76 md:w-1.5 h-1.5 bg-gradient-main absolute md:top-[30%] lg:top-[25%] top-0 md:left-0   left-6"></div>

          <h1 className="text-[32px] md:text-[40px] md:tracking-[5px] font-dm font-bold leading-10 tracking-[3.33px] text-balance text-white ">
            {title}
          </h1>
          <p className="text-[15px] font-normal font-dm opacity-60 text-white leading-6 text-balance">
            {description}
          </p>
          <ButtonWithoutFill title="get an invite" icon="white" />
        </div>
      </header>
    </>
  );
}
