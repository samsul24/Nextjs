import React from "react";
import AboutUs from "../components/About/";
import MoreAbout from "../components/About/moreAbout";
import Layout from "../components/Layout";

export default function About() {
  return (
    <div>
      <Layout>
        <div className="ml-8 mt-12">
          <ul className="flex text-[12px] font-bold">
            <li>Home</li>
            <li className="mx-4 text-red-500">/</li>
            <li className="text-red-500">About</li>
          </ul>
        </div>
        <AboutUs />
        <MoreAbout />
      </Layout>
    </div>
  );
}
