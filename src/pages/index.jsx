"use client";

import Image from "next/image";
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Home() {
  const allImages = [
    "/image/swiper-1.png",
    "/image/swiper-2.png",
    "/image/swiper-3.png",
    "/image/swiper-4.png",
    "/image/swiper-1.png",
    "/image/swiper-2.png",
    "/image/swiper-3.png",
    "/image/swiper-4.png",
    "/image/swiper-1.png",
    "/image/swiper-2.png",
    "/image/swiper-3.png",
    "/image/swiper-4.png",
    "/image/swiper-1.png",
    "/image/swiper-2.png",
    "/image/swiper-3.png",
    "/image/swiper-4.png",
  ];

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const slidess = chunkArray(allImages, 4);
  const slides3 = chunkArray(allImages, 3);

  const allText = [
    "Bersama Presiden Republik Indonesia Jokowi Dodo",
    "Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman",
    "Bersama Menteri Pertanian RI Syahrul Yasin Limpo",
    "Kunjungan Meteri Koperasi dan UKM RI Teten Masduki",
    "Bersama Presiden Republik Indonesia Jokowi Dodo",
    "Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman",
    "Bersama Menteri Pertanian RI Syahrul Yasin Limpo",
    "Kunjungan Meteri Koperasi dan UKM RI Teten Masduki",
    "Bersama Presiden Republik Indonesia Jokowi Dodo",
    "Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman",
    "Bersama Menteri Pertanian RI Syahrul Yasin Limpo",
    "Kunjungan Meteri Koperasi dan UKM RI Teten Masduki",
    "Bersama Presiden Republik Indonesia Jokowi Dodo",
    "Bersama Gubernur Sulawesi Selatan Andi Sudirman Sulaiman",
    "Bersama Menteri Pertanian RI Syahrul Yasin Limpo",
    "Kunjungan Meteri Koperasi dan UKM RI Teten Masduki",
  ];

  const chunkArrayText = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const slides = chunkArrayText(allText, 4);
  const slidestext3 = chunkArrayText(allText, 3);

  const allImagesTestimoni = [
    "/image/testimoni.png",
    "/image/testimoni.png",
    "/image/testimoni.png",
    "/image/testimoni.png",
    "/image/testimoni.png",
    "/image/testimoni.png",
    "/image/testimoni.png",
    "/image/testimoni.png",
  ];

  const chunkArrayTestimoni = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const slidesTestimoni = chunkArrayTestimoni(allImagesTestimoni, 2);
  const slidesTestimoniResponsive = chunkArrayTestimoni(allImagesTestimoni, 1);

  const allTextTestimoni = [
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
    "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.”",
  ];

  const chunkArrayTextTestimoni = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const slidesTextTestimoni = chunkArrayTextTestimoni(allTextTestimoni, 2);
  const slidesTextTestimoniResponsive = chunkArrayTextTestimoni(
    allTextTestimoni,
    1
  );

  const allNameTestimoni = [
    " Katty koew",
    " Katty koew",
    " Katty koew",
    " Katty koew",
    " Katty koew",
    " Katty koew",
    " Katty koew",
    " Katty koew",
  ];

  const chunkArrayNameTestimoni = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const slidesNameTestimoni = chunkArrayNameTestimoni(allNameTestimoni, 2);
  const slidesNameTestimoniResponsive = chunkArrayNameTestimoni(
    allNameTestimoni,
    1
  );

  const allTitleTestimoni = [
    "CEO OF January ",
    "CEO OF January ",
    "CEO OF January ",
    "CEO OF January ",
    "CEO OF January ",
    "CEO OF January ",
    "CEO OF January ",
    "CEO OF January ",
  ];

  const chunkArrayTitleTestimoni = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const slidesTitleTestimoni = chunkArrayTitleTestimoni(allTitleTestimoni, 2);
  const slidesTitleTestimoniResponsive = chunkArrayTitleTestimoni(
    allTitleTestimoni,
    1
  );

  return (
    <div>
      {/* Hero */}
      <div className="text-center h-[767px] max-lg:h-[383px] relative font-montserrat">
        <Image
          src="/image/bg.png"
          alt=""
          fill
          className="-z-10  w-full object-cover"
        />
        <div className="absolute transform mt-16 max-lg:mt-8 -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2  max-lg:mb-0 z-10">
          <p className=" font-medium mb-2 text-xl -z-10  max-lg:text-xs text-white">
            Bandung, West Java, Indonesia
          </p>
          <div className="relative">
            <h1 className="text-[32px] max-lg:text-base z-10 leading-[52px] text-white font-extrabold uppercase">
              From Local Product
              <br />
              to Global Market
            </h1>
            <div className="bg-[#3F9D00] w-[775.17px] h-[93.06px] max-lg:w-[284px] max-lg:h-[50px] -z-10 left-1/2 transform -translate-x-1/2 top-7 max-lg:top-2.5 absolute"></div>
          </div>
          <p className="uppercase  font-medium text-xl w-[1098px] max-lg:w-[369px] z-10 max-lg:text-xs text-white mt-6 max-lg:mt-5 max-lg:px-7 mb-10 max-lg:mb-6">
            Bringing the Best Quality Local Coconut Processed Products to the
            World Stage
          </p>
          <Link
            href="/about"
            className="text-[#3F9D00] bg-white max-lg:text-sm z-50 font-bold rounded-full text-xl px-8 py-3 text-center"
          >
            About Us
          </Link>
        </div>
      </div>
      {/* Visi & Misi */}
      <div className="text-center font-montserrat pt-24 mb-36 max-lg:pt-12 max-lg:mb-9">
        <div className="relative mb-32 max-lg:mb-20">
          <div className="absolute left-1/2 transform w-full h-[55px] max-lg:h-[36.37px] -translate-x-1/2">
            <p className="text-white font-bold text-2xl max-lg:text-base absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 transform">
              Vision and Mission
            </p>
            <svg
              viewBox="0 0 288 55"
              fill="none"
              className="-z-10 w-[288px] max-lg:w-[191.51px] -translate-x-1/2 left-1/2 transform absolute"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.332275"
                y="9.73096"
                width="285.974"
                height="44.8623"
                transform="rotate(-1.95 0.332275 9.73096)"
                fill="#3F9D00"
              />
            </svg>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-32 max-lg:gap-0 max-lg:space-y-48 space-y-20 max-lg:px-10 px-20">
          <div className="relative w-full max-w-5xl">
            <div className="absolute left-1/2 transform w-[154px] h-[36px] -translate-x-1/2">
              <svg
                width="154"
                height="36"
                viewBox="0 0 154 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="153"
                  height="35"
                  rx="1.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="153"
                  height="35"
                  rx="1.5"
                  stroke="#3F9D00"
                />
              </svg>
              <p className="absolute left-1/2 -translate-x-1/2 text-xl -translate-y-1/2 top-1/2 transform font-bold text-[#3F9D00]">
                Vision
              </p>
            </div>
            <div className="bg-[#3F9D00] px-6 max-lg:px-4 pt-10 pb-6 -z-10 absolute top-4">
              <p className="text-white font-medium text-base max-lg:text-sm">
                To be a global company in the processed coconut products
                industry that emphasizes quality, innovation, and
                sustainability.
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-5xl">
            <div className="absolute left-1/2 transform w-[154px] h-[36px] -translate-x-1/2">
              <svg
                width="154"
                height="36"
                viewBox="0 0 154 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="153"
                  height="35"
                  rx="1.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="153"
                  height="35"
                  rx="1.5"
                  stroke="#3F9D00"
                />
              </svg>
              <p className="absolute left-1/2 transform -translate-y-1/2 top-1/2 -translate-x-1/2 text-xl font-bold text-[#3F9D00]">
                Mission
              </p>
            </div>
            <div className="bg-[#3F9D00] px-6 pt-10 pb-6 -z-10 absolute top-4">
              <ol className="list-decimal list-inside space-y-4 text-white font-medium text-base max-lg:text-sm ">
                <li>
                  Quality <br />
                  Ensuring every processed coconut product meets international
                  quality standards.
                </li>
                <li>
                  Innovation <br />
                  Implementing advanced technology in production and developing
                  innovative coconut products to meet global needs.
                </li>
                <li>
                  Sustainability <br />
                  Reducing environmental impact by minimizing waste and
                  improving energy efficiency.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Maps */}
      <div className=" justify-center flex font-poppins pt-44 max-lg:pt-[350px] px-[120px] max-lg:px-8 relative">
        <div>
          <hr className="max-lg:w-[298.26px] w-[902px] h-[1px] mx-auto max-lg:mb-10 bg-[#E1E1E1] border-0 mt-10  rounded md:mb-10" />
          <Image
            src="/image/map.png"
            width={1280}
            height={609.77}
            alt="maps"
            className="mt-14 max-lg:hidden max-lg:mt-0 mb-20"
          />
          <Image
            src="/image/map.png"
            width={423.25}
            height={201.63}
            alt="maps"
            className="mt-28 max-lg:block hidden max-lg:mt-0 mb-20 max-lg:mb-8"
          />
          <div className="bg-[#3F9D00] bg-opacity-60 w-[510.44px] max-lg:w-[169.33px] rounded-lg px-6 max-lg:px-1 py-3 max-lg:py-0 block space-y-4 max-lg:-space-y-3 absolute bottom-6">
            <div className=" flex gap-3 max-lg:gap-1 items-center">
              <svg
                className="w-[21px] h-[22px] max-lg:w-[8px] max-lg:h-[8px]"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0782 20.0872L10.1393 20.1221L10.1638 20.1361C10.2607 20.1885 10.3692 20.216 10.4795 20.216C10.5897 20.216 10.6982 20.1885 10.7952 20.1361L10.8196 20.123L10.8816 20.0872C11.2232 19.8847 11.5565 19.6685 11.8807 19.4392C12.7201 18.8466 13.5043 18.1796 14.2239 17.4462C15.9216 15.7083 17.6849 13.097 17.6849 9.73732C17.6849 7.82643 16.9258 5.99381 15.5746 4.64261C14.2234 3.29141 12.3908 2.53232 10.4799 2.53232C8.56902 2.53232 6.7364 3.29141 5.3852 4.64261C4.034 5.99381 3.2749 7.82643 3.2749 9.73732C3.2749 13.0962 5.03904 15.7083 6.73592 17.4462C7.45524 18.1796 8.23917 18.8466 9.0782 19.4392C9.40271 19.6685 9.7363 19.8847 10.0782 20.0872ZM10.4799 12.3573C11.1748 12.3573 11.8412 12.0813 12.3325 11.5899C12.8239 11.0986 13.0999 10.4322 13.0999 9.73732C13.0999 9.04245 12.8239 8.37604 12.3325 7.8847C11.8412 7.39335 11.1748 7.11732 10.4799 7.11732C9.78504 7.11732 9.11863 7.39335 8.62728 7.8847C8.13594 8.37604 7.8599 9.04245 7.8599 9.73732C7.8599 10.4322 8.13594 11.0986 8.62728 11.5899C9.11863 12.0813 9.78504 12.3573 10.4799 12.3573Z"
                  fill="#F44343"
                />
                <path
                  d="M10.6405 19.8474L10.6394 19.848C10.5903 19.8746 10.5353 19.8885 10.4795 19.8885C10.4247 19.8885 10.3707 19.8751 10.3223 19.8495L10.3018 19.8378L10.3018 19.8378L10.2429 19.8041C9.90935 19.6065 9.58386 19.3955 9.26721 19.1717L9.26714 19.1717C8.44427 18.5905 7.67543 17.9363 6.96996 17.2171C5.30323 15.51 3.6024 12.9758 3.6024 9.73732C3.6024 7.91329 4.32699 6.16397 5.61678 4.87419C6.90656 3.58441 8.65588 2.85982 10.4799 2.85982C12.3039 2.85982 14.0532 3.58441 15.343 4.87419C16.6328 6.16397 17.3574 7.91329 17.3574 9.73732C17.3574 12.9766 15.6575 15.5099 13.99 17.217C13.2842 17.9363 12.5151 18.5904 11.6918 19.1716L11.6916 19.1718C11.3751 19.3957 11.0497 19.6067 10.7162 19.8045C10.7157 19.8048 10.7151 19.8052 10.7146 19.8055L10.6604 19.8368L10.6405 19.8474ZM10.4799 12.6848C11.2616 12.6848 12.0113 12.3743 12.5641 11.8215C13.1169 11.2688 13.4274 10.519 13.4274 9.73732C13.4274 8.95559 13.1169 8.20588 12.5641 7.65312C12.0113 7.10036 11.2616 6.78982 10.4799 6.78982C9.69818 6.78982 8.94847 7.10036 8.3957 7.65312C7.84294 8.20588 7.5324 8.95559 7.5324 9.73732C7.5324 10.519 7.84294 11.2688 8.3957 11.8215C8.94847 12.3743 9.69818 12.6848 10.4799 12.6848Z"
                  stroke="black"
                  strokeOpacity="0.31"
                  strokeWidth="0.655"
                />
              </svg>
              <p className="font-bold text-base max-lg:text-[5px] text-white">
                PT Coconut Kawan Kerja{" "}
              </p>
            </div>
            <div className=" flex max-lg:gap-1 gap-3 items-center">
              <svg
                className="w-[21px] h-[22px] max-lg:w-[8px] max-lg:h-[8px]"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0782 20.0471L10.1393 20.0821L10.1638 20.096C10.2607 20.1485 10.3692 20.1759 10.4795 20.1759C10.5897 20.1759 10.6982 20.1485 10.7952 20.096L10.8196 20.0829L10.8816 20.0471C11.2232 19.8446 11.5565 19.6284 11.8807 19.3991C12.7201 18.8065 13.5043 18.1395 14.2239 17.4062C15.9216 15.6682 17.6849 13.057 17.6849 9.69725C17.6849 7.78636 16.9258 5.95374 15.5746 4.60254C14.2234 3.25134 12.3908 2.49225 10.4799 2.49225C8.56902 2.49225 6.7364 3.25134 5.3852 4.60254C4.034 5.95374 3.2749 7.78636 3.2749 9.69725C3.2749 13.0561 5.03904 15.6682 6.73592 17.4062C7.45524 18.1395 8.23917 18.8065 9.0782 19.3991C9.40271 19.6284 9.7363 19.8446 10.0782 20.0471ZM10.4799 12.3172C11.1748 12.3172 11.8412 12.0412 12.3325 11.5499C12.8239 11.0585 13.0999 10.3921 13.0999 9.69725C13.0999 9.00238 12.8239 8.33597 12.3325 7.84463C11.8412 7.35328 11.1748 7.07725 10.4799 7.07725C9.78504 7.07725 9.11863 7.35328 8.62728 7.84463C8.13594 8.33597 7.8599 9.00238 7.8599 9.69725C7.8599 10.3921 8.13594 11.0585 8.62728 11.5499C9.11863 12.0412 9.78504 12.3172 10.4799 12.3172Z"
                  fill="#820808"
                />
                <path
                  d="M10.6405 19.8073L10.6394 19.808C10.5903 19.8345 10.5353 19.8484 10.4795 19.8484C10.4247 19.8484 10.3707 19.835 10.3223 19.8094L10.3018 19.7977L10.3018 19.7977L10.2429 19.7641C9.90935 19.5664 9.58386 19.3554 9.26721 19.1317L9.26714 19.1316C8.44427 18.5504 7.67543 17.8962 6.96996 17.1771C5.30323 15.4699 3.6024 12.9357 3.6024 9.69725C3.6024 7.87322 4.32699 6.1239 5.61678 4.83412C6.90656 3.54434 8.65588 2.81975 10.4799 2.81975C12.3039 2.81975 14.0532 3.54434 15.343 4.83412C16.6328 6.1239 17.3574 7.87322 17.3574 9.69725C17.3574 12.9365 15.6575 15.4699 13.99 17.1769C13.2842 17.8962 12.5151 18.5504 11.6918 19.1316L11.6916 19.1317C11.3751 19.3556 11.0497 19.5667 10.7162 19.7645C10.7157 19.7648 10.7151 19.7651 10.7146 19.7654L10.6604 19.7967L10.6405 19.8073ZM10.4799 12.6447C11.2616 12.6447 12.0113 12.3342 12.5641 11.7814C13.1169 11.2287 13.4274 10.479 13.4274 9.69725C13.4274 8.91552 13.1169 8.16581 12.5641 7.61305C12.0113 7.06029 11.2616 6.74975 10.4799 6.74975C9.69818 6.74975 8.94847 7.06029 8.3957 7.61305C7.84294 8.16581 7.5324 8.91552 7.5324 9.69725C7.5324 10.479 7.84294 11.2287 8.3957 11.7814C8.94847 12.3342 9.69818 12.6447 10.4799 12.6447Z"
                  stroke="black"
                  strokeOpacity="0.31"
                  strokeWidth="0.655"
                />
              </svg>

              <p className="font-bold max-lg:text-[5px] text-base text-white">
                PT Coconut Kawan Kerja Perwakilan Jepang{" "}
              </p>
            </div>
            <div className=" flex max-lg:gap-1 gap-3 items-center">
              <svg
                className="w-[21px] h-[22px] max-lg:w-[8px] max-lg:h-[8px]"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0782 20.0072L10.1393 20.0421L10.1638 20.0561C10.2607 20.1085 10.3692 20.136 10.4795 20.136C10.5897 20.136 10.6982 20.1085 10.7952 20.0561L10.8196 20.043L10.8816 20.0072C11.2232 19.8047 11.5565 19.5885 11.8807 19.3592C12.7201 18.7666 13.5043 18.0996 14.2239 17.3662C15.9216 15.6283 17.6849 13.017 17.6849 9.65733C17.6849 7.74645 16.9258 5.91383 15.5746 4.56263C14.2234 3.21143 12.3908 2.45233 10.4799 2.45233C8.56902 2.45233 6.7364 3.21143 5.3852 4.56263C4.034 5.91383 3.2749 7.74645 3.2749 9.65733C3.2749 13.0162 5.03904 15.6283 6.73592 17.3662C7.45524 18.0996 8.23917 18.7666 9.0782 19.3592C9.40271 19.5885 9.7363 19.8047 10.0782 20.0072ZM10.4799 12.2773C11.1748 12.2773 11.8412 12.0013 12.3325 11.51C12.8239 11.0186 13.0999 10.3522 13.0999 9.65733C13.0999 8.96246 12.8239 8.29606 12.3325 7.80471C11.8412 7.31337 11.1748 7.03733 10.4799 7.03733C9.78504 7.03733 9.11863 7.31337 8.62728 7.80471C8.13594 8.29606 7.8599 8.96246 7.8599 9.65733C7.8599 10.3522 8.13594 11.0186 8.62728 11.51C9.11863 12.0013 9.78504 12.2773 10.4799 12.2773Z"
                  fill="#FEC007"
                />
                <path
                  d="M10.6405 19.7674L10.6394 19.768C10.5903 19.7946 10.5353 19.8085 10.4795 19.8085C10.4247 19.8085 10.3707 19.7951 10.3223 19.7695L10.3018 19.7578L10.3018 19.7578L10.2429 19.7241C9.90935 19.5265 9.58386 19.3155 9.26721 19.0917L9.26714 19.0917C8.44427 18.5105 7.67543 17.8563 6.96996 17.1372C5.30323 15.43 3.6024 12.8958 3.6024 9.65733C3.6024 7.8333 4.32699 6.08399 5.61678 4.7942C6.90656 3.50442 8.65588 2.77983 10.4799 2.77983C12.3039 2.77983 14.0532 3.50442 15.343 4.7942C16.6328 6.08399 17.3574 7.8333 17.3574 9.65733C17.3574 12.8966 15.6575 15.4299 13.99 17.137C13.2842 17.8563 12.5151 18.5105 11.6918 19.0916L11.6916 19.0918C11.3751 19.3157 11.0497 19.5268 10.7162 19.7245C10.7157 19.7249 10.7151 19.7252 10.7146 19.7255L10.6604 19.7568L10.6405 19.7674ZM10.4799 12.6048C11.2616 12.6048 12.0113 12.2943 12.5641 11.7415C13.1169 11.1888 13.4274 10.4391 13.4274 9.65733C13.4274 8.87561 13.1169 8.1259 12.5641 7.57313C12.0113 7.02037 11.2616 6.70983 10.4799 6.70983C9.69818 6.70983 8.94847 7.02037 8.3957 7.57313C7.84294 8.1259 7.5324 8.87561 7.5324 9.65733C7.5324 10.4391 7.84294 11.1888 8.3957 11.7415C8.94847 12.2943 9.69818 12.6048 10.4799 12.6048Z"
                  stroke="black"
                  strokeOpacity="0.31"
                  strokeWidth="0.655"
                />
              </svg>

              <p className="font-bold max-lg:text-[5px] text-base text-white">
                Negara Tujuan Ekspor Briket Batok Kelapa{" "}
              </p>
            </div>
            <div className=" flex max-lg:gap-1 gap-3 items-center">
              <svg
                className="w-[21px] h-[22px] max-lg:w-[8px] max-lg:h-[8px]"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0782 19.9672L10.1393 20.0021L10.1638 20.0161C10.2607 20.0685 10.3692 20.096 10.4795 20.096C10.5897 20.096 10.6982 20.0685 10.7952 20.0161L10.8196 20.003L10.8816 19.9672C11.2232 19.7646 11.5565 19.5485 11.8807 19.3192C12.7201 18.7266 13.5043 18.0596 14.2239 17.3262C15.9216 15.5883 17.6849 12.977 17.6849 9.61729C17.6849 7.70641 16.9258 5.87379 15.5746 4.52259C14.2234 3.17139 12.3908 2.41229 10.4799 2.41229C8.56902 2.41229 6.7364 3.17139 5.3852 4.52259C4.034 5.87379 3.2749 7.70641 3.2749 9.61729C3.2749 12.9761 5.03904 15.5883 6.73592 17.3262C7.45524 18.0595 8.23917 18.7265 9.0782 19.3192C9.40271 19.5485 9.7363 19.7647 10.0782 19.9672ZM10.4799 12.2373C11.1748 12.2373 11.8412 11.9613 12.3325 11.4699C12.8239 10.9786 13.0999 10.3122 13.0999 9.61729C13.0999 8.92243 12.8239 8.25602 12.3325 7.76467C11.8412 7.27333 11.1748 6.99729 10.4799 6.99729C9.78504 6.99729 9.11863 7.27333 8.62728 7.76467C8.13594 8.25602 7.8599 8.92243 7.8599 9.61729C7.8599 10.3122 8.13594 10.9786 8.62728 11.4699C9.11863 11.9613 9.78504 12.2373 10.4799 12.2373Z"
                  fill="#127493"
                />
                <path
                  d="M10.6405 19.7274L10.6394 19.728C10.5903 19.7546 10.5353 19.7685 10.4795 19.7685C10.4247 19.7685 10.3707 19.7551 10.3223 19.7295L10.3018 19.7178L10.3018 19.7177L10.2429 19.6841C9.90935 19.4864 9.58386 19.2755 9.26721 19.0517L9.26714 19.0516C8.44427 18.4704 7.67543 17.8163 6.96996 17.0971C5.30323 15.39 3.6024 12.8557 3.6024 9.61729C3.6024 7.79327 4.32699 6.04395 5.61678 4.75417C6.90656 3.46438 8.65588 2.73979 10.4799 2.73979C12.3039 2.73979 14.0532 3.46438 15.343 4.75417C16.6328 6.04395 17.3574 7.79327 17.3574 9.61729C17.3574 12.8566 15.6575 15.3899 13.99 17.097C13.2842 17.8162 12.5151 18.4704 11.6918 19.0516L11.6916 19.0518C11.3751 19.2756 11.0497 19.4867 10.7162 19.6845C10.7157 19.6848 10.7151 19.6851 10.7146 19.6855L10.6604 19.7168L10.6405 19.7274ZM10.4799 12.5648C11.2616 12.5648 12.0113 12.2543 12.5641 11.7015C13.1169 11.1487 13.4274 10.399 13.4274 9.61729C13.4274 8.83557 13.1169 8.08586 12.5641 7.53309C12.0113 6.98033 11.2616 6.66979 10.4799 6.66979C9.69818 6.66979 8.94847 6.98033 8.3957 7.53309C7.84294 8.08586 7.5324 8.83557 7.5324 9.61729C7.5324 10.399 7.84294 11.1487 8.3957 11.7015C8.94847 12.2543 9.69818 12.5648 10.4799 12.5648Z"
                  stroke="black"
                  strokeOpacity="0.31"
                  strokeWidth="0.655"
                />
              </svg>

              <p className="font-bold max-lg:text-[5px] text-base text-white">
                Negara Tujuan Ekspor Teh Nipah
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Product & Activities (gallery) */}
      <div className="bg-[#3F9D00] py-20 relative">
        <Image
          src="/image/Ellipse.png"
          width={673}
          height={673}
          className=" absolute top-0 z-0 right-0"
          alt="ellipse"
        />
        <div
          id="product"
          className="relative font-montserrat mb-14 px-[120px] max-lg:px-8 z-40 flex max-lg:flex-col items-center"
        >
          <div className="block">
            <div className="relative w-[175px] max-lg:w-full h-[51px] max-lg:h-[36.98px]">
              <svg
                viewBox="0 0 175 51"
                fill="none"
                className="absolute max-lg:-translate-x-1/2 max-lg:transform max-lg:left-1/2 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5.98116"
                  width="172.611"
                  height="44.8623"
                  transform="rotate(-1.95 0 5.98116)"
                  fill="white"
                />
              </svg>
              <p className="text-[#3F9D00] text-2xl max-lg:text-base font-bold z-10 absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-1/2">
                Product
              </p>
            </div>
            <p className="text-white text-2xl max-lg:text-base max-lg:text-center font-bold pt-4">
              100% Quality Original Coconut Products
            </p>
          </div>
          <Link
            href="/product"
            className="text-[#3F9D00] bg-white max-lg:hidden focus:outline-none focus:ring-4 focus:ring-[#3F9D00] font-bold rounded-full text-xl px-8 py-3 text-center ml-auto z-50"
          >
            Read More
          </Link>
        </div>

        <div className="my-14 mx-auto z-50 px-[120px] max-lg:px-8">
          <div className="flex justify-between max-lg:flex-col max-lg:gap-0 gap-10 max-lg:space-y-4 z-50">
            <div className="bg-white w-1/3 max-lg:w-full shadow z-50 rounded overflow-hidden">
              <Image
                src="/image/image-1.png"
                width={392}
                height={223}
                className="object-cover w-full"
                alt=""
              />
              <div className="px-4 py-6">
                <span className="block text-[#5C5C5C] font-semibold font-poppins text-xl">
                  Charcoal
                </span>
                <h3 className="mt-3 font-medium text-base font-poppins text-[#868686] pb-4">
                  <Link href="/productdetail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem esse explicabo rem alias. Nam voluptatibus maiores
                    tempore harum quod maxime saepe natus ea consequuntur, nihil
                    aspernatur nobis. Id, fugit dolor?
                  </Link>
                </h3>
                <div className="flex gap-2 items-center font-montserrat">
                  <span className="flex gap-1 items-center text-sm">
                    <div
                      type="button"
                      className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
                    >
                      Leadership
                    </div>
                  </span>
                  <span className="flex gap-1 items-center text-sm">
                    <div
                      type="button"
                      className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
                    >
                      Leadership
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white w-1/3 max-lg:w-full shadow rounded z-50 overflow-hidden">
              <Image
                src="/image/image-2.png"
                width={392}
                height={223}
                className="object-cover w-full"
                alt=""
              />
              <div className="px-4 py-6">
                <span className="block text-[#5C5C5C] font-poppins font-semibold text-xl">
                  Briquettes
                </span>
                <h3 className="mt-3 font-medium text-base font-poppins text-[#868686] pb-4">
                  <Link href="/productdetail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem esse explicabo rem alias. Nam voluptatibus maiores
                    tempore harum quod maxime saepe natus ea consequuntur, nihil
                    aspernatur nobis. Id, fugit dolor?
                  </Link>
                </h3>
                <div className="flex gap-2 items-center font-montserrat">
                  <span className="flex gap-1 items-center text-sm">
                    <div
                      type="button"
                      className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
                    >
                      Leadership
                    </div>
                  </span>
                  <span className="flex gap-1 items-center text-sm">
                    <div
                      type="button"
                      className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
                    >
                      Leadership
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white w-1/3 max-lg:w-full shadow rounded z-50 overflow-hidden">
              <Image
                src="/image/image-3.png"
                width={392}
                height={223}
                className="object-cover w-full"
                alt=""
              />
              <div className="px-4 py-6">
                <span className="block text-[#5C5C5C] font-poppins font-semibold text-xl">
                  Liquid Sugar
                </span>
                <h3 className="mt-3 font-medium text-base font-poppins text-[#868686] pb-4">
                  <Link href="/productdetail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem esse explicabo rem alias. Nam voluptatibus maiores
                    tempore harum quod maxime saepe natus ea consequuntur, nihil
                    aspernatur nobis. Id, fugit dolor?
                  </Link>
                </h3>
                <div className="flex gap-2 items-center font-montserrat">
                  <span className="flex gap-1 items-center text-sm">
                    <div
                      type="button"
                      className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
                    >
                      Leadership
                    </div>
                  </span>
                  <span className="flex gap-1 items-center text-sm">
                    <div
                      type="button"
                      className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
                    >
                      Leadership
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 w-44 justify-center">
            <Link
              href="/product"
              className="text-[#3F9D00] bg-white font-montserrat max-lg:block hidden focus:outline-none focus:ring-4 focus:ring-[#3F9D00] font-bold rounded-full text-base px-8 py-3 text-center ml-auto z-50"
            >
              Read More
            </Link>
          </div>
        </div>
        <Image
          src="/image/Ellipse 2.png"
          width={273}
          height={273}
          className=" absolute top-1/3 z-0 left-0"
          alt="ellipse"
        />
        <div
          id="gallery"
          className="relative font-montserrat px-[120px] w-full max-lg:px-8 mt-40 max-lg:mt-10"
        >
          <div className="absolute left-1/2 transform w-full max-lg:h-[33.71px] -translate-x-1/2 h-[56px]">
            <p className="text-2xl max-lg:text-base font-bold absolute text-[#3F9D00] transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  z-10">
              Our Activities
            </p>
            <svg
              viewBox="0 0 288 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" -z-0 w-[300px] max-lg:w-[214.87px] absolute left-1/2 transform -translate-x-1/2"
            >
              <rect
                x="0.33252"
                y="10.5485"
                width="285.974"
                height="44.8623"
                transform="rotate(-1.95 0.33252 10.5485)"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold max-lg:text-base  text-white text-center pt-20 max-lg:pt-12">
            Explore our activities with the creative team!
          </p>
        </div>
        <div className="mt-16 px-[120px] max-lg:hidden max-lg:mt-8 relative">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            className="relative"
          >
            {slidess.map((slideGroup, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex mx-[120px] max-lg:mx-0 items-center justify-center px-0">
                  {slideGroup.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative w-full">
                      <Image
                        src={image}
                        width={300}
                        height={300}
                        alt={`Slide ${slideIndex} Image ${imageIndex}`}
                        className="object-cover w-full"
                      />
                      <div className="absolute bottom-0 w-full z-40">
                        <p className="text-white text-center bg-black h-14 py-3 px-1 bg-opacity-25 text-xs font-extrabold">
                          {slides[slideIndex][imageIndex]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-16 hidden max-lg:flex max-lg:mt-8 relative">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            className="relative"
          >
            {slides3.map((slideGroup, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="flex mx-[120px] max-lg:mx-0 items-center justify-center px-0">
                  {slideGroup.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative w-[144px]">
                      <Image
                        src={image}
                        width={144}
                        height={144}
                        alt={`Slide ${slideIndex} Image ${imageIndex}`}
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 w-full z-40">
                        <p className="text-white text-center bg-black h-8 py-1 px-1 bg-opacity-25 text-xs max-lg:text-[8px] max-lg:leading-[10px] font-extrabold">
                          {slidestext3[slideIndex][imageIndex]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="text-[#3F9D00] bg-white  focus:outline-none focus:ring-4  focus:ring-[#3F9D00] font-bold rounded-full text-xl max-lg:text-base px-10 py-3 text-center"
          >
            More
          </Link>
        </div>
      </div>
      {/* Testimoni */}
      <div
        id="testimoni"
        className="py-20 font-montserrat px-[120px] max-lg:px-0"
      >
        <div className="block">
          <div className="relative w-[175px] max-lg:w-full h-[52px] max-lg:h-[45.24px]">
            <p className="text-white text-2xl max-lg:text-base font-bold z-10 absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
              Testimoni
            </p>
            <svg
              viewBox="0 0 175 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-lg:absolute w-[175px] max-lg:w-[155.26px] h-[52px] max-lg:h-[45.24px] max-lg:transform max-lg:left-1/2 max-lg:-translate-x-1/2"
            >
              <rect
                y="6.21094"
                width="172.611"
                height="44.8623"
                transform="rotate(-1.95 0 6.21094)"
                fill="#3F9D00"
              />
            </svg>
          </div>
          <p className="text-black text-2xl max-lg:text-base max-lg:text-center font-bold pt-4">
            What Our Clients Are Saying?
          </p>
          <div className="max-lg:hidden">
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              className="mt-20 relative"
            >
              {slidesTestimoni.map((slideGroup, slidesIndex) => (
                <SwiperSlide key={slidesIndex}>
                  <div className="flex mx-auto items-center justify-center px-20 gap-8">
                    {slideGroup.map((image, imagesIndex) => (
                      <div
                        key={imagesIndex}
                        className="p-6 bg-white border border-[#3F9D00] rounded-lg"
                      >
                        <div className="relative w-full">
                          <div>
                            <Image
                              src="/image/petik.jpg"
                              width={30}
                              height={30}
                              className="absolute top-4 right-4"
                              alt=""
                            />
                            <div className="justify-between flex gap-4 items-center">
                              <div className="block w-2/5 space-y-3 relative text-center mx-auto">
                                <Image
                                  src="/image/bingkai.png"
                                  width={170.33}
                                  height={168.92}
                                  className="absolute top-6 right-2"
                                  alt=""
                                />
                                <Image
                                  src={image}
                                  alt={`Slide ${slidesIndex} Image ${imagesIndex}`}
                                  width={170.33}
                                  height={168.92}
                                  className="object-cover rounded-[55.05px] mx-auto"
                                />
                                <p className="text-[#3F9D00] font-bold text-xl leading-3">
                                  {
                                    slidesNameTestimoni[slidesIndex][
                                      imagesIndex
                                    ]
                                  }
                                </p>
                                <p className="text-black font-normal text-sm">
                                  {
                                    slidesTitleTestimoni[slidesIndex][
                                      imagesIndex
                                    ]
                                  }
                                </p>
                              </div>
                              <p className="font-normal w-3/5 italic text-base text-black text-center">
                                {slidesTextTestimoni[slidesIndex][imagesIndex]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden max-lg:flex">
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              className="mt-20 max-lg:mt-10 relative"
            >
              {slidesTestimoniResponsive.map((slideGroup, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="flex mx-auto items-center justify-center px-20 max-lg:px-6 gap-8 max-lg:gap-0">
                    {slideGroup.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="p-4 bg-white border border-[#3F9D00] rounded-lg"
                      >
                        <div className="relative w-full">
                          <div>
                            <Image
                              src="/image/petik.jpg"
                              className="absolute top-2 right-4"
                              width={10}
                              height={10}
                              alt=""
                            />
                            <div className="justify-between flex gap-4 items-center">
                              <div className="block w-2/5 space-y-3 relative text-center mx-auto">
                                <Image
                                  src="/image/bingkai.png"
                                  width={114.12}
                                  height={113.18}
                                  className="absolute top-6 right-2"
                                  alt=""
                                />
                                <Image
                                  src={image}
                                  alt={`Slide ${slideIndex} Image ${imageIndex}`}
                                  width={114.12}
                                  height={113.18}
                                  className="object-cover rounded-[36.89px] mx-auto"
                                />
                                <p className="text-[#3F9D00] font-bold text-sm mt-2 leading-[1px]">
                                  {
                                    slidesNameTestimoniResponsive[slideIndex][
                                      imageIndex
                                    ]
                                  }
                                </p>
                                <p className="text-black font-normal text-xs">
                                  {
                                    slidesTitleTestimoniResponsive[slideIndex][
                                      imageIndex
                                    ]
                                  }
                                </p>
                              </div>
                              <p className="font-normal w-3/5 italic text-base max-lg:text-xs text-black text-center">
                                {
                                  slidesTextTestimoniResponsive[slideIndex][
                                    imageIndex
                                  ]
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
