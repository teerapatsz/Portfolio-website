"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'

const StairEffect = () => {
  const pathName = usePathname()
  return (
    <AnimatePresence mode='wait'>
      <div key={pathName}>
        <div className='w-screen h-screen fixed top-0 left-0 right-0
        pointer-events-none z-40 flex'>
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default StairEffect