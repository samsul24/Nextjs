import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = () => {
  return (
    <div>
      <div className="max-w-md mx-6 mt-20 mb-14 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
        <div className="md:flex ">
          <div className="p-8 ">
            <Image
              className="rounded-2xl "
              height="900"
              width="3000"
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* <h1 className="inline-block p-4 rounded-t-lg border-b-2">
          1.
        </h1> */}
              Civil work
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {/* Incredible accomodation for your team */}
            </a>
            <p className="mt-2 text-slate-500">
              Start from planning, designing, estimating, supervising
              construction, transportation of materials and site development for
              Civil work.
            </p>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Electrical work
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {/* Incredible accomodation for your team */}
            </a>
            <p className="mt-2 text-slate-500">
              Start from planning, designing, estimating, supervising
              construction, transportation of materials and site development for
              Electrical work.
            </p>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Plumbing wor
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {/* Incredible accomodation for your team */}
            </a>
            <p className="mt-2 text-slate-500">
              Start from planning, designing, estimating, supervising
              construction, transportation of materials and site development for
              Plumbing work.
            </p>
            <div className="p-8"></div>
            <br></br>
            <h1 className="text-center">
              <Link href="/service" passHref>
                <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  View All Service
                </button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
