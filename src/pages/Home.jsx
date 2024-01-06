import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="h-screen flex items-center overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
      <section className="max-w-xl mx-auto text-center relative">
        <h1 className=" font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center  text-slate-300">
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
          <Button className="text-base md:px-8 py-2 bg-[#61dbfb] px-4 rounded-3xl shadow-md ease-in-out duration-300 hover:opacity-80">
            <Link to={"/"} className="text-slate-800 font-semibold">
              Get Started
            </Link>
          </Button>
        </div>
      </section>
      {/* <div
        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div> */}
    </div>
  );
}
