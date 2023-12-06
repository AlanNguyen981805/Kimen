"use client"

import React from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      className="h-[1000px] bg-red-300"
    >
      Box1
      <h1>Box 1</h1>
    </motion.div>
  );
};

export default Box1;
