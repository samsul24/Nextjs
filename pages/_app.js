import { SessionProvider } from "next-auth/react";
import Carosel from "../components/Carosel";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <Carosel /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
