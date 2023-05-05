import NavBar from "@/components/NavBar";
import Swipe from "@/components/Swipe";
import Image from "next/image";
import featured from "../components/images/featured.png";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-b from-stone-800 from-10% via-stone-950 via-60% to-black to-90% mb-4">
        <Image src={featured} alt="nvidia-rtx-3090" />
        <div className="text-center">
          <h2 className="text-xl mb-1 mt-2">The Nvidia RTX 3090</h2>
          <p>
            A high-end graphics card designed for gaming, creative work, and
            scientific computing.
          </p>
          <button className="bg-yellow-400 text-black p-2 px-6 rounded-xl mt-4">
            Buy Now
          </button>
        </div>
      </div>
      <Swipe />
    </div>
  );
}
