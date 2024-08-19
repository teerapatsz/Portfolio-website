import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa";

const contacts =[
  {
    fieldName: "Phone Number",
    fieldVal: "(+66)097-037-8624",
    fieldIcon: <FaPhoneVolume />,
  },
  {
    fieldName: "Email",
    fieldVal: "team14457@gmail.com",
    fieldIcon: <MdEmail />,
  },
  {
    fieldName: "Facebook",
    fieldVal: "Teerapat Sansalee",
    fieldIcon: <FaFacebookSquare />,
  },
  {
    fieldName: "Line",
    fieldVal: "0970378624",
    fieldIcon: <FaLine />,
  },
]

export default function ContactPage() {
  return (
    <div className='w-full h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-60'>
      <div className='pt-8'>
        <ul className='grid grid-cols-2 gap-8'>
          {contacts.map((contact, index) => {
            return (
              <li key={index} className='flex flex-col justify-center items-center rounded'>
                <div className='bg-third w-full h-full p-5 rounded-lg flex flex-col justify-center items-center'>
                  <span className='text-9xl mb-2 text-fourth'>{contact.fieldIcon}</span>
                  <h2 className='text-secondary/60'>{contact.fieldName}</h2>
                </div>
                <div className='w-[98%] self-start h-[10vh] rounded-lg bg-fourth flex justify-center items-end -mt-7 -z-20 -ml-2'>
                  <p className='pb-1 italic text-secondary'>{contact.fieldVal}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
