import Image from "next/image";

const TripDocumentation = () => {
  return (
    <div className="flex py-[100px] justify-center flex-col items-center">
      <div className="whitespace-pre-line text-neutral-900 text-heading-desktop-1 text-center font-gilda">
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
