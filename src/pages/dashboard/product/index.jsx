import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import Link from "next/link";
import Image from "next/image";

const Dashboardproduct = () => {
  return (
    <DashboardLayout>
      <h1 className="font-sans font-bold text-3xl text-black mb-4">Products</h1>
      <div className="flex mb-6 justify-between max-lg:justify-center max-lg:block">
        <div
          className="inline-flex rounded-md shadow-sm max-lg:mb-2 max-lg:w-full"
          role="group"
        >
          <button
            type="button"
            className="px-6 max-lg:px-3 py-2 max-lg:text-xs text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10 focus:bg-[#3F9D00] focus:text-white"
          >
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.75 9.75C16.1348 9.75 20.5 7.73528 20.5 5.25C20.5 2.76472 16.1348 0.75 10.75 0.75C5.36522 0.75 1 2.76472 1 5.25C1 7.73528 5.36522 9.75 10.75 9.75Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 5.25C1.00253 9.76548 4.10614 13.688 8.5 14.729V21C8.5 22.2426 9.50736 23.25 10.75 23.25C11.9926 23.25 13 22.2426 13 21V14.729C17.3939 13.688 20.4975 9.76548 20.5 5.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="px-6 max-lg:px-3 py-2 max-lg:text-xs text-sm font-bold text-black bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10 focus:bg-[#3F9D00] focus:text-white"
          >
            Filter By
          </button>
          <button
            type="button"
            className="px-6 max-lg:px-3 py-2 max-lg:text-xs text-sm font-bold text-black bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10 focus:bg-[#3F9D00] focus:text-white"
          >
            Filter By Category
          </button>
          <button
            type="button"
            className="px-6 max-lg:px-3 py-2 max-lg:text-xs text-sm flex items-center gap-2 font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:bg-red-600 focus:text-white"
          >
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 3.25V0.25L2.75 4L6.5 7.75V4.75C8.9825 4.75 11 6.7675 11 9.25C11 11.7325 8.9825 13.75 6.5 13.75C4.0175 13.75 2 11.7325 2 9.25H0.5C0.5 12.565 3.185 15.25 6.5 15.25C9.815 15.25 12.5 12.565 12.5 9.25C12.5 5.935 9.815 3.25 6.5 3.25Z"
                fill="currentColor"
              />
            </svg>
            Reset Filter
          </button>
        </div>
        <div className="flex items-center gap-3">
          <form className="w-72 max-lg:w-full">
            <label
              htmlfor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[#3F9D00] focus:border-[#3F9D00]"
                placeholder="Search product name"
                required
              />
            </div>
          </form>
          <Link
            href="/dashboard/product/createproduct"
            className="bg-[#3F9D00] max-lg:hidden rounded-md text-base text-white px-8 py-2 hover:text-[#3F9D00] hover:bg-white hover:border hover:border-[#3F9D00] focus:border focus:border-[#3F9D00] focus:bg-white focus:text-[#3F9D00]"
          >
            Tambah Data
          </Link>
        </div>
        <Link
          href="/dashboard/product/createproduct"
          className="bg-[#3F9D00] max-lg:block hidden text-center mt-2 rounded-md text-base text-white px-8 py-2 hover:text-[#3F9D00] hover:bg-white hover:border hover:border-[#3F9D00] focus:border focus:border-[#3F9D00] focus:bg-white focus:text-[#3F9D00]"
        >
          Tambah Data
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-black ">
          <thead className="text-sm border text-black font-sans bg-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3 justify-center flex">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <Image
                  src="/image/product.png"
                  width={60}
                  height={60}
                  alt="Image-Product"
                  className="rounded-lg"
                />
              </th>
              <td className="px-6 py-4">Apple Watch Series 4</td>
              <td className="px-6 py-4">Digital Product</td>
              <td className="px-6 py-4">$690.00</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ...
              </td>
              <td className="px-6 py-4">
                {" "}
                <div className="flex items-center justify-center">
                  <Link
                    href="/dashboard/product/updateproduct"
                    className="px-6 py-2 text-sm font-bold text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#3F9D00] focus:z-10"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.6">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69665 10.4239L7.22198 10.7779L7.57532 8.30261L13.9393 1.93861C14.5251 1.35282 15.4749 1.35282 16.0607 1.93861C16.6464 2.5244 16.6464 3.47415 16.0607 4.05994L9.69665 10.4239Z"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.232 2.646L15.3533 4.76733"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 10.5V15.5C13.5 16.0523 13.0523 16.5 12.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V5.5C1.5 4.94772 1.94772 4.5 2.5 4.5H7.5"
                          stroke="black"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href=""
                    className="px-6 py-2 text-sm font-bold text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-red-600 focus:text-red-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2 15.4H4.80004C4.13729 15.4 3.60004 14.8628 3.60004 14.2V3.40002H14.4V14.2C14.4 14.8628 13.8628 15.4 13.2 15.4Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.19999 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8 11.8V7"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.20001 3.4H16.8"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8 1H7.2C6.53726 1 6 1.53726 6 2.2V3.4H12V2.2C12 1.53726 11.4627 1 10.8 1Z"
                        stroke="#EF3826"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" mx-auto my-10">
        <div className="flex space-x-1 justify-center">
          <button className="min-w-9 rounded-md border border-[#3F9D00] py-2 px-3 text-center text-base font-semibold transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-[#3F9D00] hover:border-[#3F9D00] focus:text-white focus:bg-[#3F9D00] focus:border-[#3F9D00] active:border-[#3F9D00] active:text-white active:bg-[#3F9D00] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
            </svg>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboardproduct;
