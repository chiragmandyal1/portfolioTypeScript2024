import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import ActionButton from "@/common/ActionButton";
import { SelectedPage } from "@/common/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="aboutme" className="gap-16  py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="md:before:content-evolvetext before:absolute before:-left-20 before:-top-10 before:z-[-1]  ">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className=" text-lg ">
              A recent computer science graduate with experience in front-end
              web development, specifically with React JS and JavaScript. Proven
              ability to work independently and in a team environment,
              delivering high-quality and user-friendly applications. Proficient
              in integrating with back-end systems using APIs and knowledgeable
              in popular node packages such as Bootstrap, Axios, Formik and
              Material UI. A quick learner with strong communication skills and
              a passion for technology.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact info
            </ActionButton>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
