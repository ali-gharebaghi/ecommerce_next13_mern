"use client";

import Image from "next/image";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
const Header = () => {
  const [logoHover, setLogoHover] = useState(0);
  return (
    <header className="container mx-auto py-2">
      <div className="flex justify-between items-start ">
        <div className="relative flex flex-col h-52 mt-2 ">
          <Link
            onMouseEnter={() => setLogoHover(1)}
            onMouseLeave={() => setLogoHover(0)}
            href={"/"}
            className=" z-30 bg-white logo p-4 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] text-center transition-all  duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.50)]"
          >
            <Image
              src={"/logo.png"}
              className="rounded-lg"
              //   objectFit="cover"
              width={100}
              height={100}
              alt="logo"
              //   layout="fixed"
            />
            <div>فروشگاه فایل مرنا</div>
          </Link>
          <div
            onMouseEnter={() => setLogoHover(1)}
            onMouseLeave={() => setLogoHover(0)}
            className={
              logoHover == 0
                ? "absolute z-10 bottom-20 right-0 left-0 flex justify-between items-center  p-2 text-indigo-600 rounded-br-md rounded-bl-md transition-all duration-500 bg-zinc-100 "
                : "absolute z-20 bottom-0 right-0 left-0 flex justify-between items-center  p-2 text-indigo-600 rounded-br-md rounded-bl-md transition-all duration-500 bg-zinc-100"
            }
          >
            <Link
              className="transition-all duration-300 text-[1.8rem] hover:text-orange-500"
              href={"/"}
            >
              <BsTelegram />
            </Link>
            <Link
              className="transition-all duration-300 text-[1.8rem] hover:text-orange-500"
              href={"/"}
            >
              <AiFillTwitterCircle />
            </Link>
            <Link
              className="transition-all duration-300 text-[1.8rem] hover:text-orange-500"
              href={"/"}
            >
              <AiFillYoutube />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-5/6 h-40 justify-between py-4">
          <div className=" flex justify-between items-center w-full">
            <nav className="">
              <ul className=" flex items-center justify-start gap-3">
                <li>
                  <Link
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white"
                    href={"/"}
                  >
                    خانه
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white"
                    href={"/"}
                  >
                    اپلیکیشن ها
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white"
                    href={"/"}
                  >
                    کتاب ها
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white"
                    href={"/"}
                  >
                    فایل های گرافیکی
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white"
                    href={"/"}
                  >
                    وبلاگ
                  </Link>
                </li>
              </ul>
            </nav>
            <div className=" flex flex-col items-end gap-2">
              <div className="flex gap-2 items-center">
                <div>09331571848</div>
                <div className=" bg-zinc-200 rotate-12">
                  <BsTelephoneFill className=" rounded w-9 h-9 -rotate-12 p-2" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>ali.dev720@gmail.com</div>
                <div className=" bg-zinc-200 rotate-12">
                  <MdOutlineMail className="  w-9 h-9 -rotate-12 p-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center rounded-lg justify-start w-3/4 ml-8 p-2 shadow-[0px_0px_5px_rgba(0,0,0,0.15)]">
              <input
              className=" outline-none w-full p-1"
               placeholder="جستجو بین محصولات... " type="text" />

              <label htmlFor="productsSearch" className="w-12">
                <BiSearchAlt className="w-8 h-8" />
              </label>
            </div>
            <div className="flex gap-4 items-center w-1/4 justify-end">
              <div>
                <BsFillPersonFill className=" bg-zinc-400 w-12 h-12 rounded text-white p-2" />
              </div>
              <div className=" bg-orange-400 flex gap-2 justify-center items-center rounded-md p-2">
                <div className=" text-orange-500 bg-white rounded-full flex justify-center items-center w-8 h-8">2</div>
                <div className=" text-white">سبد خرید</div>
                <div className=" text-orange-500 bg-white rounded-lg flex justify-center items-center">
                  <AiOutlineShopping className="w-6 h-6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
