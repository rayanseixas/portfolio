'use client'
import { addDays, set, startOfDay, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import React, { useEffect, useState } from "react";


export default function Footer(){
    // const [date, setDate] = React.useState<Date>(toZonedTime(startOfDay(new Date()), 'Asia/Tokyo'));
    const [date, setDate]= useState<Date|any>();
    const[inputValue, setInputValue]= useState<string>('');

    useEffect(() => setDate( format(new Date(), 'yyyy/MM/dd')), []);

    return(
        <footer className="flex justify-between text-sm">
            <span className="text-text-headline">v-0.0.1</span>
            <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                    <div className="border bg-surface-active rounded-full w-2.5 h-2.5 border-border-active"/>
                    <div className="border rounded-full w-2.5 h-2.5 border-border-active"/>
                </div>
                <p className="text-text-body">{date}</p>
            </div>
        </footer>
    )
}