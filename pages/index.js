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
        <meta name="description" content="Portfolio site of Mohaimin Islam" />
        <meta property="og:title" content="Mohaimin Islam" />
        <meta property="og:url" content="https://mohaimin.me/" />
        <meta
          property="og:description"
          content="Portfolio site of Mohaimin Islam"
        />
        <meta property="og:image" content="/site-screenshot.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
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
