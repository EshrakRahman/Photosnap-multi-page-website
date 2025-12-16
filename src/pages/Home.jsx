import { Header } from "@/components/layouts";
import { DesktopNav, MobileNav } from "../components/layouts/nav";

export default function Home() {
  return (
    <div className="mx-auto max-w-360">
      <DesktopNav />
      <MobileNav />
      <Header />
    </div>
  );
}
