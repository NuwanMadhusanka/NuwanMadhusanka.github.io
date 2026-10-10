/**
 * Banner image inside a 16/7 media box. The SVGs are 640×200 with a
 * background that fills past the edges, so `object-fit: fill` (applied via
 * `.media-box img` in globals.css) shows them uncropped.
 */
export function Banner({ src }: { src: string }) {
  return (
    <div className="media-box">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" aria-hidden="true" />
    </div>
  );
}
