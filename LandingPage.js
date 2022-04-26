import Header from "./Components/Header";
import LeftSection from "./Components/LeftSection";
import MainSection from "./Components/MainSection";

export default function LandingPage() {
  return (
    <div className="mx-auto container ">
      <Header />
      <div className="flex    ">
        <LeftSection />
        <MainSection />
      </div>
    </div>
  );
}
