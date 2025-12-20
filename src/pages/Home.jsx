import { Footer, Header, TwoCardsSectionContainer } from "@/components/layouts";
import { DesktopNav, MobileNav } from "../components/layouts/nav";

import { FeatureCardContainer, PhotoCardContainer } from "@/components/shared";
import { homeFeaturesDetails, homePhotos } from "@/components/shared/Photos";

import {
  HomeHeaderImg,
  HomeHeaderImgDesktop,
  HomeHeaderImgTablet,
} from "@/assets";

export default function Home() {
  return (
    <div>
      <DesktopNav />
      <MobileNav />

      <Header
        mobile={HomeHeaderImg}
        tablet={HomeHeaderImgTablet}
        desktop={HomeHeaderImgDesktop}
        title="Create and share your photo stories."
        description="Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others."
      />

      <TwoCardsSectionContainer />
      <PhotoCardContainer photos={homePhotos} />
      <FeatureCardContainer features={homeFeaturesDetails} />
      <Footer />
    </div>
  );
}
