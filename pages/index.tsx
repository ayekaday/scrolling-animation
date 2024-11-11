import Section from "@/Components/Section";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`${theme}`}>
      <Head>
        <title>Scrolling White and Dark Mode Transitions</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <Section theme="light" setTheme={setTheme}>
        {" "}
        <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                What's in Next.js? Everything you need to build great products
                on the web.
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Next.js Boilerplate
                </span>{" "}
                Vercel is a frontend cloud from the creators of Next.js, making
                it easy to get started with Next.js quickly. Jumpstart your
                Next.js development with pre-built solutions from Vercel and our
                community.
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
                What's in Next.js? Everything you need to build great products
                on the web.
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Next.js Boilerplate
                </span>{" "}
                Vercel is a frontend cloud from the creators of Next.js, making
                it easy to get started with Next.js quickly. Jumpstart your
                Next.js development with pre-built solutions from Vercel and our
                community.
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
                What's in Next.js? Everything you need to build great products
                on the web.
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Next.js Boilerplate
                </span>{" "}
                Vercel is a frontend cloud from the creators of Next.js, making
                it easy to get started with Next.js quickly. Jumpstart your
                Next.js development with pre-built solutions from Vercel and our
                community.
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
                What's in Next.js? Everything you need to build great products
                on the web.
              </h1>
              <p className="text-lg font-semibold text-zinc-400">
                <span className="text-black dark:text-white">
                  Next.js Boilerplate
                </span>{" "}
                Vercel is a frontend cloud from the creators of Next.js, making
                it easy to get started with Next.js quickly. Jumpstart your
                Next.js development with pre-built solutions from Vercel and our
                community.
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
              What's in Next.js? Everything you need to build great products on
              the web.
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
