import { ButtonWithoutFill, ResponsiveImages } from "@/components/shared";

export default function TwoCardsSection({
  textPositionRight = false,
  mobile,
  tablet,
  desktop,
  title,
  description,
}) {
  return (
    <>
      <section className="md:flex w-full ">
        <div
          className={`w-full lg:w-[55%] flex ${textPositionRight && "order-2"}`}
        >
          <ResponsiveImages
            mobile={mobile}
            tablet={tablet}
            desktop={desktop}
            alt={title}
          />
        </div>
        <div className=" px-6 md:px-12 lg:w-[45%] lg:px-16 lg:py-16 lg:gap-16 flex justify-center flex-col items-start gap-6 md:gap-12 py-12">
          <h2 className="text-[32px] md:text-[40px] md:tracking-[5px] font-dm font-bold leading-10 tracking-[3.33px] text-balance text-black uppercase ">
            {title}
          </h2>
          <p className="font-dm font-normal text-base leading-6 opacity-60 text-black">
            {description}
          </p>
          <ButtonWithoutFill title="view the stories" icon="black" />
        </div>
      </section>
    </>
  );
}
