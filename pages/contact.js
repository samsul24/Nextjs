import Link from "next/link";
import React from "react";

export default function Contact() {
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
          <li className="text-red-500">Contact</li>
        </ul>
      </div>
      <div className="max-w-md mx-3  mb-20 py-9 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
        <div className="md:flex ">
          <div>
            <iframe
              className="rounded-lg ml-9 mr-5 max-[1240px]:ml-0 max-[1240px]:w-96 max-[1240px]:mx-9"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.634203547982!2d115.18246501488491!3d-8.631070873166738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23950b84a2619%3A0x348da9111968348d!2sPT.%20Hamengku%20Karya!5e0!3m2!1sen!2sid!4v1669194201180!5m2!1sen!2sid"
              width="1220"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center">
        <div className="max-w-md mx-14  mb-20 py-9 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
          <div className="md:flex ">
            <div>
              <h1 className="text-2xl p-3 font-semibold">
                General Information
              </h1>
              <p className=" text-[12px] p-3 flex">
                <svg
                  className="w-5 h-5  text-red-500   mr-2 hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>{" "}
                +62 (0361) 471 4819
              </p>
              <p className=" text-[12px] flex p-3">
                {/* <svg
                className="w-5 h-5  text-red-500 mr-2   hover:text-rose-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
              </svg> */}
                <svg
                  className="w-5 h-5  text-red-500 mr-2   hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                </svg>
                info@hamengkukarya.co.id
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-14  mb-20 py-9 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
          <div className="md:flex ">
            <div>
              <h1 className="text-2xl p-3 font-semibold">
                Marketing Information
              </h1>

              <p className=" text-[12px] p-3 flex">
                <svg
                  className="w-5 h-5  text-red-500   mr-2 hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>{" "}
                +62 0851 0448 0766
              </p>
              <p className=" text-[12px] flex p-3">
                <svg
                  className="w-5 h-5  text-red-500 mr-2   hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                </svg>
                project@hamengkukarya.co.id
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-14  mb-20 py-9 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
          <div className="md:flex ">
            <div>
              <h1 className="text-2xl p-3 font-semibold">
                Head Office Addresses
              </h1>
              <p className=" text-[12px] flex p-3">
                <svg
                  className="w-5 h-5  text-red-500 mr-2   hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                Jl.Pasung Grigis No.3, Denpasar Barat 80117
              </p>
              <p className=" text-[12px] p-3 flex">
                <svg
                  className="w-5 h-5  text-red-500   mr-2 hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>{" "}
                +62 (0361) 471 4819
              </p>

              <p className=" text-[12px] flex p-3">
                <svg
                  className="w-5 h-5  text-red-500 mr-2   hover:text-rose-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                </svg>
                admin@hamengkukarya.co.id
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
