"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger} from '../components/ui/tabs'
import {FaHtml5, FaReact, FaPython, FaJava} from 'react-icons/fa'
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiCplusplus } from "react-icons/si";

const education = {
  title:"Education",
  description:"This section is about the institutions where I studied.",
  info:[
    {
      institution: "Nawaminthrachinuthit suankularb wittayalai samutprakarn school",
      duration: "2016-2020",
      degree: "High School Certificate",
    },
    {
      institution: "Kasetsart university sriracha campus ",
      duration: "2020-Present",
      degree: "Bachelor of Computer Engineering",
    },
  ]
}

const skills = {
  title:"Skills",
  description:"This is my programming language that I was using in my project.",
  info:[
    {
      skill: "JavaScript",
      icon: <FaHtml5 />,
    },
    {
      skill: "React",
      icon: <FaReact />,
    },
    {
      skill: "NextJs",
      icon: <RiNextjsFill />,
    },
    {
      skill: "SQL",
      icon: <SiMysql />,
    },
    {
      skill: "Python",
      icon: <FaPython />,
    },
    {
      skill: "C++",
      icon: <SiCplusplus />,
    },
    {
      skill: "Java",
      icon: <FaJava />,
    },
  ]
}

const aboutme = {
  title:"About me",
  description:"This section mentions my personal information",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Teerapat Sansalee",
    },
    {
      fieldName: "University",
      fieldValue: "Kasetsart university sriracha campus",
    },
    {
      fieldName: "Bacherlor of",
      fieldValue: "Computer Engineering",
    },
    {
      fieldName: "Address",
      fieldValue: "153/162 Moo 5 Praksa Meuans Samutprakarn SamutPrakarn 10280",
    },
    {
      fieldName: "GPAX",
      fieldValue: "3.14 (6 term)",
    },
    {
      fieldName: "KU-EXITE (Kasetsart English Test)",
      fieldValue: "B2",
    },
  ]
}


export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className='min-h-full flex items-end justify-center py-12 xl:py-0 '
    >
      <div className='w-full h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <Tabs 
          defaultValue='education'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                <h3 className='text-4xl font-bold text-fourth'>{education.title}</h3>
                <p>{education.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                  {education.info.map((item, index) => {
                    return(
                      <li key={index} className='bg-third p-5 flex flex-col justify-center items-center xl:items-start gap-1 rounded-xl'>
                        <span className='text-fourth'>{item.duration}</span>
                        <h3 className='max-w-[260px] min-h-[60px]'>{item.institution}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] bg-fourth rounded-full'></span>
                          <p className='text-sm text-primary'>{item.degree}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold text-fourth'>{skills.title}</h3>
                <p>{skills.description}</p>
                <ul className='grid grid-cols-2 xl:grid-cols-4 gap-3 text-center'>
                  {skills.info.map((item, index) =>{
                    return(
                      <li key={index} className='p-5 bg-third rounded-xl flex flex-col justify-center items-center'>
                        <p className='text-primary'>{item.skill}</p>
                        <div className='text-6xl text-secondary group-hover:text-green transition-all duration-300'>{item.icon}</div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value='aboutme' className='w-full '>
              <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                <h3 className='text-4xl font-bold text-fourth'>{aboutme.title}</h3>
                <p className='max-w-[600px] mx-auto xl:mx-0'>{aboutme.description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {aboutme.info.map((item, index) =>{
                      return(
                        <li className=' flex justify-center items-center xl:justify-start gap-4' key={index}>
                          <span className='text-secondary/60'>{item.fieldName}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
