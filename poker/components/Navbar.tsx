"use client";
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/korpipa.json"
import {BiSearch} from "react-icons/bi"

const Navbar = () => {
    return (
        <div className='shadow-lg shadow-[gray]/[0.3] border-b-[0.5px] border-[gray]'>
            <div className='container mx-auto xl:max-w-[1180px] text-white flex items-center justify-between py-[15px]'>
                <Link href="/">
                    <div className='h-[50px] flex items-center cursor-pointer'>
                        <Lottie
                            animationData={animationData}
                            height={70}
                            width={70}
                            className="lottie"
                        />
                        <p className='font-bold text-[17px] hover:text-red-700'>Palace Poker</p>
                    </div>
                </Link>
                <nav className="flex items-center gap-[35px] cursor-pointer list-none">
                    <li className="hover:border-b-[0.5px]">Főoldal</li>
                    <li className="hover:border-b-[0.5px]">Versenyek</li>
                    <li className="hover:border-b-[0.5px]">Rólunk</li>
                    <li className="hover:border-b-[0.5px]">Kapcsolat</li>
                </nav>
                <div>
                    <div className="flex items-center max-w-[168px] bg-black pr-1.5 py-1 rounded">
                        <input className="w-full border-none outline-none bg-transparent pl-[10px] text-white text-[14px] placeholder:opacity-60" type="text" placeholder="Keresés..."/>
                        <BiSearch className="cursor-pointer"/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar
