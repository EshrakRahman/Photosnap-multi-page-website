import { ButtonIconWhite } from "@/assets";
import { ResponsiveImages } from ".";

export default function PhotoCard({
  mobile,
  desktop,
  title,
  author,
  publish_date,
}) {
  return (
    <>
      <div className=" relative transition-transform duration-300 hover:-translate-y-3 group">
        <div className="">
          <ResponsiveImages
            mobile={mobile}
            tablet={desktop}
            desktop={desktop}
            alt={title}
          />
        </div>
        <div className="content px-6 absolute flex w-full flex-col gap-4 bottom-6.5">
          <div className=" flex flex-col gap-3.5">
            {publish_date && (
              <p className="font-dm font-normal text-[13px] text-white">
                {publish_date}
              </p>
            )}
            <p className="font-dm font-bold text-[18px] leading-6 text-white ">
              {title}
            </p>
            <p className="font-dm font-regular text-[13px] text-white">
              {author}
            </p>
          </div>
          <div className="w-full h-px bg-white/25  "></div>
          <div className="cta  flex justify-between items-center w-full">
            <a className="font-dm  font-bold text-[12px] tracking-[2px] uppercase text-white transition-all duration-300 hover:underline hover:cursor-pointer">
              read more
            </a>
            <div>
              <img className=" " src={ButtonIconWhite} alt="arrow icon" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </>
  );
}
