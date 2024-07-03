import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header
            {...slideAnimation("down")}
            className="flex items-center gap-2"
          >
            <img
              src="./py-black.png"
              alt="s2"
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-xl font-bold">Design it Spidey</h1>
          </motion.header>
          <motion.div className="home-content p-5" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h2 className="text-2xl font-bold">
                Welcome to Design it Spidey
              </h2>
              <p className="mt-2 text-gray-600">
                Create and customize your designs with ease. Explore the endless
                possibilities with our tools.
              </p>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-wrap gap-5 mt-5"
            >
              <Card title="Shoes" description="" link="/shoe" />
              <Card title="Phone Cover" description="" link="/phone" />
              <Card title="Apple Watch" description="" link="/watch" />
              {/* <Card
                title="Page 4"
                description="This is the fourth page."
                link="/watch"
              /> */}
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

const Card = ({ title, description, link }) => (
  <a href={link} className="w-full sm:w-1/2 lg:w-1/4">
    <motion.div
      className="p-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  </a>
);

export default Home;
