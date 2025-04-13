import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m RajasMarathe, a web development student learning React and TypeScript. I enjoy building
        websites and apps, and I’m focused on getting better at front-end development. I like 
        creating real projects to practice what I learn and improve my coding skills. I spend time
        watching tutorials, taking online courses, and exploring new tools and  technologies. My goal 
        is to become a good developer and work on projects that help people. I also enjoy learning 
        new things and sharing what I know with others who are also learning.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
