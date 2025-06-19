import React from "react";

const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="relative w-full overflow-hidden h-28  sm:h-32 md:h-40">
      <div className="flex">
        <section
          className="flex animate-swipe"
          style={{ "--speed": `${speed}ms` }}
        >
          {images.map(({ id, image, alt }) => (
            <div key={id} className="flex-shrink-0 px-4 sm:px-6 md:px-14">
              <img
                className="h-24 sm:h-28 md:h-32 w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] object-contain"
                src={image}
                alt={alt}
              />
            </div>
          ))}
        </section>
        <section
          className="flex animate-swipe"
          style={{ "--speed": `${speed}ms` }}
        >
          {images.map(({ id, image, alt }) => (
            <div key={id} className="flex-shrink-0 px-4 sm:px-6 md:px-14">
              <img
                className="h-24 sm:h-28 md:h-32 w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] object-contain"
                src={image}
                alt={alt}
              />
            </div>
          ))}
        </section>
        <section
          className="flex animate-swipe"
          style={{ "--speed": `${speed}ms` }}
        >
          {images.map(({ id, image, alt }) => (
            <div key={id} className="flex-shrink-0 px-4 sm:px-6 md:px-14">
              <img
                className="h-24 sm:h-28 md:h-32 w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] object-contain"
                src={image}
                alt={alt}
              />
            </div>
          ))}
        </section>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes swipe {
          0% {
            transform: translate(0);
          }
          100% {
            transform: translate(-100%);
          }
        }
        .animate-swipe {
          animation: swipe var(--speed) linear infinite backwards;
        }
      `}</style>
    </div>
  );
};

export { Banner };