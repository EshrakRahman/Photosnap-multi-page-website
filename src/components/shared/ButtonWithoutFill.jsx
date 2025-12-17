import { ButtonIcon, ButtonIconWhite } from "@/assets";

export default function ButtonWithoutFill({ title, icon }) {
  return (
    <>
      <button
        className={`font-dm  ${
          icon === "white" ? "text-white" : "text-black"
        } font-bold text-[12px] justify-center tracking-[2px] uppercase hover:underline flex gap-4 hover:gap-6 transition-all duration-300 hover:cursor-pointer`}
      >
        {title}
        {icon === "white" ? (
          <img src={ButtonIconWhite} alt="Line through icon" />
        ) : (
          <img src={ButtonIcon} alt="Line through icon" />
        )}
      </button>
    </>
  );
}
