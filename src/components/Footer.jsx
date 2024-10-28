import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3F9D00]">
      <div className="mx-auto w-full max-w-full px-[120px] max-md:px-8 pt-24 max-md:pt-12 max-md:pb-8 pb-16">
        <div className="xl:grid xl:grid-cols-5 xl:gap-10 max-md:grid-cols-1">
          <div className="mb-4 md:mb-0">
            <a
              href=""
              className="flex items-center max-md:justify-center max-md:w-full"
            >
              <h1 className="font-bold text-lg text-white">
                Coconut Kawan Kerja
              </h1>
            </a>
          </div>
          <div className="grid xl:grid-cols-4 max-md:grid-cols-2 max-md:col-span-2 xl:col-span-4">
            <div className="">
              <h2 className="mb-4 text-base max-md:text-xs font-bold text-white">
                Company
              </h2>
              <ul className="text-white font-regular text-base max-md:text-xs space-y-2">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="mb-4 text-base max-md:text-xs font-bold text-white">
                Product
              </h2>
              <ul className="text-white font-regular text-base max-md:text-xs space-y-2">
                <li>
                  <a href="">Employee database</a>
                </li>
                <li>
                  <a href="">Payroll</a>
                </li>
                <li>
                  <a href="">Absences</a>
                </li>
                <li>
                  <a href="">Time tracking</a>
                </li>
              </ul>
            </div>
            <div className="max-md:mt-8">
              <h2 className="mb-4 text-base max-md:text-xs font-bold text-white">
                Information
              </h2>
              <ul className="text-white font-regular text-base max-md:text-xs space-y-2">
                <li>
                  <a href="https://github.com/themesberg/flowbite">FAQ</a>
                </li>
                <li>
                  <a href="https://github.com/themesberg/flowbite">Blog</a>
                </li>
                <li>
                  <a href="https://github.com/themesberg/flowbite">Support</a>
                </li>
              </ul>
            </div>
            <div className="max-md:hidden">
              <ul className="text-white font-regular text-base max-md:text-xs space-y-2">
                <li className="flex item-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    className="flex-shrink-0"
                    height="20"
                    viewBox="0 0 384 512"
                    stroke="white"
                  >
                    <path
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      fill="white"
                    />
                  </svg>
                  <a href="#">
                    <span>
                      Kawasan Niaga Metro Trade Center Blok A-26. Jl. Soekarno
                      Hatta No. 590, Sekejati, Buahbatu, Bandung, Jawa Barat
                      40286, ID
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M1.5 9.61328V18.1933C1.5 18.9889 1.81607 19.752 2.37868 20.3146C2.94129 20.8772 3.70435 21.1933 4.5 21.1933H19.5C20.2956 21.1933 21.0587 20.8772 21.6213 20.3146C22.1839 19.752 22.5 18.9889 22.5 18.1933V9.61328L13.572 15.1063C13.0992 15.3971 12.5551 15.5511 12 15.5511C11.4449 15.5511 10.9008 15.3971 10.428 15.1063L1.5 9.61328Z"
                      fill="white"
                    />
                    <path
                      d="M22.5 7.85136V7.69336C22.5 6.89771 22.1839 6.13465 21.6213 5.57204C21.0587 5.00943 20.2956 4.69336 19.5 4.69336H4.5C3.70435 4.69336 2.94129 5.00943 2.37868 5.57204C1.81607 6.13465 1.5 6.89771 1.5 7.69336V7.85136L11.214 13.8294C11.4504 13.9748 11.7225 14.0518 12 14.0518C12.2775 14.0518 12.5496 13.9748 12.786 13.8294L22.5 7.85136Z"
                      fill="white"
                    />
                  </svg>

                  <a href="#">
                    <span> admin@kawankerja.id</span>
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 5.44336C1.5 4.64771 1.81607 3.88465 2.37868 3.32204C2.94129 2.75943 3.70435 2.44336 4.5 2.44336H5.872C6.732 2.44336 7.482 3.02936 7.691 3.86336L8.796 8.28636C8.88554 8.64436 8.86746 9.02082 8.74401 9.36858C8.62055 9.71635 8.39723 10.02 8.102 10.2414L6.809 11.2114C6.674 11.3124 6.645 11.4604 6.683 11.5634C7.24738 13.0982 8.1386 14.4921 9.29495 15.6484C10.4513 16.8048 11.8451 17.696 13.38 18.2604C13.483 18.2984 13.63 18.2694 13.732 18.1344L14.702 16.8414C14.9234 16.5461 15.227 16.3228 15.5748 16.1994C15.9225 16.0759 16.299 16.0578 16.657 16.1474L21.08 17.2524C21.914 17.4614 22.5 18.2114 22.5 19.0724V20.4434C22.5 21.239 22.1839 22.0021 21.6213 22.5647C21.0587 23.1273 20.2956 23.4434 19.5 23.4434H17.25C8.552 23.4434 1.5 16.3914 1.5 7.69336V5.44336Z"
                      fill="white"
                    />
                  </svg>
                  <a href="#">
                    <span> +62-851-7980-0897</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-md:block mt-8 hidden">
            <ul className="text-white font-regular text-base max-md:text-xs space-y-2">
              <li className="flex item-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  className="flex-shrink-0"
                  height="20"
                  viewBox="0 0 384 512"
                  stroke="white"
                >
                  <path
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    fill="white"
                  />
                </svg>
                <a href="#">
                  <span>
                    Kawasan Niaga Metro Trade Center Blok A-26. Jl. Soekarno
                    Hatta No. 590, Sekejati, Buahbatu, Bandung, Jawa Barat
                    40286, ID
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M1.5 9.61328V18.1933C1.5 18.9889 1.81607 19.752 2.37868 20.3146C2.94129 20.8772 3.70435 21.1933 4.5 21.1933H19.5C20.2956 21.1933 21.0587 20.8772 21.6213 20.3146C22.1839 19.752 22.5 18.9889 22.5 18.1933V9.61328L13.572 15.1063C13.0992 15.3971 12.5551 15.5511 12 15.5511C11.4449 15.5511 10.9008 15.3971 10.428 15.1063L1.5 9.61328Z"
                    fill="white"
                  />
                  <path
                    d="M22.5 7.85136V7.69336C22.5 6.89771 22.1839 6.13465 21.6213 5.57204C21.0587 5.00943 20.2956 4.69336 19.5 4.69336H4.5C3.70435 4.69336 2.94129 5.00943 2.37868 5.57204C1.81607 6.13465 1.5 6.89771 1.5 7.69336V7.85136L11.214 13.8294C11.4504 13.9748 11.7225 14.0518 12 14.0518C12.2775 14.0518 12.5496 13.9748 12.786 13.8294L22.5 7.85136Z"
                    fill="white"
                  />
                </svg>

                <a href="#">
                  <span> admin@kawankerja.id</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 5.44336C1.5 4.64771 1.81607 3.88465 2.37868 3.32204C2.94129 2.75943 3.70435 2.44336 4.5 2.44336H5.872C6.732 2.44336 7.482 3.02936 7.691 3.86336L8.796 8.28636C8.88554 8.64436 8.86746 9.02082 8.74401 9.36858C8.62055 9.71635 8.39723 10.02 8.102 10.2414L6.809 11.2114C6.674 11.3124 6.645 11.4604 6.683 11.5634C7.24738 13.0982 8.1386 14.4921 9.29495 15.6484C10.4513 16.8048 11.8451 17.696 13.38 18.2604C13.483 18.2984 13.63 18.2694 13.732 18.1344L14.702 16.8414C14.9234 16.5461 15.227 16.3228 15.5748 16.1994C15.9225 16.0759 16.299 16.0578 16.657 16.1474L21.08 17.2524C21.914 17.4614 22.5 18.2114 22.5 19.0724V20.4434C22.5 21.239 22.1839 22.0021 21.6213 22.5647C21.0587 23.1273 20.2956 23.4434 19.5 23.4434H17.25C8.552 23.4434 1.5 16.3914 1.5 7.69336V5.44336Z"
                    fill="white"
                  />
                </svg>
                <a href="#">
                  <span> +62-851-7980-0897</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">
            <div className="flex mt-3 -mx-2 sm:mt-0 gap-4 justify-center">
              <a
                href="#"
                className="mx-2 text-base max-md:text-xs transition-colors duration-300"
                aria-label="Teams"
              >
                Teams
              </a>
              <a
                href="#"
                className="mx-2 text-base max-md:text-xs transition-colors duration-300"
                aria-label="Privacy"
              >
                Privacy
              </a>
              <a
                href="#"
                className="mx-2 text-base max-md:text-xs transition-colors duration-300"
                aria-label="Cookies"
              >
                Cookies
              </a>
            </div>
          </span>
          <div className="flex mt-4 justify-center sm:mt-0">
            <a
              target="_BLANK"
              href="https://www.linkedin.com/company/kawan-kerja/"
              className="text-[#3F9D00] mr-5 p-2 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
            <a
              target="_BLANK"
              href="https://facebook.com/kawankerjaid"
              className="text-[#3F9D00] p-2 bg-white rounded-full"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              target="_BLANK"
              href="https://x.com/kawankerjaid"
              className="text-[#3F9D00] ms-5 p-2 bg-white rounded-full"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              target="_BLANK"
              href="https://instagram.com/kawankerjaid"
              className="text-[#3F9D00] ms-5 p-2 bg-white rounded-full"
            >
              <svg
                fill="currentColor"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              target="_BLANK"
              href="https://tiktok.com/@kawankerjaid"
              className="text-[#3F9D00] ms-5 p-2 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 448 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
              <span className="sr-only">Tik Tok page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
