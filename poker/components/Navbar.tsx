"use client";
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/korpipa.json";
import {Navbar} from "flowbite-react";
import {Collapse} from 'flowbite';

const $targetEl = document.getElementById('targetEl');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl = document.getElementById('triggerEl');

// optional options with default values and callback functions
const options = {
  onCollapse: () => {
    console.log('element has been collapsed');
  },
  onExpand: () => {
    console.log('element has been expanded');
  },
  onToggle: () => {
    console.log('element has been toggled');
  },
};

const instanceOptions = {
  id: 'targetEl',
  override: true
};

const collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions);

const NavbarTop = () => {
  return (
    <div className="shadow-lg shadow-[gray]/[0.3] border-b-[0.5px] border-[gray]">
      <div className="container mx-auto xl:max-w-[1180px] text-white flex items-center justify-between py-[15px]">
        <Link href="/">
          <div className="h-[70px] flex items-center cursor-pointer">
            <Lottie
              animationData={animationData}
              height={70}
              width={70}
              className="lottie"
            />
            <p className="font-bold uppercase text-[20px] hover:text-purple-900">
              Blogs
            </p>
          </div>
        </Link>


        <nav className="">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul
                className="font-medium flex flex-col p-4 md:p-0 mt-4 text-white md:flex-row md:space-x-8 rtl:space-x-reverse">
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
                  <a href="#"
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
