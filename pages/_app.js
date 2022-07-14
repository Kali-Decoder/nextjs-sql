import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
