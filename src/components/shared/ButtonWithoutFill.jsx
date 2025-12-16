import { ButtonIcon, ButtonIconWhite } from "@/assets";

export default function ButtonWithoutFill({ title }) {
  return (
    <>
      <button className="font-dm text-white font-bold text-[12px] justify-center tracking-[2px] uppercase hover:underline flex gap-4 hover:gap-6 transition-all duration-300 hover:cursor-pointer">
        {title}
        <img src={ButtonIconWhite} alt="Line through icon" />
      </button>
    </>
  );
}
