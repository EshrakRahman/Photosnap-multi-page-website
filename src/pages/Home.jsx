import { Header, TwoCardsSection } from "@/components/layouts";
import { DesktopNav, MobileNav } from "../components/layouts/nav";

import {
  BeutifulStoriesDesktop,
  BeutifulStoriesMobile,
  BeutifulStoriesTablet,
  DesingedEveryoneDesktop,
  DesingedEveryoneMobile,
  DesingedEveryoneTablet,
} from "@/assets";

export default function Home() {
  return (
    <div className="mx-auto max-w-360">
      <DesktopNav />
      <MobileNav />
      <Header />
      <TwoCardsSection
        mobile={BeutifulStoriesMobile}
        tablet={BeutifulStoriesTablet}
        desktop={BeutifulStoriesDesktop}
        title="BEAUTIFUL STORIES EVERY TIME"
        description="We provide design templates to ensure your stories look terrific.
        Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      />
      <TwoCardsSection
        textPositionRight={true}
        mobile={DesingedEveryoneMobile}
        tablet={DesingedEveryoneTablet}
        desktop={DesingedEveryoneDesktop}
        title="designed for everyone"
        description="Photosnap can help you create stories that resonate with your audience.  
        Our tool is designed for photographers of all levels, brands, businesses you name it."
      />
    </div>
  );
}
