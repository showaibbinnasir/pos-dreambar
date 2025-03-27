import Link from 'next/link'
import React from 'react'
import home from "@/public/home.png"
import orders from "@/public/Orders.png"
import tables from "@/public/Tables.png"
import menu from "@/public/Menu.png"
import Image from 'next/image'
export default function BottomNavigation() {
  return (
    <div>
      <div className='bg-[#2D2D2D] fixed bottom-0 w-full py-[40px] rounded-t-[50px] uppercase text-white drop-shadow-[0_-5px_10px_rgba(0,0,0,0.3)] text-xl'>
        <div className='flex justify-around'>
          <Link className='' href='/'><div className='flex items-center gap-2'>
             <Image src={home} alt='home icon' />
             <h1>Home</h1>
            </div></Link>
          <Link href='/'><div className='flex items-center gap-2'>
             <Image src={orders} alt='home icon' />
             <h1>Orders</h1>
            </div></Link>
          <Link href='/'><div className='flex items-center gap-2'>
             <Image src={tables} alt='home icon' />
             <h1>Tables</h1>
            </div></Link>
          <Link href='/'><div className='flex items-center gap-2'>
             <Image src={menu} alt='home icon' />
             <h1>Menu</h1>
            </div></Link>
          
        </div>

      </div>
    </div>
  )
}
