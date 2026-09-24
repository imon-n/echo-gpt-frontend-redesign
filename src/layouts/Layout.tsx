import { Outlet } from "react-router-dom";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}