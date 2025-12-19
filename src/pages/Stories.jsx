import { Footer, Header, StoriesHeader } from "@/components/layouts";
import { DesktopNav, MobileNav } from "@/components/layouts/nav";
import { PhotoCardContainer } from "@/components/shared";
import { storiesPhotos } from "@/components/shared/Photos";

export default function Stories() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
      <StoriesHeader />
      <PhotoCardContainer photos={storiesPhotos} />

      <Footer />
    </>
  );
}
