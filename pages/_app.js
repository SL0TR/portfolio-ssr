import { Layout } from "components/layout";
import { ContextProvider } from "context/GlobalContext";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
