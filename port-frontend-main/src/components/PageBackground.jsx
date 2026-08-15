import { motion } from "framer-motion";

const orbs = [
  { x: "15%", y: "20%", size: 320, delay: 0 },
  { x: "80%", y: "60%", size: 280, delay: 2.5 },
  { x: "50%", y: "80%", size: 220, delay: 5 },
];

function PageBackground() {
  return (
    <div className="page-bg">
      <div className="page-bg-grid" />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="page-bg-orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            marginLeft: -(orb.size / 2),
            marginTop: -(orb.size / 2),
          }}
          animate={{
            x: [0, 40, -25, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.12, 0.93, 1],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}

export default PageBackground;
