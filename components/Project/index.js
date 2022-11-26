import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div>
      <div className="max-w-md mx-6 mt-14 mb-20 py-9 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
        <div className="min-[600px]:justify-center max-[1240px]:ml-2 min-[600px]:grid grid-cols-4 gap-4">
          <div className="flex mt-9 relative w-[290px] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 mx-5 ">
            <Image
              className="rounded-lg h-60 w-full object-cover md:h-full md:w-72"
              src="https://images.unsplash.com/photo-1530240852689-f7a9c6d9f6c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"
              height="310"
              width="310"
              alt=""
            />
            <Link href="/service" passHref>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-red-600 text-center opacity-70  rounded-lg">
                <h3 className="text-xl text-white font-bold hover:text-red-200 ">
                  Various Services
                </h3>
                <h1 className="mt-2 text-sm text-white">Specializes</h1>
              </div>
            </Link>
          </div>
          <div className="flex mt-9 relative w-[290px] transition ease-in-out  delay-10 hover:-translate-y-1 hover:scale-110 duration-300 mx-5 ">
            <Image
              className="rounded-lg h-60 w-full object-cover md:h-full md:w-72 "
              src="https://images.unsplash.com/photo-1636414405519-ba85fdb9a155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              height="310"
              width="310"
              alt=""
            />
            <Link href="/project" passHref>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-red-600 text-center opacity-70  rounded-lg">
                <h3 className="text-xl text-white font-bold hover:text-red-200 ">
                  Project
                </h3>
                <h1 className="mt-2 text-sm text-white">Specializes</h1>
              </div>
            </Link>
          </div>
          <div className="flex mt-9 relative w-[290px] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 mx-5 ">
            <Image
              className="rounded-lg h-60 w-full object-cover md:h-full md:w-72"
              src="https://images.unsplash.com/photo-1629479787958-ead6859fcdf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUyfHxwbHVtYmluZyUyMENvbnN0cnVjdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              height="310"
              width="310"
              alt=""
            />
            <Link href="/contact" passHref>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-red-600 text-center opacity-70 rounded-lg">
                <h3 className="text-xl text-white font-bold hover:text-red-200 ">
                  Reasonable Cost
                </h3>
                <h1 className="mt-2 text-sm text-white">
                  Efficiently & economically
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex mt-9 relative w-[290px] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300 mx-5 ">
            <Image
              className="rounded-lg h-60 w-full object-cover md:h-full md:w-72"
              src="https://images.unsplash.com/photo-1563884705074-7c8b15f16295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              height="310"
              width="310"
              alt=""
            />
            <Link href="/client" passHref>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-red-600 text-center opacity-70  rounded-lg">
                <h3 className="text-xl text-white font-bold hover:text-red-200 ">
                  On Target
                </h3>
                <h1 className="mt-2 text-sm text-white">Goals</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
