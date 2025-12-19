import { Header, StoriesHeader } from "@/components/layouts";
import { DesktopNav, MobileNav } from "@/components/layouts/nav";

export default function Stories() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
      <StoriesHeader />
    </>
  );
}
