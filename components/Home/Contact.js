import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <div className="max-w-md mx-3 mt-14 mb-20 py-9 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
        <div className="md:flex ">
          <div className="text-left ml-9 text-zinc-500 p-2  max-[1240px]:ml-5  ">
            <h1 className="text-[28px] mt-5 font-semibold">CONTACT US</h1>
            <h1 className="text-[20px] mt-5 font-semibold ">
              GENERAL INFORMATION,
              <br />
              PT HAMENGKU KARYA (BALI)
            </h1>
            <Link href="/contact" passHref>
              <h1 className="mt-5 mb-5 text-4xl text-red-500 font-semibold hover:text-red-700">
                (0361) 471 4819
              </h1>
              <p className="text-red-500 hover:text-red-700 font-semibold mb-5">
                admin@hamengkukarya.co.id
              </p>
            </Link>
            <p>
              We are at your service 24/7, looking for a<br /> solution to any
              Construction problem
              <br /> you may have!
            </p>
          </div>
          <div>
            <iframe
              className="rounded-lg ml-9 mr-5  max-[1240px]:ml-0 max-[1240px]:w-96 max-[1240px]:mx-9"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.634203547982!2d115.18246501488491!3d-8.631070873166738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23950b84a2619%3A0x348da9111968348d!2sPT.%20Hamengku%20Karya!5e0!3m2!1sen!2sid!4v1669194201180!5m2!1sen!2sid"
              width="850"
              height="360"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
