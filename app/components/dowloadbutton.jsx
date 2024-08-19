"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import PageTransition from './PageTransition'

export const DownloadButton = () => {
  return (
    <PageTransition>
      <a href="https://drive.google.com/file/d/11H9Vv7GxFXX2UgaSJH8m0uynrkA5lsxe/view?usp=sharing" download target="_blank" rel="noopener noreferrer" className="flex items-center bg-fourth lg:w-full xl:w-48 p-2 mt-3 rounded-lg shadow-xl"> 
            <span className='mx-auto '>Download Resume</span>
            <FontAwesomeIcon icon={faDownload} className='text-secondary'/>
      </a>
    </PageTransition>
  )
}
