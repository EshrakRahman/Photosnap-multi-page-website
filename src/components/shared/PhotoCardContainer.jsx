import { PhotoCard } from ".";

export default function PhotoCardContainer({ photos }) {
  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, idx) => (
          <PhotoCard
            key={idx}
            mobile={photo.mobile}
            tablet={photo.tablet}
            desktop={photo.desktop}
            author={photo.author}
            title={photo.title}
            publish_date={photo.publish_date}
          />
        ))}
      </section>
    </>
  );
}
