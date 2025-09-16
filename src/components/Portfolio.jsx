import { useRef } from "react";
import { items } from '../constants'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { styles } from "../styles";



const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="works" className="mt-32">
      <div className="flex items-center justify-center size-full overflow-hidden">
        <div className="max-w-[1100px] h-full m-auto flex flex-col items-center justify-center gap-12 sm:flex-row">
          <div className="sm:flex-1 sm:h-[50%] w-full max-h-[300px]" ref={ref}>
            <img className="size-full object-contain sm:object-cover" src={item.img} alt="" />
          </div>
          <motion.div className={`flex-1 flex flex-col gap-5 p-3 items-center text-center ${styles.tramsform}`}>
            <h2 className="text-[30px] sm:text-[40px]">{item.title}</h2>
            <p>{item.desc}</p>
            <button className="bg-[#7b349e] border-none rounded-lg p-2 w-[200px] cursor-pointer">
              <a href={item.url} target="_blank">See now</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className={`${styles.heroSubText} sticky top-0 left-0 pt-5 text-center`}>

        <h1>Featured Works</h1>

        <motion.div style={{ scaleX }} className="h-2 bg-white-200"></motion.div>
      </div>
      <div className="flex flex-col gap-12 items-center">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
