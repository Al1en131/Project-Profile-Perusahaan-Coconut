"use client";

import Image from 'next/image';
import { useState } from "react";

export default function Gallery() {
    const [search, setSearch] = useState('');
    return (
        <div className=" ">
            {/* Hero */}
            <div className="text-center h-[400px] max-lg:h-[263px] mt-16 relative">
                <Image
                    src="/image/hero-gallery.png"
                    alt=""
                    fill
                    className=" w-full object-cover"
                />
                <div className=" absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <p className=" font-semibold text-3xl text-white">
                        Gallery
                    </p>
                    <svg width="288" height="2" className="mt-4" viewBox="0 0 288 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="288" y2="1" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
            </div>
            {/* List Galeri */}
            <div className="px-[120px] max-lg:px-8">
                <div className="justify-between max-lg:justify-center max-lg:flex-col max-lg:w-full max-lg:space-y-5 items-center flex pt-14 max-lg:pt-10 pb-10">
                    <div className="flex items-center border w-[392px] max-lg:w-full h-[44px] border-gray-400 bg-white rounded-lg">
                        <div className="w-full">
                            <input
                                type="search"
                                className="w-full h-full px-4 py-1 text-gray-80 max-lg:h-[154.43px]0 text-xl font-medium rounded-lg focus:outline-none"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className={`flex items-center justify-center w-[44px] h-[44px] text-white rounded-r-lg ${search.length > 0 ? "bg-[#73d234]" : "bg-[#3F9D00] cursor-not-allowed"
                                    }`}
                                disabled={search.length === 0}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center max-lg:w-full max-lg:overflow-x-hidden">
                        <svg width="24" height="22" viewBox="0 0 24 22" className="flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3H23M10 3C10 3.53043 9.78929 4.03914 9.41421 4.41421C9.03914 4.78929 8.53043 5 8 5C7.46957 5 6.96086 4.78929 6.58579 4.41421C6.21071 4.03914 6 3.53043 6 3M10 3C10 2.46957 9.78929 1.96086 9.41421 1.58579C9.03914 1.21071 8.53043 1 8 1C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3M6 3H1M10 19H23M10 19C10 19.5304 9.78929 20.0391 9.41421 20.4142C9.03914 20.7893 8.53043 21 8 21C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19M10 19C10 18.4696 9.78929 17.9609 9.41421 17.5858C9.03914 17.2107 8.53043 17 8 17C7.46957 17 6.96086 17.2107 6.58579 17.5858C6.21071 17.9609 6 18.4696 6 19M6 19H1M18 11H23M18 11C18 11.5304 17.7893 12.0391 17.4142 12.4142C17.0391 12.7893 16.5304 13 16 13C15.4696 13 14.9609 12.7893 14.5858 12.4142C14.2107 12.0391 14 11.5304 14 11M18 11C18 10.4696 17.7893 9.96086 17.4142 9.58579C17.0391 9.21071 16.5304 9 16 9C15.4696 9 14.9609 9.21071 14.5858 9.58579C14.2107 9.96086 14 10.4696 14 11M14 11H1" stroke="#3F9D00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <button
                            type="button"
                            className="text-white bg-[#3F9D00] border border-[#3F9D00] focus:outline-none  focus:bg-[#3F9D00] focus:text-white font-semibold rounded-full text-base px-4 py-1 text-center"
                        >
                            All
                        </button>
                        <button
                            type="button"
                            className="text-black bg-transparent border border-[#3F9D00] focus:outline-none  focus:bg-[#3F9D00] focus:text-white font-semibold rounded-full text-base px-4 py-1 text-center"
                        >
                            Leadership
                        </button>
                        <button
                            type="button"
                            className="text-black bg-transparent border border-[#3F9D00] focus:outline-none  focus:bg-[#3F9D00] focus:text-white font-semibold rounded-full text-base px-4 py-1 text-center"
                        >
                            Production
                        </button>
                        <button
                            type="button"
                            className="text-black bg-transparent border border-[#3F9D00] focus:outline-none  focus:bg-[#3F9D00] focus:text-white font-semibold rounded-full text-base px-4 py-1 text-center"
                        >
                            Distribution
                        </button>
                    </div>
                </div>
                <div className="mb-14 w-full z-50">
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:col-span-2 max-lg:gap-4 col-span-3 gap-10">
                        <div className="bg-white w-full max-w-lg mx-auto z-50 rounded overflow-hidden">
                            <Image
                                src="/image/card-gallery.png"
                                width={392}
                                height={322}
                                layout="responsive"
                                className="object-cover max-lg:hidden w-full"
                                alt=""
                            />
                            <Image
                                src="/image/card-gallery.png"
                                width={188}
                                height={154.43}
                                layout="responsive"
                                className="object-cover max-lg:block hidden w-full"
                                alt=""
                            />
                            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
                                <span className=" text-[#5C5C5C] font-semibold text-xl max-lg:text-[10px] max-lg:leading-none font-poppins">
                                    Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman
                                </span>
                                <div className="flex gap-2 mt-6 items-center">
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full max-w-lg mx-auto z-50 rounded overflow-hidden">
                            <Image
                                src="/image/card-gallery.png"
                                width={392}
                                height={322}
                                layout="responsive"
                                className="object-cover max-lg:hidden w-full"
                                alt=""
                            />
                            <Image
                                src="/image/card-gallery.png"
                                width={188}
                                height={154.43}
                                layout="responsive"
                                className="object-cover max-lg:block hidden w-full"
                                alt=""
                            />
                            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
                                <span className=" text-[#5C5C5C] font-semibold text-xl max-lg:text-[10px] font-poppins max-lg:leading-none">
                                    Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman
                                </span>
                                <div className="flex gap-2 mt-6 items-center">
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full max-w-lg mx-auto z-50 rounded overflow-hidden">
                            <Image
                                src="/image/card-gallery.png"
                                width={392}
                                height={322}
                                layout="responsive"
                                className="object-cover max-lg:hidden w-full"
                                alt=""
                            />
                            <Image
                                src="/image/card-gallery.png"
                                width={188}
                                height={154.43}
                                layout="responsive"
                                className="object-cover max-lg:block hidden w-full"
                                alt=""
                            />
                            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
                                <span className=" text-[#5C5C5C] font-semibold text-xl max-lg:text-[10px] font-poppins max-lg:leading-none">
                                    Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman
                                </span>
                                <div className="flex gap-2 mt-6 items-center">
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full max-w-lg mx-auto z-50 rounded overflow-hidden">
                            <Image
                                src="/image/card-gallery.png"
                                width={392}
                                height={322}
                                layout="responsive"
                                className="object-cover max-lg:hidden w-full"
                                alt=""
                            />
                            <Image
                                src="/image/card-gallery.png"
                                width={188}
                                height={154.43}
                                layout="responsive"
                                className="object-cover max-lg:block hidden w-full"
                                alt=""
                            />
                            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
                                <span className=" text-[#5C5C5C] font-semibold text-xl max-lg:text-[10px] font-poppins max-lg:leading-none">
                                    Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman
                                </span>
                                <div className="flex gap-2 mt-6 items-center">
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full max-w-lg mx-auto z-50 rounded overflow-hidden">
                            <Image
                                src="/image/card-gallery.png"
                                width={392}
                                height={322}
                                layout="responsive"
                                className="object-cover max-lg:hidden w-full"
                                alt=""
                            />
                            <Image
                                src="/image/card-gallery.png"
                                width={188}
                                height={154.43}
                                layout="responsive"
                                className="object-cover max-lg:block hidden w-full"
                                alt=""
                            />
                            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
                                <span className=" text-[#5C5C5C] font-semibold text-xl max-lg:text-[10px] font-poppins max-lg:leading-none">
                                    Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman
                                </span>
                                <div className="flex gap-2 mt-6 items-center">
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full max-w-lg mx-auto z-50 rounded overflow-hidden">
                            <Image
                                src="/image/card-gallery.png"
                                width={392}
                                height={322}
                                layout="responsive"
                                className="object-cover max-lg:hidden w-full"
                                alt=""
                            />
                            <Image
                                src="/image/card-gallery.png"
                                width={188}
                                height={154.43}
                                layout="responsive"
                                className="object-cover max-lg:block hidden w-full"
                                alt=""
                            />
                            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
                                <span className=" text-[#5C5C5C] font-semibold text-xl max-lg:text-[10px] font-poppins max-lg:leading-none">
                                    Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman
                                </span>
                                <div className="flex gap-2 mt-6 items-center">
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                    <span className="flex gap-1 items-center text-sm">
                                        <div
                                            type="button"
                                            className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 font-montserrat text-center "
                                        >
                                            Leadership
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto my-10">
                        <div className="flex space-x-1 justify-center">
                            <button className="min-w-9 rounded-md border border-[#3F9D00] py-2 px-3 text-center text-base font-semibold transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-[#3F9D00] hover:border-[#3F9D00] focus:text-white focus:bg-[#3F9D00] focus:border-[#3F9D00] active:border-[#3F9D00] active:text-white active:bg-[#3F9D00] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" /></svg>
                            </button>
                            <button className="min-w-9 rounded-md bg-[#3F9D00] py-2 px-3 border border-transparent text-center text-base font-semibold text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                                1
                            </button>
                            <button className="min-w-9 rounded-md border border-[#3F9D00] py-2 px-3 text-center text-base font-semibold transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-[#3F9D00] hover:border-[#3F9D00] focus:text-white focus:bg-[#3F9D00] focus:border-[#3F9D00] active:border-[#3F9D00] active:text-white active:bg-[#3F9D00] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                                2
                            </button>
                            <button className="min-w-9 rounded-md border border-[#3F9D00] py-2 px-3 text-center text-base font-semibold transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-[#3F9D00] hover:border-[#3F9D00] focus:text-white focus:bg-[#3F9D00] focus:border-[#3F9D00] active:border-[#3F9D00] active:text-white active:bg-[#3F9D00] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                                3
                            </button>
                            <button className="min-w-9 rounded-md border border-[#3F9D00] py-2 px-3 text-center text-base font-semibold transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-[#3F9D00] hover:border-[#3F9D00] focus:text-white focus:bg-[#3F9D00] focus:border-[#3F9D00] active:border-[#3F9D00] active:text-white active:bg-[#3F9D00] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
