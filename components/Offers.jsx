import Image from "next/image";

export default function Offers({ title, image }) {
  return (
    <div>
      <div className="bg-stone-100 max-w-md mt-4 rounded-md p-4 text-center h-96 flex flex-col justify-center align-middle items-center">
        <p className="text-amber-600 text-sm">More gifts.</p>
        <p className="text-black font-semibold text-2xl">
          Thank you for choosing PCparts
        </p>
        <p className="text-black text-lg mt-4"> {title}</p>
        <Image src={image} alt="gaming-mouse" height={160} />
      </div>
    </div>
  );
}
