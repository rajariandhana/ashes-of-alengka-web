import { motion } from "motion/react";
import { LuExternalLink } from "react-icons/lu";

import AppearSection from "../components/AppearSection.jsx";
import PuppetRig from "../components/PuppetRig.jsx";
import KelirStack from "../components/KelirStack.jsx";
import CombatLoop from "../components/CombatLoop.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { PLAY_LINK, REPO_LINK } from "../constants.js";

const TIMELINE = [
  {
    label: "added wayang interface and player and enemy class",
    note: "Hour one. Classes before art.",
  },
  { label: "add player movement, ground, main scene", note: "" },
  { label: "feat: Add main menu scenes, scripts and assets", note: "" },
  { label: "feat: Player wayang rigging", note: "The puppet gets joints." },
  { label: "feat: bind to game controller", note: "" },
  { label: "feat: arena 3d 2d", note: "The 2D fight moves inside a 3D stage." },
  {
    label: "feat: tiba2 fighting game",
    note: 'The pivot. "Tiba-tiba" is Indonesian for "suddenly".',
    pivot: true,
  },
  { label: "feat: detect attack", note: "" },
  { label: "feat: hurtbox hitbox damage particle", note: "" },
  { label: "feat: added healthbar fr this time", note: "" },
  { label: "feat: added audio sound for hitting", note: "" },
  { label: "feat: final game", note: "Submitted." },
];

// photo: a square image in /public/assets/team/ · link: portfolio, LinkedIn, etc.
// Leave either empty and the card falls back to initials / not clickable.
const TEAM = [
  {
    name: "Dimas Gistha Adnyana",
    role: "Art direction",
    photo: "/assets/team/dimas.png",
    link: "https://www.linkedin.com/in/dimasgistha/",
  },
  {
    name: "Shafa Kirana Mulia",
    role: "Art & character design",
    photo: "/assets/team/shafa.jpeg",
    link: "https://www.linkedin.com/in/shafakiranamulia/",
  },
  {
    name: "Muhammad Iqbal Shafarel",
    role: "Illustration & animation",
    photo: "/assets/team/iqbal.png",
    link: "https://www.linkedin.com/in/iqbalshafarel/",
  },
  {
    name: "Farrell Reynard Jechoniah Simarmarta",
    role: "Frame & UI",
    photo: "/assets/team/farrel.jpeg",
    link: "https://www.linkedin.com/in/farrell-simarmata-8900a2308/",
  },
  {
    name: "Rogelio Kenny Arisandi",
    role: "Development",
    photo: "/assets/team/kenny.jpeg",
    link: "https://www.linkedin.com/in/rogelio-kenny-arisandi/",
  },
  {
    name: "Ralfazza Rajariandhana",
    role: "Development",
    photo: "/assets/team/ralfazza-rajariandhana.webp",
    link: "https://ralfazza.com",
  },
];

