import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { LuMenu, LuX } from "react-icons/lu";

import { NAV_LINKS, PLAY_LINK } from "../constants.js";

const linkClass = ({ isActive }) =>
  `whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors duration-300 ${
    isActive
      ? "bg-alengka-gold/15 text-alengka-gold"
      : "text-alengka-cream/60 hover:text-alengka-cream"
  }`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 py-2 lg:py-4 ${
        solid
          ? "border-b border-alengka-gold/10 bg-alengka-night/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="shrink-0" aria-label="Ashes of Alengka home">
          <img src="/assets/title-logo.png" alt="Ashes of Alengka" className="h-8 w-auto sm:h-10" />
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.slice(1).map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={PLAY_LINK}
            target="_blank"
            rel="noreferrer"
            className="ml-2 whitespace-nowrap rounded-full bg-alengka-flame px-4 py-1.5 text-sm font-semibold text-alengka-night transition-colors duration-300 hover:bg-alengka-amber"
          >
            Play Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full p-2 text-2xl text-alengka-cream/80 transition-colors hover:text-alengka-cream md:hidden"
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1 px-4 pb-5">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} end className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
              <a
                href={PLAY_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full bg-alengka-flame px-4 py-2.5 text-center text-sm font-semibold text-alengka-night transition-colors duration-300 hover:bg-alengka-amber"
              >
                Play Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
