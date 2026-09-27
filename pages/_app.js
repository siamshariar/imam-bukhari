import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { MenuProvider } from "../context/MenuContext";

import "@fortawesome/fontawesome-free/css/all.min.css";
// import "materialize-css/dist/css/materialize.min.css";
// import "slick-carousel/slick/slick.css";
import "../styles/style.scss";

import Layout from "../components/core/Layout";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { menuItems = [], logo, favicon } = pageProps;
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <MenuProvider initialMenu={menuItems}>
      <Layout logo={logo}>
        <Component {...pageProps} />
      </Layout>
    </MenuProvider>
  );
};

export default App;
