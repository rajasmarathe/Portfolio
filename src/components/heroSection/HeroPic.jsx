import { motion } from "framer-motion";


const HeroPic = () => {
  return (
    <motion.div>
      <img
        src="../../public/images/my_img.png"
        alt="Rajas Marathe"
        className="max-h-[1000px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
      
      </div>
    </motion.div>
  );
};

export default HeroPic;
