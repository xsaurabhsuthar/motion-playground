import { motion, stagger, type Variants } from "motion/react";

const items = [
  "Acknowledgment",
  "Colophon",
  "Errata",
  "Marginalia",
  "Apparatus",
];

const transition = { type: "spring" as const, bounce: 0.2, visualDuration: 0.2 };

const list: Variants = {
  rest: { transition: { delayChildren: stagger(0.06, { from: "last" }) } },
  hover: { transition: { delayChildren: stagger(0.06) } },
};

const row: Variants = {
  rest: { height: 8, paddingTop: 0, paddingBottom: 0 },
  hover: { height: "auto", paddingTop: 0.5, paddingBottom: 0.5 },
};

const label: Variants = {
  rest: { opacity: 0, y: 8, filter: "blur(8px)" },
  hover: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const rule: Variants = {
  rest: { opacity: 1, filter: "blur(0px)" },
  hover: { opacity: 0, filter: "blur(8px)" },
};

export default function InteractiveIndex() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-10 bg-white px-6 py-16 text-black">
      <h1 className="text-xl font-medium">Interactive Index</h1>
      <motion.ul
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={list}
        className="relative isolate -my-4 flex w-max flex-col items-start py-4 text-[14px] after:absolute after:inset-y-0 after:left-0 after:-z-10 after:w-[200%]"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={row}
            transition={transition}
            className="relative flex min-w-3 flex-col justify-center"
          >
            <motion.a
              href={`#${item.toLowerCase()}`}
              variants={label}
              transition={transition}
              className="block cursor-pointer font-light whitespace-nowrap text-gray-400 transition-[font-weight,color] duration-100 ease-[cubic-bezier(0.2,0,0,1)] hover:font-medium hover:text-gray-700 focus-visible:font-medium focus-visible:text-gray-700"
            >
              {item}
            </motion.a>
            <motion.span
              aria-hidden
              variants={rule}
              transition={transition}
              className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-gray-500"
            />
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
