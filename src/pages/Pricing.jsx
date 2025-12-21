import {
  PricingHeaderImgDesktop,
  PricingHeaderImgMobile,
  PricingHeaderImgTablet,
} from "@/assets";
import { Footer, Header } from "@/components/layouts";
import FeaturesFooter from "@/components/layouts/features/FeaturesFooter";
import { DesktopNav, MobileNav } from "@/components/layouts/nav";
import PriceCard from "@/components/layouts/pricing/PriceCard";
import PriceCardContainer from "@/components/layouts/pricing/PriceCardContainer";

export default function Pricing() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
      <Header
        mobile={PricingHeaderImgMobile}
        tablet={PricingHeaderImgTablet}
        desktop={PricingHeaderImgDesktop}
        title="PRICING"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      />
      <PriceCardContainer />
      <FeaturesFooter />
      <Footer />
    </>
  );
}
