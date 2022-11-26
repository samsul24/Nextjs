import Link from "next/link";
import React from "react";
import ContactUs from "../components/ContactUs";
import Map from "../components/ContactUs/map";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <div>
      <Layout>
        <div className="ml-8 mt-14">
          <ul className="flex text-[12px] font-bold">
            <li>Home</li>
            <li className="mx-4 text-red-500">/</li>
            <li className="text-red-500">Contact</li>
          </ul>
        </div>
        <Map />
        <ContactUs />
      </Layout>
    </div>
  );
}
