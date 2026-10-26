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
  rest: { height: 8 },
  hover: { height: "auto" },
};

const label: Variants = {
  rest: { opacity: 0, filter: "blur(8px)" },
  hover: { opacity: 1, filter: "blur(0px)" },
};

const rule: Variants = {
  rest: { opacity: 1, filter: "blur(0px)" },
  hover: { opacity: 0, filter: "blur(8px)" },
};

export default function InteractiveIndex() {
  return (
    <main className="flex min-h-screen flex-col items-start bg-white px-6 text-black">
      <h1>Interactive Index</h1>
      <motion.ul
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={list}
        className="-my-4 flex w-max flex-col items-start py-4 text-[14px]"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={row}
            transition={transition}
            className="relative min-w-3 overflow-hidden"
          >
            <motion.a
              href={`#${item.toLowerCase()}`}
              variants={label}
              transition={transition}
              className="block cursor-pointer font-light whitespace-nowrap transition-[font-weight] duration-100 ease-[cubic-bezier(0.2,0,0,1)] hover:font-medium focus-visible:font-medium"
            >
              {item}
            </motion.a>
            <motion.span
              aria-hidden
              variants={rule}
              transition={transition}
              className="absolute top-1 left-0 h-px w-3 -translate-y-1/2 bg-gray-500"
            />
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
