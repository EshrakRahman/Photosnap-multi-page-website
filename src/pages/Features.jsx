import {
  FeaturesHeaderDesktop,
  FeaturesHeaderMobile,
  FeaturesHeaderTablet,
} from "@/assets";
import { Footer, Header } from "@/components/layouts";
import FeaturesFooter from "@/components/layouts/features/FeaturesFooter";
import { DesktopNav, MobileNav } from "@/components/layouts/nav";
import { FeatureCardContainer } from "@/components/shared";
import { featuresCardsDetails } from "@/components/shared/Photos";

export default function Features() {
  return (
    <>
      <MobileNav />
      <DesktopNav />

      <Header
        mobile={FeaturesHeaderMobile}
        tablet={FeaturesHeaderTablet}
        desktop={FeaturesHeaderDesktop}
        title="FEATURES"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
      />
      <FeatureCardContainer features={featuresCardsDetails} />
      <FeaturesFooter />

      <Footer />
    </>
  );
}
