'use client';

export default function QuoteButton() {
  return (
    <button
      className="
        bg-[#2c96e2]
        text-white
        font-bold
        text-xl
        rounded-md
        mt-[100px]
        mb-[100px]
        px-6
        py-2
        hover:bg-[#2f976b]
        transition
      "
      onClick={() => {
        window.location.href = '/contact';
      }}
    >
      Request Quotation
    </button>
  );
}
