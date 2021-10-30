import AboutSection from "components/sections/about";
import HeroSection from "components/sections/hero";
import SkillsSection from "components/sections/skills";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Head>
        <title>Mohaimin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full ">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
}
