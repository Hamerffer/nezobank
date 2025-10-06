import { Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../hooks/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1  mt-19">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
