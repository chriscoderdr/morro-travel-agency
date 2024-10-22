import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/Header/Navbar";

const About = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <NavBar />
      <div className="font-gilda">
        <h1 className="font-urbanist text-brand600 text-heading-desktop-1 font-normal text-centerm mt-[90px]">
          About Us
        </h1>
        <hr className="border-t-[1px] border-[#D9D9D9] w-full" />
        <p className="text-lg mb-4 mt-[60px]">
          Welcome to this demo project, created as part of my web development
          portfolio. While this company isn&lsquo;t real, the goal of this project is
          to bring a Figma design (which I did not create) to life as a fully
          functional web application built from scratch.
        </p>
        <p className="text-lg mb-4">
          This project demonstrates my expertise in <strong>React.js</strong>{" "}
          and <strong>Next.js</strong>, showcasing how I can take a design and
          turn it into a modern website. Every line of code here was written by
          me, focusing on delivering a clean and efficient user experience.
        </p>

        <h2 className="text-2xl font-semibold mb-3">What I&lsquo;ve Implemented:</h2>
        <ul className="list-disc list-inside mb-4 text-lg">
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

        <p className="text-lg mb-4">
          This page is a demonstration of my ability to build
          professional-quality websites that align with the client&lsquo;s vision. If
          you&lsquo;d like to know more about my work or get in touch, feel free to
          connect with me on{" "}
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
