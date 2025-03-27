import { Button } from 'keep-react'
import React from 'react'

export default function BookedListHome() {

    const bookedTable = [
        {
            name: "Sajib Ahmed",
            phone: "01632029169",
            table: "07"
        },
        {
            name: "Yasin Arafat",
            phone: "019952254401",
            table: "05"
        },
        {
            name: "Emon Al Rafi",
            phone: "0176251420",
            table: "04"
        },
        {
            name: "Ariful Islam",
            phone: "01828714910",
            table: "08"
        },
        {
            name: "Mokaddim Hossain Adil",
            phone: "0162516140",
            table: "10"
        },
        {
            name: "Eyamin Eram",
            phone: "01886251420",
            table: "09"
        },
        {
            name: "Samad Rifat",
            phone: "01632029169",
            table: "01"
        },
        {
            name: "Delwar Hosen",
            phone: "01632029169",
            table: "02"
        },
        {
            name: "Pranto Das",
            phone: "01632029169",
            table: "03"
        }
    ]
    return (
        <div className='text-white overflow-scroll scrollbar-hide bg-[#1E1E1E] p-5 rounded-[10px] h-[52vh]'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-xl'>Booked Tables</h1>
                    <h1 className='text-xl text-blue-700'>View all</h1>
                </div>
                <div className='flex flex-col gap-2 mt-5'>
                    {
                        bookedTable?.map((table, i) => <div key={i}>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-[70px] h-[70px] bg-[#FC9E33] flex items-center justify-center rounded-[10px] '>
                                        <h1 className='text-2xl'>{table.name.substring(0, 2)}</h1>
                                    </div>
                                    <div className=' max-w-[100px]'>
                                        {
                                            table.name.length > 15 ? 
                                            <h1 title={table.name} className='text-xl'>{table.name.substring(0,15)}...</h1> : 
                                            <h1  title={table.name} className='text-xl'>{table.name}</h1>
                                        }
                                        <h1>{table.phone}</h1>
                                    </div>
                                </div>
                                <div className='border px-3 py-1 hover:bg-[#FC9E33] hover:rounded-[10px] border-[#FC9E33] rounded-[10px]'>
                                    <h1>Table {table.table}</h1>
                                </div>
                                <div>
                                    <Button className='bg-[#FC9E33] hover:bg-[#186925]'>Finish</Button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