export default function BehindTheScenes() {
  return (
    <>
      {/* ── Hero: the team, the night we won ─────────────────────── */}
      {/* small screens: the photo sits in a frame above the title;
          md and up: it fills the hero behind the title */}
      <section className="alengka-kelir relative flex w-full flex-col items-center overflow-hidden px-6 pb-16 pt-28 md:min-h-screen md:flex-row md:items-end md:justify-center md:px-0 md:pb-0 md:pt-0">
        <motion.div
          className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-xl border border-alengka-gold/30 shadow-[0_20px_60px_-20px_rgba(255,138,31,0.45)] md:absolute md:inset-0 md:aspect-auto md:max-w-none md:rounded-none md:border-0 md:shadow-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/2.webp"
            alt="The team at the UQCS Game Jam, each holding a Best Story / Art certificate"
            className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          {/* lamp-warm grade so the photo sits in the same palette as the game */}
          <div className="pointer-events-none absolute inset-0 bg-alengka-ember/30 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-b from-alengka-night/70 via-transparent via-35% to-alengka-night md:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/3 bg-linear-to-t from-alengka-night via-alengka-night/80 to-transparent md:block" />
        </motion.div>

        <motion.div
          className="relative z-10 mt-10 flex w-full max-w-4xl flex-col items-center gap-4 text-center md:mt-0 md:px-6 md:pb-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <span className="alengka-eyebrow">Behind the scenes</span>
          <h1 className="alengka-heading text-4xl! sm:text-5xl! lg:text-6xl!">
            It all starts from a Game Jam
          </h1>
          <p className="max-w-xl text-alengka-cream/75">
            Six people, one weekend, and a lot of decisions we would not have
            made with more time.
          </p>
        </motion.div>
      </section>

      {/* ── Four hours before ────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-alengka-night py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col gap-5 px-6">
          <span className="alengka-eyebrow">
            01 &middot; Before Anything Existed
          </span>
          <h2 className="alengka-heading">
            A team that met four hours before the jam
          </h2>
          <p className="text-justify text-alengka-cream/75">
            There was no plan. We put the team together about four hours before
            the UQ Computing Society Game Jam actually started, six of us. The
            first idea on the table was a soulslike, which is roughly the least
            sensible thing you can attempt in 48 hours.
          </p>
          <p className="text-justify text-alengka-cream/75">
            We dropped it and asked a better question: what do we already know
            that nobody else at this jam is going to make? That's when we
            realised something simple, all six of us came from Indonesia. The
            answer was staring at us: wayang kulit, one of Indonesia's most
            celebrated traditional art forms, a shadow puppet theatre where one
            puppeteer works a whole cast of leather puppets against a lamp-lit
            cloth screen and narrates an epic until sunrise.
          </p>
        </AppearSection>
      </section>
      {/* ── The pivot ────────────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-alengka-ink py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col gap-6 px-6">
          <span className="alengka-eyebrow">02 &middot; The Pivot</span>
          <h2 className="alengka-heading">
            Seventeen hours out, the game was not working
          </h2>
          <p className="text-justify text-alengka-cream/75">
            Seventeen hours out, the game was not working The original build had
            a player and an enemy and physics and none of it was fun. With well
            under six hours left, we stopped adding and asked what the puppets
            were actually good at. They are held on sticks. They lean. They
            flail. That is a fighting game, not a platformer.
          </p>
          <p className="text-justify text-alengka-cream/75">
            The commit where that decision landed is still in the history, and
            we did not pick a graceful name for it.
          </p>

          <div className="alengka-panel alengka-mono mt-2 flex flex-col gap-1 p-5 text-sm">
            {TIMELINE.map((entry, index) => (
              <motion.div
                key={entry.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`flex flex-col gap-0.5 border-l-2 py-1.5 pl-4 ${
                  entry.pivot
                    ? "border-alengka-flame"
                    : "border-alengka-gold/15"
                }`}
              >
                <span
                  className={
                    entry.pivot
                      ? "font-bold text-alengka-flame"
                      : "text-alengka-cream/65"
                  }
                >
                  {entry.label}
                </span>
                {entry.note && (
                  <span className="font-jakarta text-xs text-alengka-cream/35 [font-family:var(--font-jakarta)]">
                    {entry.note}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </AppearSection>
      </section>
      {/* ── 2D in 3D ─────────────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-linear-to-b from-alengka-ink to-alengka-night py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col gap-6 px-6">
          <span className="alengka-eyebrow">03 &middot; Design decision</span>
          <h2 className="alengka-heading">
            A 2D fighter built inside a 3D stage
          </h2>
          <p className="text-justify text-alengka-cream/75">
            This is the trick the whole look hangs on. The fight is a completely
            ordinary 2D scene. It is rendered into a SubViewport, and that
            viewport texture is then painted onto a flat quad standing inside a
            3D world. Everything else in the shot is real geometry in that
            world: the cloth, the fog, the clouds, the fire, the puppeteer.
          </p>
          <p className="text-justify text-alengka-cream/75">
            It means we got depth, volumetric haze and a camera that can drift,
            without ever having to write a 3D fighting game. Drag the slider to
            pull the scene apart.
          </p>
          <KelirStack />
        </AppearSection>
      </section>

      {/* ── The rig ──────────────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-alengka-night py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col gap-6 px-6">
          <span className="alengka-eyebrow">04 &middot; The unique bit</span>
          <h2 className="alengka-heading">The arms are not animated at all</h2>
          <p className="text-justify text-alengka-cream/75">
            Only the body is keyframed. Each arm is two rigid bodies hanging off
            the puppet on pin joints, shoulder to forearm to elbow to hand, with
            a small animatable anchor that chases the shoulder position every
            frame so the joint has something real to hold on to. When the body
            tilts, the arms get dragged along and then keep going.
          </p>
          <p className="text-justify text-alengka-cream/75">
            Letting the simulation do the work looked more like a real puppet
            than anything we could have posed by hand, so the tuning went into
            the damping rather than into keyframes. It also means no two swings
            ever land quite the same way.
          </p>
          <PuppetRig />
        </AppearSection>
      </section>

      {/* ── Combat ───────────────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-alengka-night py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col gap-6 px-6">
          <span className="alengka-eyebrow">05 &middot; Under the hood</span>
          <h2 className="alengka-heading">
            Three small enums instead of a pile of booleans
          </h2>
          <p className="text-justify text-alengka-cream/75">
            A fighter tracks three independent things: whether it is alive,
            whether it is leaning, and where it is in the attack cycle.
            Splitting them meant a dying puppet mid-lean mid-cooldown was never
            an undefined case, which matters a lot when you are writing code at
            four in the morning.
          </p>
          <p className="text-justify text-alengka-cream/75">
            The hit detection is deliberately blunt. The hitbox is an area with
            monitoring switched off, turned on only for the duration of the
            swing and off again the instant it ends. No frame data, no cancels.
            A hundred health each, ten damage a hit, two seconds before you can
            swing again, and an indicator above your head that dims so you can
            see it.
          </p>
          <CombatLoop />
        </AppearSection>
      </section>

      {/* ── Details ──────────────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-linear-to-b from-alengka-night to-alengka-ink py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col gap-6 px-6">
          <span className="alengka-eyebrow">06 &middot; The small stuff</span>
          <h2 className="alengka-heading">Things nobody asked for</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "The camera is never still",
                body: "A handheld jitter script on the 3D root, layered sine waves at different frequencies. Sub-millimetre, but it stops the shot from feeling like a screenshot.",
              },
              {
                title: "Every cloud has its own phase",
                body: "Each awan gets a random starting offset when it spawns, so they drift and bob independently instead of sliding in formation.",
              },
              {
                title: "Three different hit sounds",
                body: "Picked at random on every connection, because one sample repeated forty times in a round is unbearable.",
              },
              {
                title: "The dalang is in frame",
                body: "His shadow sits closest to the camera and covers the bottom of the screen, exactly where your view would be blocked at a real performance.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="alengka-panel flex flex-col gap-2 p-5 transition-colors duration-300 hover:border-alengka-gold/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <span className="font-bold text-alengka-gold">
                  {item.title}
                </span>
                <span className="text-sm text-alengka-cream/65">
                  {item.body}
                </span>
              </motion.div>
            ))}
          </div>
        </AppearSection>
      </section>
      {/* ── Result ───────────────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-alengka-ink py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col items-center gap-6 px-6">
          <span className="alengka-eyebrow">07 &middot; The Result</span>
          <h2 className="alengka-heading text-center">Best Story / Art</h2>
          <p className="text-center text-alengka-cream/75">
            We won the story and art category. The part we keep thinking about
            is that the thing the judges responded to was the thing we nearly
            did not make. A soulslike would have been a worse game and a much
            worse story, and we only found this one because we ran out of time
            and had to be honest about what we were good at.
          </p>

          <div className="mt-4 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {TEAM.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>

          <p className="mt-2 text-center text-xs italic text-alengka-cream/35">
            Team name, as submitted: &ldquo;the team that if we win, we will cut
            kenny&rsquo;s hair&rdquo;.
          </p>
        </AppearSection>
      </section>

      {/* ── After ────────────────────────────────────────────────── */}
      <section className="flex w-full justify-center bg-alengka-ink py-20 sm:py-28">
        <AppearSection className="flex w-full max-w-3xl flex-col gap-6 px-6">
          <span className="alengka-eyebrow">08 &middot; After The Jam</span>
          <h2 className="alengka-heading">We kept going back to it</h2>
          <p className="text-justify text-alengka-cream/75">
            Jam code is jam code, and this one had a to-do list sitting in the
            README. Over the following months we went back and gave it a proper
            main menu, a pause menu, a win screen and game over flow, the attack
            cooldown indicator, and finally pulled the fighter apart into the
            state machine it should have been from the start. We also added more
            characters and a leaderboard, so there was more to play and more
            reason to come back and beat your friends' scores
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PLAY_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-alengka-flame px-6 py-2.5 text-sm font-semibold text-alengka-night transition-all duration-300 hover:scale-105 hover:bg-alengka-amber"
            >
              Play it in the browser
              <LuExternalLink />
            </a>
            <a
              href={REPO_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-alengka-gold/40 px-6 py-2.5 text-sm font-semibold text-alengka-gold transition-all duration-300 hover:border-alengka-gold hover:bg-alengka-gold/10"
            >
              Repository
              <LuExternalLink />
            </a>
          </div>
          <p className="text-xs text-alengka-cream/35">
            Two players and a gamepad is the way it is meant to be played. On a
            keyboard, player one is WASD and C, player two is IJKL and N.
          </p>
        </AppearSection>
      </section>
    </>
  );
}
