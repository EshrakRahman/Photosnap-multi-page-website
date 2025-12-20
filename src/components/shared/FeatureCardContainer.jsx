import { embedIcon, responsiveIcon, uploadIcon } from "@/assets";
import { FeatureCard } from ".";

export default function FeatureCardContainer({ features }) {
  return (
    <>
      <section className="px-4 py-16 lg:px-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            description={feature.description}
            title={feature.title}
          />
        ))}
      </section>
    </>
  );
}
