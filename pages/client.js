import Image from "next/image";
import React from "react";
import Client from "../components/Client";
import Layout from "../components/Layout";

export default function client() {
  return (
    <div>
      <Layout>
        <div className="ml-8 mt-12">
          <ul className="flex text-[12px] font-bold">
            <li>Home</li>
            <li className="mx-4 text-red-500">/</li>
            <li className="text-red-500">Client</li>
          </ul>
        </div>
        <div className="mt-9 mb-20">
          <Image
            className="m-auto"
            height="200"
            width="1310"
            src="https://images.unsplash.com/photo-1559081584-bbaaa2ba8ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          />
        </div>
        <div className="min-[600px]:mx-64">
          <h1 className=" text-3xl text-center text-gray-600  dark:text-zinc-600 mb-5 ">
            <span className="text-red-500">PT HAMENGKUKARYA</span> CLIENT
          </h1>
          <p className="m-auto text-[13px] max-[1240px]:mx-8   text-center list-outside text-zinc-500 dark:text-zinc-500 ">
            PT HamengkuKarya we offer construction services for every occasion
            out there, giving you the best experience and the best service… PT
            HamengkuKarya offers the widest possible Construction solutions…
          </p>
        </div>
        <Client />
      </Layout>
    </div>
  );
}
