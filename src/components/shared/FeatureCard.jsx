import { responsiveIcon } from "@/assets";

export default function FeatureCard({ title, description, icon }) {
  return (
    <>
      <div className="flex flex-col justify-center gap-8 items-center">
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
        <div className="desc flex flex-col justify-center gap-5 items-center">
          <p className="font-dm font-bold text-[18px] leading-6 text-black">
            {title}
          </p>
          <p className="font-dm text-base font-normal leading-6 text-center text-balance text-black/60">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
