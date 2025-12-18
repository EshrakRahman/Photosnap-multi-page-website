import {
  Footer,
  Header,
  TwoCardsSection,
  TwoCardsSectionContainer,
} from "@/components/layouts";
import { DesktopNav, MobileNav } from "../components/layouts/nav";

import { FeatureCardContainer, PhotoCardContainer } from "@/components/shared";

export default function Home() {
  return (
    <div className="mx-auto max-w-360">
      <DesktopNav />
      <MobileNav />
      <Header />
      <TwoCardsSectionContainer />
      <PhotoCardContainer />
      <FeatureCardContainer />
      <Footer />
    </div>
  );
}
