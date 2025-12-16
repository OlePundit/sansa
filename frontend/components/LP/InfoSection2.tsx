import Image from "next/image";

interface InfoSection2Props {
  img3: string;
  title2: string;
  benefits2: string;
}

export default function InfoSection2({ img3, title2, benefits2 }: InfoSection2Props) {
  return (
    <div className="w-full flex flex-wrap justify-center items-center my-12 px-4">
      
      {/* Left Image */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-6">
        <h2 className="text-3xl font-bold mb-4">{title2}</h2>

        <div className="prose max-w-none mb-6">{benefits2}</div>

        <a
          href="/contact"
          className="inline-block bg-[#2c96e2] cursor-pointer text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2f976b] transition"
        >
          Learn More
        </a>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src={img3}
          alt="info-img"
          width={600}
          height={400}
          className="rounded-lg object-contain"
        />
      </div>

      {/* Right Content */}
    </div>
  );
}
