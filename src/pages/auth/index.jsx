"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Auth() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full h-screen flex justify-between max-lg:flex-col-reverse">
            <div className="w-5/12 h-full relative max-lg:hidden">
                <Image
                    src="/image/bg-auth.png"
                    alt="Background image for authentication"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-7/12 h-full flex justify-center items-center max-lg:w-full max-lg:px-6">
                <div className="max-w-md w-full">
                    <p className="font-poppins text-base font-normal text-[#757575] mb-3">
                        Welcome back! 👋
                    </p>
                    <p className="font-poppins mb-6 text-2xl font-semibold text-black">
                        Login to your account
                    </p>

                    <form className="font-poppins">
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-lg font-semibold text-[#333333]"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-[#F8F8F8] border border-[#757575] text-[#333333] text-lg rounded-lg focus:ring-[#3F9D00] focus:border-[#3F9D00] block w-full p-4"
                                placeholder="Please enter your email"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-lg font-semibold text-[#333333]"
                            >
                                Password
                            </label>
                            <div className="relative items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className="bg-[#F8F8F8] border border-[#757575] text-[#333333] text-lg rounded-lg focus:ring-[#3F9D00] focus:border-[#3F9D00] block w-full p-4"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inline-block bottom-4 right-5"
                                >
                                    {showPassword ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end mb-5">
                            <Link
                                href="forgot-password"
                                className="text-base font-medium text-blue-800 underline"
                            >
                                Forget Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="text-white w-full font-poppins bg-[#3F9D00] hover:bg-white hover:text-[#3F9D00] hover:border hover:border-[#3F9D00] focus:ring-4 focus:outline-none focus:ring-[#3F9D00] font-semibold rounded-lg text-lg px-5 py-4 text-center"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
