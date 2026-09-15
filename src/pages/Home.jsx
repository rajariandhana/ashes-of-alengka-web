import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { LuArrowRight, LuExternalLink } from "react-icons/lu";

import AppearSection from "../components/AppearSection.jsx";
import SharedController from "../components/SharedController.jsx";
import DalangShadow from "../components/DalangShadow.jsx";
import { PLAY_LINK } from "../constants.js";

const LOADING_DURATION = 1800;

// the lamp intro only plays on the first visit to the home page per page load
let introPlayed = false;

const EXPLORE = [
  {
    to: "/behind-the-scenes",
    image: "/assets/shot-swing.jpg",
    title: "Behind the Scenes",
    body: "Forty-eight hours, a pivot at hour seventeen, and a puppet rig nobody keyframed.",
  },
  {
    to: "/screenshots",
    image: "/assets/shot-clash.jpg",
    title: "Screenshots",
    body: "The arena, the clouds, and what happens when both players swing at once.",
  },
];

function Awan({ src, className, duration, drift }) {
  return (
    <motion.img
      src={src}
      alt=""
      className={`pointer-events-none absolute select-none opacity-70 ${className}`}
      animate={{ x: [0, drift, 0], y: [0, -10, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Home() {
  const [loading, setLoading] = useState(() => !introPlayed);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroLift = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    introPlayed = true;
    const done = setTimeout(() => setLoading(false), LOADING_DURATION);
    return () => clearTimeout(done);
  }, []);

  return (
    <>
      {/* the lamp coming up before the show */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-alengka-night px-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute h-[300px] w-[520px] rounded-[50%] bg-alengka-flame/30 blur-[120px]"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 0.5, 0.3, 0.9], scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
            <motion.img
              src="/assets/title-logo.png"
              alt="Ashes of Alengka"
              className="relative w-64 sm:w-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0.15, 1] }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="alengka-kelir relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6"
        >
          <div className="alengka-flicker pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-alengka-flame/20 blur-[150px]" />

          <Awan src="/assets/awan-1.png" className="left-[4%] top-[14%] w-40 sm:w-64" duration={13} drift={40} />
          <Awan src="/assets/awan-2.png" className="right-[6%] top-[10%] w-32 sm:w-52" duration={17} drift={-34} />
          <Awan src="/assets/awan-3.png" className="right-[16%] bottom-[26%] w-28 sm:w-44" duration={21} drift={26} />

          <motion.div
            style={{ opacity: heroFade, y: heroLift }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            <motion.img
              src="/assets/title-logo.png"
              alt="Ashes of Alengka"
              className="w-72 sm:w-[30rem] lg:w-[38rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            <motion.p
              className="max-w-xl text-center text-alengka-cream/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              A local multiplayer shadow-puppet fighting game, built in Godot over
              a 48 hour jam weekend. Two players share one controller, the way two
              hands share one dalang.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span className="rounded-full border border-alengka-gold/60 bg-alengka-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-alengka-gold">
                Best Story / Art &middot; UQCS Game Jam 2026
              </span>
              <a
                href={PLAY_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-alengka-flame px-10 py-4 text-lg font-bold tracking-wide text-alengka-night shadow-[0_0_40px_-6px_rgba(255,138,31,0.7)] transition-all duration-300 hover:scale-105 hover:bg-alengka-amber sm:px-12 sm:py-5 sm:text-xl"
              >
                Play Now
                <LuExternalLink />
              </a>
            </motion.div>
          </motion.div>

          <DalangShadow className="absolute bottom-0 left-1/2 h-[22vh] w-[70vw] -translate-x-1/2 sm:w-[42vw] lg:w-[32vw]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-alengka-night" />

          <motion.span
            className="absolute bottom-8 z-10 text-xs uppercase tracking-[0.3em] text-alengka-cream/30"
            animate={{ opacity: [0.25, 0.8, 0.25] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            scroll
          </motion.span>
        </section>

        {/* ── Why Alengka ──────────────────────────────────────────── */}
        <section className="flex w-full justify-center bg-linear-to-b from-alengka-night to-alengka-ink py-20 sm:py-28">
          <AppearSection className="flex w-full max-w-5xl flex-col items-center gap-10 px-6 lg:flex-row lg:gap-16">
            <div className="flex shrink-0 items-end justify-center gap-4">
              <motion.img
                src="/assets/anoman-body.png"
                alt="Anoman, the white monkey"
                className="h-44 w-auto object-contain sm:h-60"
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "50% 100%" }}
              />
              <motion.img
                src="/assets/dasamuka-body.png"
                alt="Dasamuka, the ten-faced king"
                className="h-40 w-auto -scale-x-100 object-contain sm:h-56"
                animate={{ rotate: [5, -3, 5] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "50% 100%" }}
              />
            </div>

            <div className="flex flex-col gap-5">
              <span className="alengka-eyebrow">01 &middot; The story</span>
              <h2 className="alengka-heading">Anoman, Dasamuka, and a kingdom on fire</h2>
              <p className="text-justify text-alengka-cream/75">
                We took the fight everybody already knows from the Ramayana.
                Anoman, the white monkey, against Dasamuka, the ten-faced king of
                Alengka. In the story Anoman is captured and set alight, and he
                burns the kingdom down with his own tail. That is where the title
                comes from, and it is why there is fire in every single frame of
                this game.
              </p>
              <p className="text-justify text-alengka-cream/75">
                Choosing a story everyone on the team grew up with meant nobody had
                to be briefed. The artists knew what the characters looked like,
                what the cloud motifs meant, what the frame around a wayang screen
                is supposed to be. That saved us hours we did not have.
              </p>
            </div>
          </AppearSection>
        </section>

        {/* ── One controller ───────────────────────────────────────── */}
        <section className="flex w-full justify-center bg-linear-to-b from-alengka-ink to-alengka-night py-20 sm:py-28">
          <AppearSection className="flex w-full max-w-3xl flex-col gap-6 px-6">
            <span className="alengka-eyebrow">02 &middot; How it plays</span>
            <h2 className="alengka-heading">One controller, split down the middle</h2>
            <p className="text-justify text-alengka-cream/75">
              A dalang works two puppets with two hands. So we gave two players one
              controller and cut it in half. Player one holds the left grip and
              owns the left analog stick and the d-pad. Player two holds the right
              grip and owns the right stick and the face buttons. You end up
              shoulder to shoulder with the person you are trying to beat, elbowing
              each other over a single pad.
            </p>
            <p className="text-justify text-alengka-cream/75">
              Tilting the stick does not move a character sprite around a level. It
              leans the puppet, holds the lean for half a second, then lets it fall
              back upright, exactly like tipping a rod.
            </p>
            <SharedController />
          </AppearSection>
        </section>

        {/* ── Explore ──────────────────────────────────────────────── */}
        <section className="flex w-full justify-center bg-alengka-night py-20 sm:py-28">
          <AppearSection className="flex w-full max-w-4xl flex-col gap-6 px-6">
            <span className="alengka-eyebrow">03 &middot; Keep going</span>
            <h2 className="alengka-heading">More from the kelir</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {EXPLORE.map((item) => (
                <Link key={item.to} to={item.to} className="alengka-shot group flex flex-col bg-alengka-ink/70">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-5">
                    <span className="flex items-center gap-2 font-bold text-alengka-gold">
                      {item.title}
                      <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="text-sm text-alengka-cream/65">{item.body}</span>
                  </div>
                </Link>
              ))}
            </div>
          </AppearSection>
        </section>
      </motion.div>
    </>
  );
}
