import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="flex flex-col items-center justify-center h-full p-6">
        <motion.img
          src="/logoWhiteHeaven.png"
          className="md:w-[30%]"
          alt="Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="text-center w-[80%] md:w-[50%] mt-4 text-sm md:text-md text-slate-600 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          India&apos;s premier show architects — from campus arenas to mega
          stages, we bring experiences to life.
        </motion.p>
      </div>
    </section>
  );
};
