import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/Header/Navbar";

const About = () => {
  return (
    <div className="mx-auto px-10">
      <NavBar />
      <div className="font-gilda">
        <h1 className="text-centerm mt-[90px] font-urbanist font-normal text-brand600 sm:text-heading-mobile-1 sm:leading-heading-mobile-1 lg:text-heading-desktop-1 lg:leading-heading-desktop-1">
          About Us
        </h1>
        <hr className="w-full border-t-[1px] border-[#D9D9D9]" />
        <p className="mb-4 mt-[60px] text-lg">
          Welcome to this demo project, created as part of my web development
          portfolio. While this company isn&lsquo;t real, the goal of this
          project is to bring a Figma design (which I did not create) to life as
          a fully functional web application built from scratch.
        </p>
        <p className="mb-4 text-lg">
          This project demonstrates my expertise in <strong>React.js</strong>{" "}
          and <strong>Next.js</strong>, showcasing how I can take a design and
          turn it into a modern website. Every line of code here was written by
          me, focusing on delivering a clean and efficient user experience.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">
          What I&lsquo;ve Implemented:
        </h2>
        <ul className="mb-4 list-inside list-disc text-lg">
          <li>
            <strong>Design to Web:</strong> The Figma design was transformed
            into a working website.
          </li>
          <li>
            <strong>Technologies Used:</strong> Built with React.js and Next.js
            to ensure fast loading, server-side rendering, and seamless
            navigation.
          </li>
          <li>
            <strong>Source Code:</strong> The complete project is available on{" "}
            <a
              href="https://github.com/chriscoderdr/morro-travel-agency"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
            , where you can explore how I structured the code and handled
            different aspects of the web app.
          </li>
        </ul>

        <p className="mb-4 text-lg">
          This page is a demonstration of my ability to build
          professional-quality websites that align with the client&lsquo;s
          vision. If you&lsquo;d like to know more about my work or get in
          touch, feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/chriscoderg/"
            className="text-blue-500 underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
