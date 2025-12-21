export default function PriceCard({ plan, description, price, expt = false }) {
  return (
    <>
      <section
        className={`pt-20 w-80 md:w-full lg:w-80 pb-6 px-6 relative ${
          expt ? "bg-black" : "bg-gray-100"
        }`}
      >
        <div className="flex flex-col space-y-10 items-center">
          <div className="flex flex-col gap-4 items-center">
            <p
              className={`font-dm text-2xl ${
                expt ? "text-white" : "text-black"
              } leading-6`}
            >
              {plan}
            </p>
            <p
              className={`font-dm text-base font-normal ${
                expt ? "text-white/60" : "text-black"
              } leading-6 text-center`}
            >
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p
              className={`font-dm font-bold text-[40px] leading-12 tracking-[4.15%] ${
                expt ? "text-white" : "text-black"
              }`}
            >
              ${price}
            </p>
            <p
              className={`font-dm font-normal text-base leading-6 ${
                expt ? "text-white/60" : "text-black/60"
              }`}
            >
              per month
            </p>
          </div>
          <button
            className={`w-full py-2 ${
              expt ? "bg-white text-black" : "bg-black text-white"
            } uppercase  hover:cursor-pointer`}
          >
            Pick plan
          </button>
        </div>
        {expt && (
          <div className="w-full h-1.5 bg-gradient-main absolute top-0 left-0 "></div>
        )}
      </section>
    </>
  );
}
