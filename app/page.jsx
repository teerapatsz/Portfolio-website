'use client'
import Typewriter from 'typewriter-effect';
import { OpenContext } from './opencontext';
import { useContext } from 'react';
import Photo  from './components/Photo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { DownloadButton } from './components/dowloadbutton'

export default function Home() {
  const {open ,setOpen } = useContext(OpenContext)
  return (
    <div className='h-full w-full flex flex-col xl:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* Photo */}
      <div className='xl:mx-8'>
        <Photo />
      </div>
      {/* About Me */}
      <div className='h-full w-full flex flex-col justify-center relative'>
        <h1 className='h-[40%] text-fourth text-center font-extrabold text-4xl xl:text-6xl '>
          { !open &&
            <Typewriter
            options={{
              strings: ['Welcome To My Portfolio Website','My Name Is Teerapat Sansalee', 'I Am Web Developer'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
            />
          }
        </h1>
        <p className='xl:text-xl'>Welcome to my portfolio website my name is Teerapat Sansalee I'm studying at Kasetsart university sriracha campus. I'm studying in Computer Engineering and now I'm looking for an internship.</p>
        <div className=''>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

