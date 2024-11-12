import Section from "@/Components/Section";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    document.documentElement.className = theme
  
  }, [theme])
  
  return (
    <div className={`${theme}`}>
      <Head>
        <title>Scrolling White and Dark Mode Transitions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section theme="light" setTheme={setTheme}>
        {" "}
        <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                A Junior Developer{"'"}s Learning Path
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Coding Challenges
                </span>{" "}
                &quot;Every page load, every bug fix brings new learning
                moments—it
                {"'"}s what makes coding so fascinating!&quot;
              </p>
            </div>
            <div>
              <div className="relative w-full h-[40rem]">
                <Image
                  src="/assets/juniorLove-removebg.png"
                  alt="Laptop Light Color"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section theme="dark" setTheme={setTheme}>
        <div className="flex-1 flex  flex-col justify-center lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                Embracing Growth in Coding
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Creative Problem Solving
                </span>{" "}
                &quot;Embracing each new problem with fresh solutions is
                exhilarating for a Junior Dev like me!&quot;
              </p>
            </div>
            <div>
              <div className="relative w-full h-[40rem]">
                <Image
                  src="/assets/j1-removebg.png"
                  alt="Laptop Dark Color"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section theme="light" setTheme={setTheme}>
        {" "}
        <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                Insights from My Coding Journey
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Supportive Community
                </span>{" "}
                &quot;The joy of connecting with an amazing developer community
                to tackle challenges together is incredibly impactful in
                coding.&quot;
              </p>
            </div>
            <div>
              <div className="relative w-full h-[40rem]">
                <Image
                  src="/assets/j3-removebg.png"
                  alt="Laptop Light Color"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section theme="dark" setTheme={setTheme}>
        <div className="flex-1 flex  flex-col justify-center lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                Why I Love the Challenge of Coding
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Learning Every Day
                </span>{" "}
                &quot;With coding, there{"'"}s always something new to learn,
                making it far from monotonous!&quot;
              </p>
            </div>
            <div>
              <div className="relative w-full h-[40rem]">
                <Image
                  src="/assets/j2-removebg.png"
                  alt="Laptop Dark Color"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section theme="light" setTheme={setTheme}>
        <div className="flex flex-col items-center">
          {/* Text container */}
          <div className="w-full text-center mb-6">
            <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
              As a Junior Developer, I{"'"}m excited to share the joy of
              learning opportunities with everyone!
            </h1>
          </div>

          {/* Image container */}
          <div className="relative w-full h-[40rem]">
            <Image
              className="pb-4"
              src="/assets/j6-removebg.png"
              alt="Laptop Dark Color"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
