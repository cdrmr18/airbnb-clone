'use client';

import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassCircleIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, Bars3Icon } from "@heroicons/react/24/solid"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      <div className="flex items-center rounded-full py-2 border-2 md:shadow-sm">
        <input
          value={searchInput}
          type="text"
          placeholder="Search"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <MagnifyingGlassCircleIcon className="hidden h-8 text-red-400 cursor-pointer md:inline-flex md:mx-2" />
      </div>

      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
          />
        </div>
      )}
    </header>
  );
}
