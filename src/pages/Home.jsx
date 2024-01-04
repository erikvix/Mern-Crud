import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import Button from "@/components/Button";
import Input from "@/components/Input";
export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl p-4 h-screen w-screen flex justify-center items-center">
      <section className="max-w-5xl">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          CRUD
        </h1>
        <h1 className="text-2xl text-slate-200 font-medium">MERN-Stack</h1>
        <div className="flex justify-center my-4 items-center gap-4">
          <FaReact size={32} color="#61dbfb" />
          <FaNodeJs size={32} color="#61dbfb" />
          <SiExpress size={32} color="#61dbfb" />
          <BiLogoMongodb size={32} color="#61dbfb" />
        </div>
        <p className="mt-6 text-base text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Web application powered by MERN-stack, enabling users to effortlessly
          perform CRUD operations—create, read, update, and delete—managing and
          manipulating data with ease.
        </p>
        <div className="flex flex-col md:items-center mt-4 gap-4">
          <Button pathName="/" className="text-base md:px-8 py-2">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
