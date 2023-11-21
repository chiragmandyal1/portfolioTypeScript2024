import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import HText from "@/common/HText";
import { ProjectType, SelectedPage } from "@/common/types";
import { motion } from "framer-motion";
import Project from "./Project";

const projects: Array<ProjectType> = [
  {
    name: "React-Firebase",
    link: "https://react-wecodeforyou.web.app/",
    description:
      "My React.js and Firebase project is designed to securely store and display user data. Using Firebase's authentication, hosting, cloud firestore and cloud storage services, the app allows users to sign up and securely store their personal information. Upon logging in, users can view their stored data, which is displayed in a user-friendly format. The app is also designed with Bootstrap, making it visually appealing and easy to use. Overall, this project showcases my proficiency in React.js and Firebase, as well as my ability to design and develop secure and efficient web applications.",
    image: image1,
  },
  {
    name: "NewsApp",
    link: "https://github.com/WhySoOpKratos/News-App",
    description: `My React project is a news app that fetches news from an API and displays the latest news headlines and news articles in a user-friendly and visually appealing way. I have designed the app with two main features: the ability to view all available news and to view news headlines only.

    I have implemented the app using React components, with Axios used to fetch data from the API. The app is designed with efficiency and optimal performance in mind, with a responsive design that allows users to access the news on any device.
    
    The first feature of the app allows users to view all available news. The second feature of the app allows users to view news headlines only, allowing for a quick and easy way to stay updated on current events.
    
    Overall, my news app is a useful platform for users to access the latest news and stay informed on a range of topics, with a focus on efficiency and user-friendliness.`,
    image: image2,
  },
  { name: "Coming soon", image: image3 },
  { name: "Coming soon", image: image3 },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurProjects({ setSelectedPage }: Props) {
  return (
    <section id="projects" className="w-full bg-primary-100 pb-20 pt-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Projects</HText>
            <p className="py-5">some personal projects i have worked on.</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden pl-64">
          <ul className="w-[2000px] whitespace-nowrap ">
            {projects.map((item: ProjectType, index) => (
              <Project
                key={`${item.name}-${index}`}
                name={item.name}
                link={item.link}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurProjects;
