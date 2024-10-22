import Image from "next/image";

const TripDocumentation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[100px]">
      <div className="whitespace-pre-line text-wrap text-center font-gilda text-heading-mobile-1 leading-heading-mobile-1 text-neutral-900 lg:text-heading-desktop-1 lg:leading-heading-desktop-1">
        {"Watch our entire trip\ndocumentation"}
      </div>
      <div>
        <a
          href="https://www.youtube.com/watch?v=e8gzKGr1yqI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/video.png"
            alt="Video"
            width={1440} // Set appropriate width
            height={600} // Set appropriate height based on image aspect ratio
          />
        </a>
      </div>
    </div>
  );
};

export default TripDocumentation;
