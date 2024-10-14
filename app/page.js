import LandingPageHeader from "./components/landingPage/LandingPageHeader";
import LandingPageHero from "./components/landingPage/LandingPageHero";

export default function Home() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] outfit-regular">
      <LandingPageHeader />

      <LandingPageHero />
    </div>
  );
}
