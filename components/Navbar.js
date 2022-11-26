import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [color, setColor] = useState("transparant");
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="sticky max-[1240px]:mt-0 drop-shadow-lg  min-[600px]:mt-12  left-0 top-0 w-full z-10 ease-in duration-300 bg-white ">
        <div className="max-w-[1240px] m-auto flex justify-between items-center min-[320px]:text-center max-[600px]:bg-white ">
          <p className=" sm:flex p-3 text-[24px] hover:text-red-600 mx-2 text-zinc-600 font-bold ">
            <Link href="/" passHref>
              HAMENGKU<span className="text-red-500">KARYA</span>
            </Link>
          </p>
          <ul className="hidden sm:flex text-sm text-zinc-600 font-bold ">
            <li className="p-3 text-[14px] hover:text-red-600 mx-2 ">
              <Link href="/" passHref>
                HOME
              </Link>
            </li>
            <li className="p-3 text-[14px] hover:text-red-600 mx-2">
              <Link href="/about" passHref>
                ABOUT
              </Link>
            </li>
            <li className="p-3 text-[14px] hover:text-red-600 mx-2">
              <Link href="/service" passHref>
                SERVICES
              </Link>
            </li>
            <li className="p-3 text-[14px] hover:text-red-600 mx-2">
              <Link href="/client" passHref>
                CLIENT
              </Link>
            </li>
            <li className="p-3 text-[14px] hover:text-red-600 mx-2">
              <Link href="/project" passHref>
                PROJECT
              </Link>
            </li>
            <li className="p-3 text-[14px] hover:text-red-600 mx-2">
              <Link href="/contact" passHref>
                CONTACT
              </Link>
            </li>
          </ul>

          <div onClick={handleNav} className="mr-5 sm:hidden z-10  ">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 mt-14 flex justify-left items-center w-full h-80 bg-white text-left p-3  font-bold ease-in duration-100"
                : "sm:hidden absolute  top-0 left-[-100%] right-0 bottom-0 mt-14 flex justify-left items-center h-80 w-full  bg-zinc-900 text-left p-3  font-bold ease-in duration-100"
            }
          >
            <ul className="text-zinc-900 font-bold mt-[-20]">
              <li className="p-3 text-[14px] hover:text-red-600 mx-2 ">
                <Link href="/" passHref>
                  HOME
                </Link>
              </li>
              <li className="p-3 text-[14px] hover:text-red-600 mx-2">
                <Link href="/about" passHref>
                  ABOUT
                </Link>
              </li>
              <li className="p-3 text-[14px] hover:text-red-600 mx-2">
                <Link href="/services" passHref>
                  SERVICES
                </Link>
              </li>
              <li className="p-3 text-[14px] hover:text-red-600 mx-2">
                <Link href="/client" passHref>
                  CLIENT
                </Link>
              </li>
              <li className="p-3 text-[14px] hover:text-red-600 mx-2">
                <Link href="/project" passHref>
                  PROJECT
                </Link>
              </li>
              <li className="p-3 text-[14px] hover:text-red-600 mx-2">
                <Link href="/contact" passHref>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
