import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ConnectWhatsapp from "../components/ConnectWhatsapp/ConnectWhatsapp";

const Loyout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ConnectWhatsapp />
      <Footer />
    </div>
  );
};

export default Loyout;
