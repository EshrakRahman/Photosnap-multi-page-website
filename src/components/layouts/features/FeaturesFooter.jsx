import { FeatureFooterImg } from "@/assets";
import { ButtonWithoutFill } from "@/components/shared";

export default function FeaturesFooter() {
  return (
    <>
      <section className="relative w-full ">
        <div
          className="w-full object-contain h-70 md:items-center items-start gap-4  md:justify-between  md:flex-row flex-col  flex px-4 py-16 lg:px-16"
          style={{ backgroundImage: `url(${FeatureFooterImg})` }}
        >
          <div className="w-32 md:h-70 md:w-1.5 h-1.5 bg-gradient-main absolute md:top-[0%] top-0 md:left-0 left-6"></div>
          <div className="title">
            <p className="md:text-[40px] font-dm text-3xl md:w-[45%] text-balance  leading-12 tracking-[4px] text-white ">
              We’re in beta. Get your invite today!
            </p>
          </div>
          <div className="cta">
            <ButtonWithoutFill icon="white" title="get an invite" />
          </div>
        </div>
      </section>
    </>
  );
}
