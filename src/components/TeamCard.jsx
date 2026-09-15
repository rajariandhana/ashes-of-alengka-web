import { motion } from "motion/react";
import { LuExternalLink } from "react-icons/lu";

const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

/** A team member. `photo` and `link` are optional: no photo shows initials, no link is not clickable. */
export default function TeamCard({ name, role, photo, link }) {
  const Card = link ? motion.a : motion.div;
  const linkProps = link ? { href: link, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Card
      {...linkProps}
      className={`alengka-panel group flex items-center gap-4 p-4 transition-colors duration-300 ${
        link ? "hover:border-alengka-gold/60" : ""
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -3 }}
    >
      {photo ? (
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-full border border-alengka-gold/30 object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-alengka-gold/30 bg-alengka-ember font-garamond! text-lg font-bold text-alengka-gold"
        >
          {initials(name)}
        </span>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm text-alengka-cream/85">{name}</span>
        <span className="text-xs text-alengka-amber/70">{role}</span>
      </div>

      {link && (
        <LuExternalLink className="shrink-0 text-sm text-alengka-cream/30 transition-colors group-hover:text-alengka-gold" />
      )}
    </Card>
  );
}
