"use client"
import React, { useEffect, useState } from 'react'

export default function Greetings() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateTimeAndDate = () => {
            const now = new Date();

            // Time: 08:29PM
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // 0 should be 12
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}${ampm}`;

            // Date: Saturday, 25th March, 2025
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December',
            ];
            const day = days[now.getDay()];
            const dateNum = now.getDate();
            const month = months[now.getMonth()];
            const year = now.getFullYear();

            const getOrdinalSuffix = (n) => {
                if (n > 3 && n < 21) return 'th';
                switch (n % 10) {
                    case 1: return 'st';
                    case 2: return 'nd';
                    case 3: return 'rd';
                    default: return 'th';
                }
            };

            const formattedDate = `${day}, ${dateNum}${getOrdinalSuffix(dateNum)} ${month}, ${year}`;

            setTime(formattedTime);
            setDate(formattedDate);
        };

        updateTimeAndDate();
        const interval = setInterval(updateTimeAndDate, 1000); // updates every second

        return () => clearInterval(interval); // cleanup on unmount
    }, []);
    return (
        <div className='text-white uppercase flex justify-between'>
            <div>
                <h1 className='text-xl'>Welcome, <span className='text-[#FC9E33]'>Mr Showaib bin Nasir</span></h1>
                <h1 className='text-[13px]'>Wishing for a great dat and good sell as well</h1>
            </div>
            <div className=' text-right '>
                <h1 className='text-xl'>{time}</h1>
                <h1 className='text-[13px]'>{date}</h1>
            </div>
        </div>
    )
}
