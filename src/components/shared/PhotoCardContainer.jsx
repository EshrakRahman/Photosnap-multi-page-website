import { PhotoCard } from ".";
import {
  architecturalDekstop,
  architecturalMobiel,
  cityscapesDesktop,
  cityscapesMobile,
  mountainDesktop,
  mountainMobile,
  voyageDesktop,
  voyageMobile,
} from "@/assets";

export default function PhotoCardContainer() {
  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-4">
        <PhotoCard
          mobile={mountainMobile}
          desktop={mountainDesktop}
          title="The Mountain"
          author="by John Appleseed"
        />
        <PhotoCard
          mobile={cityscapesMobile}
          desktop={cityscapesDesktop}
          title="Sunset Cityscapes"
          author="by Benjamin Cruz"
        />
        <PhotoCard
          mobile={voyageMobile}
          desktop={voyageDesktop}
          title="18 Days Voyage"
          author="by Alexei Borodin"
        />
        <PhotoCard
          mobile={architecturalMobiel}
          desktop={architecturalDekstop}
          title="Architecturals"
          author="by Samantha Brooke"
        />
      </section>
    </>
  );
}
