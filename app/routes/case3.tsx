import { motion } from "motion/react";
import { type ReactNode, useState } from "react";
import "./case3_spear.css";
import "./case3_explosion.css";

export default function Case3(): ReactNode {
  const [showSpear, setshowSpear] = useState(true);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {showSpear && (
        <motion.div
          initial={{ x: -350 }}
          animate={{ x: -50 }}
          transition={{ duration: 0.6 }}
          className="spear"
          onAnimationEnd={() => setshowSpear(false)}
        ></motion.div>
      )}
      {!showSpear && <div className="explosion" />}
    </div>
  );
}
