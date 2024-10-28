import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownLi = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  return (
    <div className="dashboard-layout">
      {/* Navbar */}
      <nav className="fixed top-0 z-10 w-full bg-white border-b border-gray-200">
        <div className="px-4 py-3 lg:px-8 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="flex text-sm items-center rounded-full justify-between "
                    aria-expanded={isDropdownOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      width={44}
                      height={44}
                      src="/image/product.png"
                      alt="user photo"
                      className="rounded-full"
                    />
                    <div className="px-4 max-lg:hidden" role="none">
                      <p className="text-sm text-start font-medium  text-black">
                        Moni Roy
                      </p>
                      <p className="text-sm text-start text-black truncate">
                        Admin
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-0 mr-4 z-50 w-48 bg-white divide-y divide-gray-100 rounded shadow-lg"
          style={{ top: "4rem" }}
        >
          <div className="px-4 py-3 max-lg:contents hidden" role="none">
            <p className="text-sm text-black">Moni Roy</p>
            <p className="text-sm font-medium text-black truncate">
              moniroy@admin.com
            </p>
          </div>
          <ul className="py-1">
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3F9D00] hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#3F9D00] hover:text-white"
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-3 transition-transform bg-white border-r border-gray-200 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex justify-between items-center px-5">
          <h1 className="text-[#3F9D00] font-extrabold text-2xl pb-3">
            Coconut
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-600 hover:text-gray-900 hidden max-lg:contents focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-white font-sans ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className={
                  pathname === "/dashboard"
                    ? "bg-[#3F9D00] px-5 py-3 text-white flex items-center rounded-lg"
                    : "flex items-center px-5 py-3 text-black rounded-lg hover:bg-[#3F9D00] hover:text-white  group"
                }
              >
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.15625 2.44922C4.78906 0.816406 6.73698 0 9 0C11.263 0 13.1966 0.816406 14.8008 2.44922C16.4336 4.05339 17.25 5.98698 17.25 8.25C17.25 10.513 16.4336 12.4609 14.8008 14.0938C13.1966 15.6979 11.263 16.5 9 16.5C6.73698 16.5 4.78906 15.6979 3.15625 14.0938C1.55208 12.4609 0.75 10.513 0.75 8.25C0.75 5.98698 1.55208 4.05339 3.15625 2.44922ZM13.8555 3.39453C12.5091 2.04818 10.8906 1.375 9 1.375C7.10938 1.375 5.49089 2.04818 4.14453 3.39453C2.79818 4.74089 2.125 6.35938 2.125 8.25C2.125 10.1406 2.79818 11.7591 4.14453 13.1055C5.49089 14.4518 7.10938 15.125 9 15.125C10.8906 15.125 12.5091 14.4518 13.8555 13.1055C15.2018 11.7591 15.875 10.1406 15.875 8.25C15.875 6.35938 15.2018 4.74089 13.8555 3.39453ZM8.48438 2.27734C8.6276 2.13411 8.79948 2.0625 9 2.0625C9.20052 2.0625 9.35807 2.13411 9.47266 2.27734C9.61589 2.39193 9.6875 2.54948 9.6875 2.75C9.6875 2.95052 9.61589 3.1224 9.47266 3.26562C9.35807 3.38021 9.20052 3.4375 9 3.4375C8.79948 3.4375 8.6276 3.38021 8.48438 3.26562C8.36979 3.1224 8.3125 2.95052 8.3125 2.75C8.3125 2.54948 8.36979 2.39193 8.48438 2.27734ZM4.61719 3.91016C4.76042 3.76693 4.91797 3.69531 5.08984 3.69531C5.29036 3.69531 5.46224 3.76693 5.60547 3.91016C5.7487 4.02474 5.82031 4.18229 5.82031 4.38281C5.82031 4.55469 5.7487 4.71224 5.60547 4.85547C5.46224 4.9987 5.29036 5.07031 5.08984 5.07031C4.91797 5.07031 4.76042 4.9987 4.61719 4.85547C4.5026 4.71224 4.44531 4.55469 4.44531 4.38281C4.44531 4.18229 4.5026 4.02474 4.61719 3.91016ZM12.3945 3.86719L13.3828 4.85547L10.332 7.90625C10.3607 8.02083 10.375 8.13542 10.375 8.25C10.375 8.6224 10.2318 8.95182 9.94531 9.23828C9.6875 9.49609 9.3724 9.625 9 9.625C8.6276 9.625 8.29818 9.49609 8.01172 9.23828C7.75391 8.95182 7.625 8.6224 7.625 8.25C7.625 7.8776 7.75391 7.5625 8.01172 7.30469C8.29818 7.01823 8.6276 6.875 9 6.875C9.11458 6.875 9.22917 6.88932 9.34375 6.91797L12.3945 3.86719ZM2.98438 7.77734C3.1276 7.63411 3.29948 7.5625 3.5 7.5625C3.70052 7.5625 3.85807 7.63411 3.97266 7.77734C4.11589 7.89193 4.1875 8.04948 4.1875 8.25C4.1875 8.45052 4.11589 8.6224 3.97266 8.76562C3.85807 8.88021 3.70052 8.9375 3.5 8.9375C3.29948 8.9375 3.1276 8.88021 2.98438 8.76562C2.86979 8.6224 2.8125 8.45052 2.8125 8.25C2.8125 8.04948 2.86979 7.89193 2.98438 7.77734ZM13.9844 7.77734C14.1276 7.63411 14.2995 7.5625 14.5 7.5625C14.7005 7.5625 14.8581 7.63411 14.9727 7.77734C15.1159 7.89193 15.1875 8.04948 15.1875 8.25C15.1875 8.45052 15.1159 8.6224 14.9727 8.76562C14.8581 8.88021 14.7005 8.9375 14.5 8.9375C14.2995 8.9375 14.1276 8.88021 13.9844 8.76562C13.8698 8.6224 13.8125 8.45052 13.8125 8.25C13.8125 8.04948 13.8698 7.89193 13.9844 7.77734ZM4.61719 11.6445C4.76042 11.5013 4.91797 11.4297 5.08984 11.4297C5.29036 11.4297 5.46224 11.5013 5.60547 11.6445C5.7487 11.7878 5.82031 11.9596 5.82031 12.1602C5.82031 12.332 5.7487 12.4896 5.60547 12.6328C5.46224 12.7474 5.29036 12.8047 5.08984 12.8047C4.91797 12.8047 4.76042 12.7474 4.61719 12.6328C4.5026 12.4896 4.44531 12.332 4.44531 12.1602C4.44531 11.9596 4.5026 11.7878 4.61719 11.6445ZM12.3945 11.6445C12.5378 11.5013 12.6953 11.4297 12.8672 11.4297C13.0677 11.4297 13.2253 11.5013 13.3398 11.6445C13.4831 11.7878 13.5547 11.9596 13.5547 12.1602C13.5547 12.332 13.4831 12.4896 13.3398 12.6328C13.2253 12.7474 13.0677 12.8047 12.8672 12.8047C12.6953 12.8047 12.5378 12.7474 12.3945 12.6328C12.2513 12.4896 12.1797 12.332 12.1797 12.1602C12.1797 11.9596 12.2513 11.7878 12.3945 11.6445Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/product"
                className={
                  pathname === "/dashboard/product" ||
                  pathname === "/dashboard/product/updateproduct" ||
                  pathname === "/dashboard/product/createproduct"
                    ? "bg-[#3F9D00] px-5 py-3 text-white flex items-center rounded-lg"
                    : "flex items-center px-5 py-3 text-black rounded-lg hover:bg-[#3F9D00] hover:text-white  group"
                }
              >
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.25 4.5L18.625 15.132C18.5913 15.705 18.3399 16.2436 17.9222 16.6373C17.5045 17.031 16.952 17.2502 16.378 17.25H5.622C5.04796 17.2502 4.49555 17.031 4.07783 16.6373C3.66011 16.2436 3.40868 15.705 3.375 15.132L2.75 4.5M9 8.25H13M2.375 4.5H19.625C20.246 4.5 20.75 3.996 20.75 3.375V1.875C20.75 1.254 20.246 0.75 19.625 0.75H2.375C1.754 0.75 1.25 1.254 1.25 1.875V3.375C1.25 3.996 1.754 4.5 2.375 4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="ms-3">Product</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/gallery"
                className={
                  pathname === "/dashboard/gallery" ||
                  pathname === "/dashboard/gallery/updategallery" ||
                  pathname === "/dashboard/gallery/creategallery"
                    ? "bg-[#3F9D00] px-5 py-3 text-white flex items-center rounded-lg"
                    : "flex items-center px-5 py-3 text-black rounded-lg hover:bg-[#3F9D00] hover:text-white  group"
                }
              >
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 12.75L6.409 7.591C6.61793 7.38206 6.86597 7.21633 7.13896 7.10325C7.41194 6.99018 7.70452 6.93198 8 6.93198C8.29548 6.93198 8.58806 6.99018 8.86104 7.10325C9.13403 7.21633 9.38207 7.38206 9.591 7.591L14.75 12.75M13.25 11.25L14.659 9.841C14.8679 9.63206 15.116 9.46633 15.389 9.35325C15.6619 9.24018 15.9545 9.18198 16.25 9.18198C16.5455 9.18198 16.8381 9.24018 17.111 9.35325C17.384 9.46633 17.6321 9.63206 17.841 9.841L20.75 12.75M2.75 16.5H19.25C19.6478 16.5 20.0294 16.342 20.3107 16.0607C20.592 15.7794 20.75 15.3978 20.75 15V3C20.75 2.60218 20.592 2.22064 20.3107 1.93934C20.0294 1.65804 19.6478 1.5 19.25 1.5H2.75C2.35218 1.5 1.97064 1.65804 1.68934 1.93934C1.40804 2.22064 1.25 2.60218 1.25 3V15C1.25 15.3978 1.40804 15.7794 1.68934 16.0607C1.97064 16.342 2.35218 16.5 2.75 16.5ZM13.25 5.25H13.258V5.258H13.25V5.25ZM13.625 5.25C13.625 5.34946 13.5855 5.44484 13.5152 5.51517C13.4448 5.58549 13.3495 5.625 13.25 5.625C13.1505 5.625 13.0552 5.58549 12.9848 5.51517C12.9145 5.44484 12.875 5.34946 12.875 5.25C12.875 5.15054 12.9145 5.05516 12.9848 4.98484C13.0552 4.91451 13.1505 4.875 13.25 4.875C13.3495 4.875 13.4448 4.91451 13.5152 4.98484C13.5855 5.05516 13.625 5.15054 13.625 5.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="ms-3">Galeri</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/user"
                className={
                  pathname === "/dashboard/user" ||
                  pathname === "/dashboard/user/updateuser" ||
                  pathname === "/dashboard/user/createuser"
                    ? "bg-[#3F9D00] px-5 py-3 text-white flex items-center rounded-lg"
                    : "flex items-center px-5 py-3 text-black rounded-lg hover:bg-[#3F9D00] hover:text-white  group"
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.982 16.725C15.2833 15.7999 14.3793 15.0496 13.3412 14.5334C12.3031 14.0171 11.1594 13.749 10 13.75C8.84066 13.749 7.6969 14.0171 6.65883 14.5334C5.62077 15.0496 4.71675 15.7999 4.01801 16.725M15.982 16.725C17.3455 15.5122 18.3071 13.9136 18.7412 12.1411C19.1753 10.3686 19.0603 8.5061 18.4115 6.80049C17.7627 5.09488 16.6107 3.62679 15.1084 2.59091C13.6061 1.55503 11.8244 1.00031 9.99951 1.00031C8.17467 1.00031 6.39295 1.55503 4.89062 2.59091C3.38829 3.62679 2.23634 5.09488 1.58755 6.80049C0.938753 8.5061 0.823765 10.3686 1.25783 12.1411C1.6919 13.9136 2.65451 15.5122 4.01801 16.725M15.982 16.725C14.336 18.1932 12.2056 19.0032 10 19C7.79404 19.0034 5.66425 18.1934 4.01801 16.725M13 7.75001C13 8.54566 12.6839 9.30872 12.1213 9.87133C11.5587 10.4339 10.7957 10.75 10 10.75C9.20436 10.75 8.4413 10.4339 7.87869 9.87133C7.31608 9.30872 7.00001 8.54566 7.00001 7.75001C7.00001 6.95436 7.31608 6.1913 7.87869 5.62869C8.4413 5.06608 9.20436 4.75001 10 4.75001C10.7957 4.75001 11.5587 5.06608 12.1213 5.62869C12.6839 6.1913 13 6.95436 13 7.75001Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="ms-3">User</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleDropdownLi}
                className="flex items-center w-full px-5 py-3 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-[#3F9D00] hover:text-white"
                aria-controls="dropdown-example"
                aria-expanded={isOpen}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.48248 0.8125H8.04108H10.7911H11.3497L11.4786 1.37109L11.8653 3.39062C12.4955 3.64844 13.0827 4.00651 13.627 4.46484L15.6465 3.77734L16.2051 3.60547L16.463 4.07812L17.838 6.48438L18.0958 6.95703L17.709 7.34375L16.1622 8.67578C16.2481 9.19141 16.2911 9.54948 16.2911 9.75C16.2911 9.95052 16.2481 10.3086 16.1622 10.8242L17.709 12.1562L18.0958 12.543L17.838 13.0156L16.463 15.4219L16.2051 15.8945L15.6465 15.7227L13.627 15.0352C13.0827 15.4935 12.4955 15.8516 11.8653 16.1094L11.4786 18.1289L11.3497 18.6875H10.7911H8.04108H7.48248L7.35358 18.1289L6.96686 16.1094C6.33665 15.8516 5.74941 15.4935 5.20514 15.0352L3.18561 15.7227L2.62701 15.8945L2.3692 15.4219L0.994202 13.0156L0.736389 12.543L1.12311 12.1562L2.66998 10.8242C2.58405 10.3086 2.54108 9.95052 2.54108 9.75C2.54108 9.54948 2.58405 9.19141 2.66998 8.67578L1.12311 7.34375L0.736389 6.95703L0.994202 6.48438L2.3692 4.07812L2.62701 3.60547L3.18561 3.77734L5.20514 4.46484C5.74941 4.00651 6.33665 3.64844 6.96686 3.39062L7.35358 1.37109L7.48248 0.8125ZM8.59967 2.1875L8.25592 3.99219L8.16998 4.37891L7.78326 4.50781C7.00983 4.76562 6.32233 5.16667 5.72076 5.71094L5.37701 5.96875L5.03326 5.88281L3.27155 5.28125L2.45514 6.65625L3.83014 7.85938L4.17389 8.11719L4.04498 8.54688C3.95905 8.91927 3.91608 9.32031 3.91608 9.75C3.91608 10.1797 3.95905 10.5807 4.04498 10.9531L4.17389 11.3828L3.83014 11.6406L2.45514 12.8438L3.27155 14.2188L5.03326 13.6172L5.37701 13.5312L5.72076 13.7891C6.32233 14.3333 7.00983 14.7344 7.78326 14.9922L8.16998 15.1211L8.25592 15.5078L8.59967 17.3125H10.2325L10.5762 15.5078L10.6622 15.1211L11.0489 14.9922C11.8223 14.7344 12.5098 14.3333 13.1114 13.7891L13.4551 13.5312L13.7989 13.6172L15.5606 14.2188L16.377 12.8438L15.002 11.6406L14.7012 11.3828L14.7872 10.9531C14.8731 10.5807 14.9161 10.1797 14.9161 9.75C14.9161 9.32031 14.8731 8.91927 14.7872 8.54688L14.6583 8.11719L15.002 7.85938L16.377 6.65625L15.5606 5.28125L13.7989 5.88281L13.4551 5.96875L13.1114 5.71094C12.5098 5.16667 11.8223 4.76562 11.0489 4.50781L10.6622 4.37891L10.5762 3.99219L10.2325 2.1875H8.59967ZM6.96686 7.34375C7.65436 6.65625 8.47076 6.3125 9.41608 6.3125C10.3614 6.3125 11.1635 6.65625 11.8223 7.34375C12.5098 8.0026 12.8536 8.80469 12.8536 9.75C12.8536 10.6953 12.5098 11.5117 11.8223 12.1992C11.1635 12.8581 10.3614 13.1875 9.41608 13.1875C8.47076 13.1875 7.65436 12.8581 6.96686 12.1992C6.308 11.5117 5.97858 10.6953 5.97858 9.75C5.97858 8.80469 6.308 8.0026 6.96686 7.34375ZM10.877 8.28906C10.476 7.88802 9.98899 7.6875 9.41608 7.6875C8.84316 7.6875 8.35618 7.88802 7.95514 8.28906C7.5541 8.6901 7.35358 9.17708 7.35358 9.75C7.35358 10.3229 7.5541 10.8099 7.95514 11.2109C8.35618 11.612 8.84316 11.8125 9.41608 11.8125C9.98899 11.8125 10.476 11.612 10.877 11.2109C11.2781 10.8099 11.4786 10.3229 11.4786 9.75C11.4786 9.17708 11.2781 8.6901 10.877 8.28906Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Settings
                </span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {isOpen && (
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full px-5 py-3 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-[#3F9D00] hover:text-white"
                    >
                      Homepage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full px-5 py-3 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-[#3F9D00] hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <ul>
            <li className="bottom-4 absolute">
              <Link
                href=""
                className={
                  pathname === ""
                    ? "bg-[#3F9D00] px-5 py-3 text-white flex items-center rounded-lg"
                    : "flex items-center px-5 py-3 text-black rounded-lg hover:bg-[#3F9D00] hover:text-white  group"
                }
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.72858 0.5H9.10358V8.75H7.72858V0.5ZM5.66608 0.972656V2.47656C4.43431 2.99219 3.4317 3.82292 2.65826 4.96875C1.91347 6.11458 1.54108 7.375 1.54108 8.75C1.54108 10.6406 2.21425 12.2591 3.56061 13.6055C4.90696 14.9518 6.52545 15.625 8.41608 15.625C10.3067 15.625 11.9252 14.9518 13.2715 13.6055C14.6179 12.2591 15.2911 10.6406 15.2911 8.75C15.2911 7.375 14.9044 6.11458 14.1309 4.96875C13.3861 3.82292 12.3978 2.99219 11.1661 2.47656V0.972656C12.7989 1.54557 14.1166 2.54818 15.1192 3.98047C16.1505 5.38411 16.6661 6.97396 16.6661 8.75C16.6661 11.013 15.8497 12.9609 14.2169 14.5938C12.6127 16.1979 10.6791 17 8.41608 17C6.15306 17 4.20514 16.1979 2.57233 14.5938C0.96816 12.9609 0.166077 11.013 0.166077 8.75C0.166077 6.97396 0.667379 5.38411 1.66998 3.98047C2.70123 2.54818 4.03326 1.54557 5.66608 0.972656Z"
                    fill="currentColor"
                  />
                </svg>

                <span className="ms-3">Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* main */}
      <main className="px-8 max-lg:px-4 sm:ml-64 pt-20 pb-10 bg-[#F5F6FA] min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
