import PriceCard from "./PriceCard";

export default function PriceCardContainer() {
  return (
    <>
      <section className=" flex flex-col items-center px-10 py-20">
        <p className="font-dm font-bold text-black text-4xl pb-10">Plans</p>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
          <PriceCard
            plan="Basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price="19.00"
          />
          <PriceCard
            plan="Pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            price="39.00"
            expt={true}
          />
          <PriceCard
            plan="Business"
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            price="99.00"
          />
        </div>
      </section>
    </>
  );
}
