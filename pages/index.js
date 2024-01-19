import AboutSection from "components/sections/about";
import HeroSection from "components/sections/hero";
import SkillsSection from "components/sections/skills";
import NewSiteLink from "components/newSiteLink";
import Head from "next/head";
import allIcons from "simple-icons";
import { allUniqueSlugs } from "constants/iconTags";
import { IconContext } from "hooks/useIconContext";

// dynamicly import during build time only the icons that are used
export const getStaticProps = async () => {
  const iconMap = {};

  for (const slug of allUniqueSlugs) {
    const i = allIcons.Get(slug);
    if (i) {
      iconMap[slug] = i;
    }
  }

  return {
    props: {
      iconMap,
    },
  };
};

export default function Home({ iconMap }) {
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
        <NewSiteLink />
        <IconContext.Provider value={iconMap}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
        </IconContext.Provider>
      </main>
    </div>
  );
}
