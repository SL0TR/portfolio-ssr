import AboutSection from "components/sections/about";
import HeroSection from "components/sections/hero";
import SkillsSection from "components/sections/skills";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Head>
        <title>Mohaimin: Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col w-full ">
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        <Script
          strategy="beforeInteractive"
          src="https://www.goat1000.com/tagcanvas.min.js"
        />
      </main>
    </div>
  );
}
