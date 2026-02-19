'use client';
import React, { useEffect, useState } from 'react';

import { addDays, set, startOfDay, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export default function Footer() {
  // const [date, setDate] = React.useState<Date>(toZonedTime(startOfDay(new Date()), 'Asia/Tokyo'));
  const [date, setDate] = useState<Date | any>();
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => setDate(format(new Date(), 'yyyy/MM/dd')), []);

  return (
    <footer className="flex justify-between text-sm">
      <span className="text-text-headline">v-0.0.1</span>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="bg-surface-active border-border-active h-2.5 w-2.5 rounded-full border" />
          <div className="border-border-active h-2.5 w-2.5 rounded-full border" />
        </div>
        <p className="text-text-body">{date}</p>
      </div>
    </footer>
  );
}
