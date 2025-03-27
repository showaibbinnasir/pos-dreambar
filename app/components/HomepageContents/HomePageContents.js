import React from 'react'
import Greetings from '../Greetings/Greetings'
import DayOverView from '../DayOverview/DayOverView'
import BookedListHome from '../BookedListHome/BookedListHome'

export default function HomePageContents() {
  return (
    <div className=' h-[75vh] rounded-[10px] overflow-hidden flex gap-8'>
        <div className=' flex-[3]'>
               <Greetings></Greetings>
               <DayOverView></DayOverView>
               <BookedListHome></BookedListHome>
        </div>
        <div className='flex-[2] uppercase'>
            <h1 className='text-white text-xl'>Sales Overview</h1>
        </div>
    </div>
  )
}
