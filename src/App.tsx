import { SelectedPage } from "@/common/types";
import Benefits from "@/scenes/skills";
import Footer from "@/scenes/footer";
import Home from "@/scenes/home";
import Navbar from "@/scenes/navbar";
import OurClasses from "@/scenes/myProjects";
import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AboutMe
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.AboutMe);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <p className="app">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <Footer />
      </p>
    </>
  );
}

export default App;
