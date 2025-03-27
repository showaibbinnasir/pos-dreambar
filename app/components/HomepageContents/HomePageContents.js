import React from 'react'
import Greetings from '../Greetings/Greetings'
import DayOverView from '../DayOverview/DayOverView'
import BookedListHome from '../BookedListHome/BookedListHome'
import TopStates from '../TopStates/TopStates'
import BestItems from '../BestItems/BestItems'

export default function HomePageContents() {
  return (
    <div className=' h-[75vh] rounded-[10px] overflow-hidden flex gap-8'>
        <div className=' flex-[3]'>
               <Greetings></Greetings>
               <DayOverView></DayOverView>
               <BookedListHome></BookedListHome>
        </div>
        <div className='flex-[2] scrollbar-hide overflow-hidden h-[75vh] uppercase'>
            <h1 className='text-white text-xl mb-5'>Sales Overview</h1>
            <TopStates/>
            <h1 className='text-white text-xl my-5'>Best sold items</h1>
            <BestItems/>
            
        </div>
    </div>
  )
}
