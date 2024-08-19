"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import SlideButton from "../components/slidebutton";
import Image from 'next/image'
import { FaFilePdf } from "react-icons/fa";


const projects = [
  { id: "01", 
    title: "Smart Plug",
    description:"This project involves working with embedded systems, with the goal of controlling a plug (turning it on and off) via a mobile application and viewing the plug's details.",
    github:"https://github.com/teerapatsz/smart-plug",
    image: "/smart-plug-project.png",
  },
  { id: "02", 
    title: "AI predicts car brands" ,
    description:"This project involves AI prediction, where we have collected images of cars from brands such as Benz, Honda, Isuzu, Mazda, MG, Mitsubishi, Nissan, and Toyota.",
    github:"https://drive.google.com/file/d/1lmOh9N2bt72WBcRqT3BcOENaF4jUQvBw/view?usp=drive_link",
    image: "/CarDetection.png",
  },
  { id: "03", 
    title: "POS System" ,
    description:"This project involves a POS (Point of Sale) system where users scan identity cards for making purchases in stores. The system includes a point redemption feature and identity verification using OTP (One-Time Password).",
    github:"https://github.com/SupachockT/Project_Unravield_05",
    image: "/pointchangepage.png",
  },
];

export default function WorkPage() {
  const [project, setProject] = useState(projects[0]);

  const handleSlide = (swiper) => {
    const cIndex = swiper.activeIndex;
    setProject(projects[cIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center"
    >
      <div className="w-full h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[50%] flex flex-col order-2 xl:order-none gap-[20px] mb-12">
            <div className="text-8xl leading-none text-white font-extrabold text-outline bg-transparent">
              {project.id}
            </div>
            <h2 className="text-5xl font-bold leading-none group-hover:text-white transition-all duration-500 capitalize">
              {project.title}
            </h2>
            <p className="text-secondary/60">
              {project.description}
            </p>
            <div className="border border-fourth"></div>
            <Link href={project.github} target="_blank">
              <div className="w-[70px] h-[70px] bg-fourth rounded-full flex justify-center items-center">
                {project.id != "02"?<FaGithub size={45} color="#283618" />:<FaFilePdf size={45} color="#283618" />}
              </div>
            </Link>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlide}
              className="xl:h-[520px] "
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative flex justify-center items-center bg-black">
                      <div className="w-full h-full relative">
                        <Image 
                          src={project.image}
                          fill
                          className="object-fill"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SlideButton />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
