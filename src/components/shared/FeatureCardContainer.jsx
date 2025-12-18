import { embedIcon, responsiveIcon, uploadIcon } from "@/assets";
import { FeatureCard } from ".";

export default function FeatureCardContainer() {
  return (
    <>
      <section className="px-4 py-16 lg:px-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <FeatureCard
          icon={responsiveIcon}
          title="100% Responsive"
          description="No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen."
        />
        <FeatureCard
          icon={uploadIcon}
          title="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <FeatureCard
          icon={embedIcon}
          title="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
      </section>
    </>
  );
}
