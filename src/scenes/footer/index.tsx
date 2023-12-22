import Logo from "@/assets/Logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import { MdAttachEmail } from "react-icons/md";
type Props = {};

function Footer({}: Props) {
  return (
    <section id="footer" className="w-full bg-primary-100 ">
      <footer className="bg-gray-20 py-16">
        <div className="h-[50px] w-full  py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8"></div>
          </div>
        </div>
        <div className="mx-auto w-5/6 justify-center gap-96 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <img className="h-15 w-96" alt="logo" src={Logo}></img>
            <p className="my-2 text-lg">
              Ready to start a new project? I'm here to help! As a full-stack
              developer, I'm eager to bring your ideas to life. Feel free to get
              in touch using the provided contact information. Let's create
              something amazing together!
            </p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="text-xl font-bold">Links</h4>
            <p className="my-5 flex items-center gap-8 ">
              <a
                href={`https://www.linkedin.com/in/chirag-mandyal-543575152/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedin className="h-16 w-14 hover:text-secondary-linkedin" />
              </a>
              <a
                href={`https://github.com/chiragmandyal1`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithub className="h-16 w-14 hover:text-secondary-github" />
              </a>
            </p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="text-xl font-bold">Contact me 👋</h4>
            <p className="my-5 flex items-center gap-8">
              <a
                href={`mailto:chiragmandyal82@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdAttachEmail className="h-16 w-14 hover:text-secondary-mail" />
              </a>
              <a
                href={`https://wa.me/919882724284`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-16 w-14 hover:text-secondary-whatsapp" />
              </a>
            </p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="text-xl font-bold">Call 📞</h4>
            <h4 className="mt-8 from-neutral-950 text-2xl">+91-82196-00177</h4>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
