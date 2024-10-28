"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className=" ">
      {/* Hero */}
      <div className="text-center h-[400px] mt-16 max-lg:h-[263px] relative">
        <Image
          src="/image/hero-about.png"
          fill
          alt=""
          className=" w-full object-cover"
        />
        <div className=" absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <p className=" font-semibold font-montserrat text-3xl text-white">
            About Us
          </p>
          <svg
            width="288"
            height="2"
            className="mt-4"
            viewBox="0 0 288 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="288" y2="1" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
      {/* About*/}
      <div className="px-[120px] font-montserrat max-lg:px-8 py-20 max-lg:py-10">
        <p className="text-base mb-5 font-medium text-black">
          Coconut Kawan Kerja was established in 2030 as a limited liability
          partnership and transformed into a limited liability company in 2035
          after receiving investment from Japan. We process the best coconuts
          from local resources into high-quality, export-ready products. Our
          flagship products are charcoal, briquettes, liquid sugar and nipah
          tea. Our products have been exported to many countries, such as PT
          Coconut Kawan Kerja is committ Egypt, Jordan, Saudi Arabia, Turkey,
          and the UK.
        </p>
        <p className="text-base font-medium text-black">
          Ed to becoming a global company that controls the international market
          in its field. This step received a positive response from various
          parties. This is evidenced by the collaboration of PT Coconut Kawan
          Kerja with various Indonesian government agencies, among others:
        </p>
        <ol class="mt-2 space-y-1 list-decimal list-inside text-base font-medium text-black">
          <li>
            Ministry of Finance through the Directorate General of Customs and
            Excise,
          </li>
          <li>
            Ministry of Agriculture through the Agricultural Quarantine program,
          </li>
          <li>Ministry of Cooperatives and SMEs,</li>
          <li>Bank Indonesia Representative of West Java,</li>
          <li>Xpora Bank BNI Bandung Branch.</li>
        </ol>
      </div>
      {/* Contact */}
      <div className="px-[120px] max-lg:px-8 mb-20">
        <h1 className="font-bold text-2xl text-black font-montserrat text-center max-lg:text-base">
          Contact Us
        </h1>
        <div className="py-14 max-lg:justify-center max-lg:flex-col justify-between flex">
          <div className="bg-[#3F9D00] w-2/5 font-montserrat max-lg:w-full h-[647px] max-lg:h-[450px] max-lg:px-8 max-lg:py-8 relative rounded-lg px-12 py-14">
            <div className="mb-36 max-lg:mb-20">
              <h3 className="mb-2 text-3xl max-lg:text-base font-semibold text-white">
                Contact Information
              </h3>
              <p className="text-lg font-medium max-lg:text-xs text-white">
                Say something to start a live chat!
              </p>
            </div>
            <div className="block space-y-9 text-white">
              <div className="flex gap-8 max-lg:gap-4 items-center">
                <div className="text-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
                      fill="white"
                    />
                    <path
                      d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898 11.933 8.05198 11.361L10.511 8.96699C10.6974 8.78612 10.8061 8.53982 10.8141 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85898 3.51299C6.68402 3.32035 6.44086 3.2035 6.18113 3.18725C5.9214 3.17101 5.66557 3.25665 5.46798 3.42599L3.29798 5.28699C3.12509 5.46051 3.0219 5.69145 3.00798 5.93599C2.99298 6.18599 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7414 18.3325 20.8273 18.0768 20.8112 17.817C20.7951 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium max-lg:text-xs">
                  +62-851-7980-0897
                </p>
              </div>
              <div className="flex gap-8 max-lg:gap-4 items-center">
                <div className="text-center justify-center">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium max-lg:text-xs">
                  admin@kawankerja.id
                </p>
              </div>
              <div className="flex gap-8 max-lg:gap-4">
                <div className="text-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 384 512"
                  >
                    <path
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-base font-medium max-lg:text-xs">
                  Kawasan Niaga Metro Trade Center Blok A-26. Jl. Soekarno Hatta
                  No. 590, Sekejati, Buahbatu, Bandung, Jawa Barat 40286, ID
                </p>
              </div>
            </div>
            <svg
              width="138"
              height="138"
              viewBox="0 0 138 138"
              className="absolute right-20 bottom-20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="69"
                cy="69"
                r="69"
                fill="#FFF9F9"
                fill-opacity="0.13"
              />
            </svg>
            <svg
              width="180"
              height="183"
              viewBox="0 0 180 183"
              className="absolute right-0 bottom-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="134.5"
                cy="134.5"
                r="134.5"
                fill="white"
                fill-opacity="0.12"
              />
            </svg>
          </div>
          <div className="w-3/5 bg-white max-lg:w-full lg:h-[647px] px-12 max-lg:px-0 max-lg:py-0 lg:py-2">
            <form action="https://api.web3forms.com/submit" className="mt-10">
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="z-0">
                  <label className="text-base max-lg:text-xs font-medium text-black tracking-wide">
                    First Name
                  </label>
                  <input
                    className="w-full text-base max-lg:text-xs py-2 border-b border-black focus:outline-none focus:border-[#3F9D00]"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="z-0">
                  <label className="text-base max-lg:text-xs font-medium text-black tracking-wide">
                    Last Name
                  </label>
                  <input
                    className="w-full text-base max-lg:text-xs py-2 border-b border-black focus:outline-none focus:border-[#3F9D00]"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
                <div className="z-0">
                  <label className="text-base max-lg:text-xs font-medium text-black tracking-wide">
                    Email
                  </label>
                  <input
                    className="w-full text-base max-lg:text-xs py-2 border-b border-black focus:outline-none focus:border-[#3F9D00]"
                    type="email"
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="z-0">
                  <label className="text-base max-lg:text-xs font-medium text-black tracking-wide">
                    Phone Number
                  </label>
                  <input
                    className="w-full text-base max-lg:text-xs py-2 border-b border-black focus:outline-none focus:border-[#3F9D00]"
                    type=""
                    placeholder="+1 012 3456 789"
                  />
                </div>
                <div className="col-span-2 my-11 max-lg:my-8">
                  <h3 className="mb-12 max-lg:mb-4 font-semibold text-base max-lg:text-xs text-[#3F9D00]">
                    Select Subject?
                  </h3>
                  <ul className="items-center w-full text-sm font-medium max-lg:space-y-2 text-gray-900 rounded-lg sm:flex ">
                    <li className="w-full">
                      <div className="flex items-center ps-3">
                        <input
                          id="vue-radio-list"
                          type="radio"
                          className="appearance-none w-4 h-4 rounded-full border border-gray-500 checked:bg-[#3F9D00] focus:ring-2 focus:ring-offset-2 focus:ring-[#3F9D00]"
                        />
                        <label
                          htmlFor="vue-radio-list"
                          className="w-full ms-2 text-base max-lg:text-xs font-medium text-[#3F9D00]"
                        >
                          General Inquiry
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center ps-3">
                        <input
                          id="react-radio-list"
                          type="radio"
                          className="appearance-none w-4 h-4 rounded-full border border-gray-500 checked:bg-[#3F9D00] focus:ring-2 focus:ring-offset-2 focus:ring-[#3F9D00]"
                        />
                        <label
                          htmlFor="react-radio-list"
                          className="w-full ms-2 text-base max-lg:text-xs font-medium text-[#3F9D00]"
                        >
                          General Inquiry
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center ps-3">
                        <input
                          id="vue-radio-list"
                          type="radio"
                          className="appearance-none w-4 h-4 rounded-full border border-gray-500 checked:bg-[#3F9D00] focus:ring-2 focus:ring-offset-2 focus:ring-[#3F9D00]"
                        />
                        <label
                          htmlFor="vue-radio-list"
                          className="w-full ms-2 text-base max-lg:text-xs font-medium text-[#3F9D00]"
                        >
                          General Inquiry
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center ps-3">
                        <input
                          id="react-radio-list"
                          type="radio"
                          className="appearance-none w-4 h-4 rounded-full border border-gray-500 checked:bg-[#3F9D00] focus:ring-2 focus:ring-offset-2 focus:ring-[#3F9D00]"
                        />
                        <label
                          htmlFor="react-radio-list"
                          className="w-full ms-2 text-base max-lg:text-xs font-medium text-[#3F9D00]"
                        >
                          General Inquiry
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="z-0 col-span-2">
                  <label className="text-base max-lg:text-xs font-medium text-gray-700 tracking-wide">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    className="w-full text-base max-lg:text-xs py-2 border-b border-black focus:outline-none focus:border-[#3F9D00]"
                    placeholder=" Write your message..."
                  ></textarea>
                </div>
              </div>
              <div className="md:justify-end w-full md:flex">
                <button
                  type="submit"
                  className="mt-5 rounded-md text-base max-lg:w-full max-lg:text-xs font-medium bg-[#3F9D00] px-12 py-4 text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
