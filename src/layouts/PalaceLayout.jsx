import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PalaceLayout() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-mainBg">
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
