import NavBar from "@/components/NavBar";
import Swipe from "@/components/Swipe";
import Image from "next/image";
import featured from "../components/images/featured.png";
import Offers from "@/components/Offers";
import offer1 from "../components/images/gift1.png";
import offer2 from "../components/images/gift2.png";

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
      <div className="container-lg flex justify-center flex-wrap gap-6">
        <Offers
          title="Looking for a premium computer component for your system? Search no more! Buy products worth $100 or above on our site, and we'll add a complimentary accessory to your purchase."
          image={offer1}
        />
        <Offers
          title="Are you looking for a high-quality computer part for your system? Look no further! Purchase $300 or more worth of products on our website and we'll include a free accessory with your order."
          image={offer2}
        />
      </div>
      <div className="bg-stone-950 mt-6 p-6 text-center">
        <p className="text-sm">@ 2023 PCparts, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
