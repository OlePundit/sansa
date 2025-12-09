import Link from "next/link";

export default function SuccessMessage() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center mt-30">
        <h2 className="text-2xl font-semibold text-[#2f976b]">
          Contact details submitted successfully
        </h2>
        <h3 className="text-xl text-black mt-3 font-medium">Go back to <Link className="text-[#2c96e2]" href="/">home page</Link></h3>
      </div>
    </div>
  );
}
