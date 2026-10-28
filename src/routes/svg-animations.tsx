import { motion, useMotionValue, useTransform } from "motion/react";

const limit = 100;

export default function SvgAnimations() {
  const x = useMotionValue(0);
  const tick = useTransform(x, [0, limit], [0, 1]);
  const crossOne = useTransform(x, [0, -limit / 2], [0, 1]);
  const crossTwo = useTransform(x, [-limit / 2, -limit], [0, 1]);
  const background = useTransform(x, [-limit, 0, limit], [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
])
const color = useTransform(x, [-limit, 0, limit], [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
])


  return (
    <main className="flex min-h-screen flex-col items-start gap-10 bg-black px-6 py-16 text-white">
      <h1 className="text-xl font-medium">SVG Animations</h1>
      <motion.div className="flex m-auto h-[200px] aspect-square bg-blue-600 rounded-2xl" style={{ background }}>
        <motion.div
          className="m-auto aspect-square h-24 rounded-2xl bg-white"
          drag="x"
          dragSnapToOrigin
          dragConstraints={{ left: -limit, right: limit }}
          style={{ x }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              strokeWidth="4"
              style={{ stroke: color }}
            />
            <motion.path
              d="M 32 52 L 44 64 L 68 36"
              fill="none"
              stroke="black"
              strokeWidth="4"
              strokeDasharray="0 1"
              style={{ pathLength: tick, stroke: color }}
            />
            <motion.path
              d="M 36 36 L 64 64"
              fill="none"
              stroke="black"
              strokeWidth="4"
              strokeDasharray="0 1"
              style={{ pathLength: crossOne, stroke: color }}
            />
            <motion.path
              d="M 64 36 L 36 64"
              fill="none"
              stroke="black"
              strokeWidth="4"
              strokeDasharray="0 1"
              style={{ pathLength: crossTwo, stroke: color }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </main>
  );
}
