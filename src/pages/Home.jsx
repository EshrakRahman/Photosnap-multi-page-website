import { Footer, Header, TwoCardsSectionContainer } from "@/components/layouts";
import { DesktopNav, MobileNav } from "../components/layouts/nav";

import { FeatureCardContainer, PhotoCardContainer } from "@/components/shared";
import { homePhotos } from "@/components/shared/Photos";

export default function Home() {
  return (
    <div>
      <DesktopNav />
      <MobileNav />
      <Header />
      <TwoCardsSectionContainer />
      <PhotoCardContainer photos={homePhotos} />
      <FeatureCardContainer />
      <Footer />
    </div>
  );
}
