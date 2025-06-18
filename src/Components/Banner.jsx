import React from "react";

const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="relative w-full overflow-hidden h-28 sm:h-32 md:h-40">
      <div className="flex">
        <section
          className="flex animate-swipe"
          style={{ "--speed": `${speed}ms` }}
        >
          {images.map(({ id, image, alt }) => (
            <div key={id} className="flex-shrink-0 px-2 sm:px-3 md:px-4">
              <img
                className="h-20 sm:h-24 md:h-28 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] object-contain"
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
            <div key={id} className="flex-shrink-0 px-2 sm:px-3 md:px-4">
              <img
                className="h-20 sm:h-24 md:h-28 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] object-contain"
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
            <div key={id} className="flex-shrink-0 px-2 sm:px-3 md:px-4">
              <img
                className="h-20 sm:h-24 md:h-28 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] object-contain"
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