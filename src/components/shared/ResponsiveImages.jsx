export default function ResponsiveImages({ mobile, tablet, desktop, alt }) {
  return (
    <picture className="w-full flex">
      <source media="(min-width:1024px)" srcSet={desktop} />
      <source media="(min-width:768px)" srcSet={tablet} />
      <img src={mobile} alt={alt} className="w-full h-auto object-cover" />
    </picture>
  );
}
