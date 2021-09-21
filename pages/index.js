import Head from "next/head";
import Script from 'next/script'
import { HomeContainer } from "../components/Containers";
import Footer from "../components/Footer";
import Left from "../components/Left";
import Right from "../components/Right";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Mohaimin Islam</title>
        <meta name="description" content="Portfolio site of Mohaimin Islam" />
        <meta property="og:title" content="Mohaimin Islam" />
        <meta property="og:url" content="https://mohaimin.me/" />
        <meta
          property="og:description"
          content="Portfolio site of Mohaimin Islam"
        />
        <meta
          property="og:image"
          content="https://lh4.googleusercontent.com/k3ARY5zGzPkmJvn0i6lCn0Esax8f3XYw1_EyKW4JPyDzNwGScUQ-rECJbDJ72jvE_awcLDI22aCHUR7AZ3fe=w2940-h5226-rw"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitcher {...props} />
      <HomeContainer>
        <main className="main-content">
          <Left />
          <Right />
        </main>
        <Footer />
      </HomeContainer>
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>
  );
}
