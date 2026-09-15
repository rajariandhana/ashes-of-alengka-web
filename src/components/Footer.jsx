import { Link } from "react-router";
import { LuExternalLink } from "react-icons/lu";

import { NAV_LINKS, PLAY_LINK, REPO_LINK } from "../constants.js";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center border-t border-alengka-gold/10 bg-alengka-night px-6 py-14">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6">
        <img
          src="/assets/title-logo.png"
          alt="Ashes of Alengka"
          className="w-44 opacity-40 transition-opacity duration-500 hover:opacity-90 sm:w-56"
        />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-alengka-cream/45">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="transition-colors hover:text-alengka-cream">
              {link.label}
            </Link>
          ))}
          <a
            href={PLAY_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-alengka-cream"
          >
            Play <LuExternalLink className="text-xs" />
          </a>
          <a
            href={REPO_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-alengka-cream"
          >
            Repository <LuExternalLink className="text-xs" />
          </a>
        </div>
      </div>
    </footer>
  );
}
