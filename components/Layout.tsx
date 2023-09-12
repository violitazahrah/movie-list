import Navbar from "@/components/Navbar";
import Meta from "@/components/Meta";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
