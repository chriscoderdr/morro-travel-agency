import Image from "next/image";
import Header from "@/app/components/Header";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import MemorableTravel from "./components/MemorableTravel";
import TripDocumentation from "./components/TripDocumentation";

export default function Home() {
  return (
    <div className="w-[1200px] mx-auto">
      <Header />
      <Destinations />
      <WhyChooseUs />
      <MemorableTravel />
      <TripDocumentation />
    </div>
  );
}
