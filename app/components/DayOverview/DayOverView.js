import React from 'react'
import complete from "@/public/complete.png"
import Image from 'next/image'
export default function DayOverView() {
  return (
    <div className='text-white uppercase bg-[#1E1E1E] p-5 rounded-[10px] flex justify-between px-5 my-5'>
      <div className='flex gap-5 items-center'>
        <div className='bg-[#186925] h-[100px] flex justify-center items-center w-[100px] p-5 rounded-[10px]'>
          <h1 className='text-4xl'>16</h1>
        </div>
        <div className='flex flex-col items-center'>
          <Image src={complete} alt='complete' />
          <h1 className='text-xl'>Completed</h1>
          <h1><span className='text-[#186925]'>2.6%</span> more than previous day</h1>
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='bg-[#FC9E33] h-[100px] flex justify-center items-center w-[100px] p-5 rounded-[10px]'>
          <h1 className='text-4xl'>16</h1>
        </div>
        <div className='flex flex-col items-center'>
          <Image src={complete} alt='complete' />
          <h1 className='text-xl'>In progess</h1>
          <h1><span className='text-[#186925]'>2.6%</span> more than previous day</h1>
        </div>
      </div>
    </div>
  )
}
