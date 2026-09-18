/**
 * The puppeteer himself, sitting between you and the screen.
 *
 * The artwork is authored full-frame at 16:9 with the dalang already placed at
 * the bottom centre, so the layer only has to be pinned to the bottom edge of
 * whatever it sits in. It is sized by height — the caller sets one — because
 * the transparent margin around him means his actual size is a little over half
 * of whatever the image is given.
 */
export default function Dalang({ className = "h-full" }) {
  return (
    <img
      src="/assets/dalang.png"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 left-1/2 w-auto max-w-none -translate-x-1/2 select-none ${className}`}
    />
  );
}
