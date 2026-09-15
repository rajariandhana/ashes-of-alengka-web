import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen w-full flex-col bg-alengka-night font-jakarta text-base text-alengka-cream lg:text-lg">
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
