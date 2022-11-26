import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-md mx-6  max-[1240px]:mx-0 mt-20 mb-14 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
        <div className="md:flex  ">
          <div className="p-8 mt-8  ">
            <Image
              className="rounded-2xl  "
              height="100"
              width="900"
              src={Logo}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8 mb-9">
            <div className=" min-[600px]:p-9 max-[1240px]:p-2  rounded-lg text-[20px] text-white bg-red-500 ">
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
    </div>
  );
};

export default AboutUs;
