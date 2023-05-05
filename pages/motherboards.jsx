import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <NavBar />
      <div>motherboards</div>
    </div>
  );
}
