import Image from "next/image";
import React from "react";

const Oke = () => {
  return (
    <div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-4"
              height="700"
              width="700"
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Civil Work
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accomodation for your team
            </a>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oke;
