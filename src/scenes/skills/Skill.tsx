import { SelectedPage } from "@/common/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Skill({ icon, title }: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="mt-2 rounded-md   px-3 py-4 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2  bg-primary-100 p-4 hover:bg-white">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
    </motion.div>
  );
}
