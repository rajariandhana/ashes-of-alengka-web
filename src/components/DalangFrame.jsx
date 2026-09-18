/**
 * The carved gawang the whole show is played inside — the layer in front of
 * everything, including the dalang.
 *
 * It is a border with a hollow middle, so it stretches to whatever it is asked
 * to frame rather than being cropped to fit.
 */
export default function DalangFrame({ className = "" }) {
  return (
    <img
      src="/assets/dalang_frame.png"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full select-none ${className}`}
    />
  );
}
