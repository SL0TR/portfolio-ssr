import Head from "next/head";

import { HomeContainer } from "../components/Containers";
import Left from "../components/Left";
import Right from "../components/Right";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Mohaimin</title>
        <meta name="description" content="Portfolio site of Mohaimin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitcher {...props} />
      <HomeContainer>
        <Left />
        <Right />
      </HomeContainer>
    </>
  );
}
