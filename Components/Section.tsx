import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { ReactNode, useRef, useEffect } from "react";

const Section: React.FC<{
  theme: string;
  setTheme: (value: string) => void;
  children: ReactNode;
}> = ({ theme, setTheme, children }) => {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value: number) => {
    // Switch theme only if it differs from the current one
    if (value > 0 && value < 1 && theme !== "dark") {
      setTheme("dark");
    } else if (value <= 0 && theme !== "light") {
      setTheme("light");
    }
  });

  useEffect(() => {
    // Set the initial theme when the component mounts
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <section
      className="bg-white dark:bg-black p-8 min-h-screen flex flex-col"
      ref={container}
    >
      {children}
    </section>
  );
};

export default Section;
