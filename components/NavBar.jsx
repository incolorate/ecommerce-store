import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

export default function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const { pathname } = useRouter();
  console.log(pathname);

  const handleNav = () => {
    setShowSideBar((prevNav) => !prevNav);
  };

  const inactive = "p-2";
  const active =
    "bg-zinc-400 bg-opacity-10 rounded-xl text-zinc-100 " + inactive;

  return (
    <nav className="p-2 flex justify-between bg-stone-800">
      <div className="flex items-center" onClick={handleNav}>
        <RxHamburgerMenu />
      </div>
      <div
        className={`z-20   fixed top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 transform ${
          showSideBar ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div onClick={handleNav} className="p-2">
          <AiOutlineClose
            className={`transition-all duration-1000 ${
              showSideBar ? "rotate-180" : "-rotate-180"
            }`}
          />
        </div>
        <ul className="p-16 flex flex-col gap-5 text-lg cursor-pointer">
          <li className={pathname === "/" ? active : inactive}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname.includes("motherboards") ? active : inactive}>
            <Link href="/motherboards">Motherboards</Link>
          </li>
          <li className={pathname.includes("cpus") ? active : inactive}>
            <Link href="/cpus">CPUs/Processors</Link>
          </li>
          <li className={pathname.includes("gpus") ? active : inactive}>
            <Link href="/gpus">GPUs</Link>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-red-500">PCparts</h1>
      </div>
      <div>
        <p>Cart (0)</p>
      </div>
    </nav>
  );
}
