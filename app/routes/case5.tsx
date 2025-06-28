import { motion } from "motion/react";
import { type ReactNode, useState } from "react";
import "./case5_spear.css";
import "./case5_explosion.css";

export default function Case5(): ReactNode {
  const [showSpear, setShowSpear] = useState(true);

  return (
    <div className="pointer-events-none absolute origin-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {showSpear && (
        <motion.div
          initial={{ x: -350 }}
          animate={{ x: -50 }}
          transition={{ duration: 0.6 }}
          className="spear"
          onAnimationEnd={() => setShowSpear(false)}
        >
          <div className="origin-left spear-bg" />
        </motion.div>
      )}
      {!showSpear && (
        <div className="explosion">
          <div className="origin-left explosion-bg" />
        </div>
      )}
    </div>
  );
}
