import { motion } from "motion/react";

/** Title block for the inner pages, lit like the hero on the home page. */
export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="alengka-kelir relative flex w-full justify-center overflow-hidden px-6 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="alengka-flicker pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-alengka-flame/15 blur-[120px]" />
      <motion.div
        className="relative flex w-full max-w-3xl flex-col items-center gap-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="alengka-eyebrow">{eyebrow}</span>
        <h1 className="alengka-heading sm:text-4xl! lg:text-5xl!">{title}</h1>
        {children && <p className="max-w-xl text-alengka-cream/70">{children}</p>}
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-alengka-night" />
    </section>
  );
}
