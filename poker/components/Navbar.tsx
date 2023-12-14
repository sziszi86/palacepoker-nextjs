"use client";
import React, {useEffect} from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/korpipa.json";
import facebookIcon from "@/public/assets/facebook.svg";

import {Collapse} from 'flowbite';
import Image from "next/image";

const NavbarTop = () => {
    useEffect(() => {

        const $targetEl = document.getElementById('targetEl');
        const $triggerEl = document.getElementById('triggerEl');

        const options = {
            onCollapse: () => {
            },
            onExpand: () => {

            },
            onToggle: () => {

            },
        };

        const instanceOptions = {
            id: 'targetEl',
            override: true
        };

        const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);
        return () => {
        };
    }, []);
    return (
        <div className="shadow-lg shadow-[gray]/[0.3] border-b-[0.5px] border-[gray] transition-all duration-1000">
            <div
                className="container mx-auto xl:max-w-[1180px] text-white flex items-center justify-between py-[8px] px-[20px]">
                <span className="text-gray-400 text-[14px] w-6/12">9700 Szombathely Semmelweis u. 2.</span>
                <div className="flex w-6/12 sm:justify-between gap-x-3 sm:gap-x-0">
                    <span className="text-white text-[16px] font-bold">+36 30 971 5832</span>
                    <Link href="https://www.facebook.com/PalacePokerSzombathely">
                        <Image src={facebookIcon} className="w-[36px]" alt="Palace Poker facebook oldala"/>
                    </Link>
                </div>
            </div>
            <div
                className="container mx-auto xl:max-w-[1180px] text-white flex items-center justify-between py-[15px] transition-all">
                <Link href="/">
                    <div className="h-[70px] flex items-center cursor-pointer">
                        <Lottie
                            animationData={animationData}
                            height={70}
                            width={70}
                            className="lottie"
                        />
                        <p className="font-bold uppercase text-[20px] hover:text-purple-900">
                            Palace Poker Szombathely
                        </p>
                    </div>
                </Link>


                <nav className="transition-all duration-1000">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <button data-collapse-toggle="navbar-default" type="button"
                                className=" p-2 w-10 h-10 flex w-full justify-end text-sm text-gray-500 rounded-lg md:hidden focus:outline-none transition-all duration-1000"
                                aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto transition-all duration-1000"
                             id="navbar-default">
                            <ul
                                className="font-medium flex flex-col p-0 md:p-0 mt-1 text-white md:flex-row md:space-x-8 rtl:space-x-reverse">
                                <li>
                                    <a href="/"
                                       className="block py-2 px-3  md:p-0 text-white"
                                       aria-current="page">Főoldal</a>
                                </li>
                                <li>
                                    <a href="/versenyek/"
                                       className="block py-2 px-3  md:p-0 text-white">Versenyek</a>
                                </li>
                                <li>
                                    <a href="/rolunk/"
                                       className="block py-2 px-3  md:p-0 text-white"
                                       aria-current="page">Rólunk</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 px-3  md:p-0 text-white"
                                       aria-current="page">Kapcsolat</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default NavbarTop;
