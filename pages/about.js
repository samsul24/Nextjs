import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="absolute left-0 top-0 w-full z-10 ease-in duration-300 bg-gray-700 max-[600px]:p-1 max-[600px]:hidden  ">
        <div className=" flex justify-between items-center ">
          <ul className=" sm:flex text-sm  text-white">
            <li className="p-3 text-[14px] hover:text-red-500 mx-2 ">
              <Link href="/" passHref className="flex">
                <svg
                  className="w-5 h-5  text-white  hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                &nbsp; Jl. Pasung Grigis No.3
              </Link>
            </li>
            <li className="p-3 text-[14px] hover:text-red-500 mx-2">
              <Link href="/" passHref className="flex">
                <svg
                  className="w-5 h-5  text-white  hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>
                &nbsp;
                <p>(0361) 4714819</p>
              </Link>
            </li>
          </ul>
          <div className="flex p-3">
            <a className="ml-5" href="#twitter">
              <svg
                class="w-6 h-6 text-white hover:text-blue-300  fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a className="ml-5" href="#instagram">
              <svg
                className="w-6 h-6 text-white  hover:text-rose-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-7 h-7"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a className="ml-5" href="#facebook">
              <svg
                className="w-6 h-6 text-white hover:text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a className="ml-5" href="#telegram">
              <svg
                class="w-6 h-6 text-white hover:text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="ml-8 mt-14">
        <ul className="flex text-[12px] font-bold">
          <li>Home</li>
          <li className="mx-4 text-red-500">/</li>
          <li className="text-red-500">About</li>
        </ul>
      </div>

      <div className="max-w-md mx-6 mt-20 mb-14 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
        <div className="md:flex  ">
          <div className="p-8 mt-8  ">
            <Image
              className="rounded-2xl  "
              height="100"
              width="900"
              src="http://www.hamengkukarya.co.id/img/logo-hmk.png"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className=" p-9 text-[20px] text-white bg-red-500 ">
              <h1 className="text-3xl font-bold mb-5">About</h1>
              <p className="indent-8">
                PT.Hamengku Karya Founded in 1981, which initially Specializes
                in&nbsp;
                <b>Mechanical, Electrical & Plumbing Construction</b> for
                retail, restaurants, shopping centers, hotels and hospitality
                projects throughout Indonesia.
                <br /> In line with experience, we also expand our business in
                the fields of&nbsp;
                <b>Civil works, building automation & IT infrastructure.</b>
                <br /> Also in several fields of work to maintain and strengthen
                our services in the&nbsp;
                <b>Manage services and Internet Service Providers.</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-[600px]:mx-64">
        <h1 className=" text-4xl text-center text-gray-600 font-semibold dark:text-zinc-600 mb-5 ">
          MORE OBOUT US
        </h1>
      </div>
      <div className="md:flex  ">
        <div className="p-2 mx-9 ">
          <div className="justify-center">
            <a className="p-3 text-center" href="#Visi&misi">
              <svg
                className="w-12 h-12 m-auto  text-red-500 hover:text-red-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z" />
              </svg>
              <hr class="my-4 mx-auto h-[1px] bg-red-100 rounded border-0 md:my-5 dark:bg-red-500" />

              <h1 className="text-2xl font-semibold text-red-500 mb-4">
                Philosophy
              </h1>
              <p className="text-[14px]">
                The first rule of any technology used in a business is that
                automation applied to an efficient operation will magnify the
                efficiency. The second is that automation applied to an
                inefficient operation will magnify the inefficiency.
              </p>
            </a>
            <hr class="my-4 mx-auto h-1 bg-red-100 rounded border-0 md:my-5 dark:bg-red-700" />
          </div>
        </div>
        <div className="p-2 mx-9 ">
          <div className="justify-center">
            <a className="p-3 text-center" href="#Visi&misi">
              <svg
                className="w-12 h-12 m-auto  text-red-500 hover:text-red-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z" />
              </svg>
              <hr class="my-4 mx-auto h-[1px] bg-red-100 rounded border-0 md:my-5 dark:bg-red-500" />

              <h1 className="text-2xl font-semibold text-red-500 mb-4">
                Visi & Misi
              </h1>
              <p className="text-[14px]">
                To be a leader in the Contractor Technology Industry also
                provides quality products and services to prepare for the
                excellence of Industrial Technology 4.0 in the world.
              </p>
            </a>
            <hr class="my-4 mx-auto h-1 bg-red-100 rounded border-0 md:my-5 dark:bg-red-700" />
          </div>
        </div>
        <div className="p-2 mx-9 ">
          <div className="justify-center">
            <a className="p-3 text-center" href="#Visi&misi">
              <svg
                className="w-12 h-12 m-auto  text-red-500 hover:text-red-700 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z" />
              </svg>
              <hr class="my-4 mx-auto h-[1px] bg-red-100 rounded border-0 md:my-5 dark:bg-red-500" />

              <h1 className="text-2xl font-semibold text-red-500 mb-4">
                Team Work
              </h1>
              <p className="text-[14px]">
                Teamwork is the ability to work together toward a common vision.
                The ability to direct individual accomplishments toward
                organizational objectives. It is the fuel that allows common
                people to attain uncommon result s.
              </p>
            </a>
            <hr class="my-4 mx-auto h-1 bg-red-100 rounded border-0 md:my-5 dark:bg-red-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
