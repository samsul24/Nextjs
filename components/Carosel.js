import Link from "next/link";
import React from "react";

const Carosel = () => {
  return (
    <div>
      <div></div>
      <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img mb-20">
        <div className="p-5 text-white z-[2] ml-[-15rem]   ">
          <h1 className="font-bold ml-64 hover:text-red-500 max-[1240px]:text-xl max-[1240px]:ml-60 min-[600px]:text-5xl">
            GENERAL CONTRACTOR
          </h1>
          <p className="py-6 ml-64 max-[1240px]:text-[12px] max-[1240px]:text-left max-[1240px]:ml-60 min-[600px]:text-xl">
            Our services in Civil, Mechanical, Electrical & Plumbing
            Construction began in 1981. We responsible for providing all of the
            material, labor, equipment (engineering vehicles and tools) and
            services necessary for the construction of the project.
            <br />
            <br />
            <Link href="/contact" passHref>
              <button className="px-8 py-4 border hover:text-red-500 rounded-lg max-[1240px]:px-4 max-[1240px]:py-1 ">
                Contact
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
