"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  return (
    <div className=" ">
      {/* Title Product */}
      <div className="px-[120px] max-lg:px-8 block space-y-6 mt-16 py-16 max-lg:py-10">
        <h1 className="text-black font-bold text-5xl max-lg:text-3xl font-poppins">
          Arang Kelapa
        </h1>
        <div className="flex gap-2 font-montserrat items-center">
          <span className="flex gap-1 items-center text-sm">
            <div
              type="button"
              className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
            >
              Unggulan
            </div>
          </span>
          <span className="flex gap-1 items-center text-sm">
            <div
              type="button"
              className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs px-6 py-2 text-center "
            >
              Arang
            </div>
          </span>
        </div>
      </div>
      {/* Hero */}
      <div className="text-center h-[400px] max-lg:h-[263px] font-poppins relative">
        <Image
          src="/image/hero-product-detail.png"
          alt=""
          fill
          className=" w-full object-cover"
        />
      </div>
      {/* Detail Product */}
      <div className="px-[120px] max-lg:px-8 py-20 max-lg:py-6 font-montserrat text-black">
        <div className="mb-5">
          <h1 className="font-bold text-xl max-lg:text-base mb-6">
            Sumber Bahan Baku Kelapa dari Sulawesi
          </h1>
          <p className="text-base font-medium max-lg:text-xs">
            Perusahaan kami didirikan pada tahun 2007 dengan status sebagai
            persekutuan komanditer. Pada tahun 2022 mendapatkan investasi dari
            Jepang yang kemudian mengubah status perusahaan menjadi perseroan
            terbatas.
          </p>
        </div>
        <div className="mb-5">
          <h1 className="font-bold text-xl max-lg:text-base mb-6">
            Spesifikasi Arang Batok Kelapa untuk Karbon Aktif
          </h1>
          <p className="text-base font-medium max-lg:text-xs">
            Kami mengolah kelapa terbaik dari pulau Sulawesi menjadi produk
            premium untuk kebutuhan anda. Liquid Sugar kami
            adalah arang dan briket. Selain itu kami memiliki produk lain
            seperti gula cair dan teh nipah Produk-produk kami telah diekspor ke
            berbagai negara seperti Mesir, Jordania, Arab Saudi, Turki dan
            Inggris.
          </p>
        </div>
        <div className="mb-5">
          <h1 className="font-bold text-xl max-lg:text-base mb-6">
            Arang Tempurung Kelapa untuk Shisha dan Barbeque
          </h1>
          <p className="text-base font-medium max-lg:text-xs">
            Kami saat ini mendapatkan pembinaan langsung dari beberapa
            Kementerian di Indonesia antara lain Kementerian Keuangan melalui
            Direktoran Jenderal Bea dan Cukai, Kementerian Pertanian melalui
            Karantina Pertanian, Kementerian Koperasi dan UKM, Bank Indonesia
            Perwakilan Sulawesi Selatan, serta Xpora Bank BNI Cabang Makassar
          </p>
        </div>
      </div>
      {/* Lainnya */}
      <div className="px-[120px] max-lg:px-8 mb-20">
        <h1 className="text-4xl font-bold text-black py-10 max-lg:py-5 font-montserrat max-lg:text-base">
          Produk Kami Lainnya
        </h1>
        <div className="grid grid-cols-3 col-span-3 max-lg:grid-cols-2 max-lg:col-span-2 max-lg:gap-4 gap-10">
          <div className="bg-white w-full max-w-lg mx-auto z-50 rounded overflow-hidden">
            <Image
              src="/image/image-1.png"
              width={392}
              height={223}
              className="object-cover max-lg:hidden w-full"
              alt=""
            />
            <Image
              src="/image/image-1.png"
              width={188.12}
              height={107.02}
              className="object-cover max-lg:block hidden w-full"
              alt=""
            />
            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
              <span className="block text-[#5C5C5C] font-semibold text-xl max-lg:text-xs font-poppins">
                Arang
              </span>
              <h3 className="mt-3 font-medium text-base max-lg:text-xs font-poppins text-[#868686] pb-4">
                <Link href="/productdetail">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at eligendi voluptatibus fugiat adipisci veritatis
                  atque distinctio omnis? Commodi nostrum aperiam modi hic
                  aliquid atque? Accusamus cumque doloremque dignissimos est?
                </Link>
              </h3>
              <div className="flex gap-2 font-montserrat items-center">
                <span className="flex gap-1 items-center text-sm">
                  <div
                    type="button"
                    className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 text-center "
                  >
                    Leadership
                  </div>
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <div
                    type="button"
                    className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 text-center "
                  >
                    Leadership
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white w-full max-w-lg mx-auto rounded z-50 overflow-hidden">
            <Image
              src="/image/image-2.png"
              width={392}
              height={223}
              className="object-cover max-lg:hidden w-full"
              alt=""
            />
            <Image
              src="/image/image-2.png"
              width={188.12}
              height={107.02}
              className="object-cover max-lg:block hidden w-full"
              alt=""
            />
            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
              <span className="block text-[#5C5C5C] font-semibold text-xl max-lg:text-xs font-poppins">
                Briket
              </span>
              <h3 className="mt-3 font-medium text-base max-lg:text-xs font-poppins text-[#868686] pb-4">
                <Link href="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at eligendi voluptatibus fugiat adipisci veritatis
                  atque distinctio omnis? Commodi nostrum aperiam modi hic
                  aliquid atque? Accusamus cumque doloremque dignissimos est?
                </Link>
              </h3>
              <div className="flex gap-2 font-montserrat items-center">
                <span className="flex gap-1 items-center text-sm">
                  <div
                    type="button"
                    className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 text-center "
                  >
                    Leadership
                  </div>
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <div
                    type="button"
                    className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 text-center "
                  >
                    Leadership
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white w-full max-w-lg mx-auto rounded z-50 overflow-hidden">
            <Image
              src="/image/image-3.png"
              width={392}
              height={223}
              className="object-cover max-lg:hidden w-full"
              alt=""
            />
            <Image
              src="/image/image-3.png"
              width={188.12}
              height={107.02}
              className="object-cover max-lg:block hidden w-full"
              alt=""
            />
            <div className="px-4 py-6 max-lg:px-0 max-lg:py-2">
              <span className="block text-[#5C5C5C] font-semibold text-xl max-lg:text-xs font-poppins">
                Liquid Sugar
              </span>
              <h3 className="mt-3 font-medium text-base max-lg:text-xs font-poppins text-[#868686] pb-4">
                <Link href="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione at eligendi voluptatibus fugiat adipisci veritatis
                  atque distinctio omnis? Commodi nostrum aperiam modi hic
                  aliquid atque? Accusamus cumque doloremque dignissimos est?
                </Link>
              </h3>
              <div className="flex gap-2 font-montserrat items-center">
                <span className="flex gap-1 items-center text-sm">
                  <div
                    type="button"
                    className="text-white bg-[#9A8AF8]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 text-center "
                  >
                    Leadership
                  </div>
                </span>
                <span className="flex gap-1 items-center text-sm">
                  <div
                    type="button"
                    className="text-white bg-[#D3126F]  focus:outline-none focus:ring-4  font-semibold rounded-full text-xs max-lg:text-[7px] px-6 max-lg:px-2 max-lg:py-1 py-2 text-center "
                  >
                    Leadership
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
