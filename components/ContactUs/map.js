import React from "react";

const Map = () => {
  return (
    <div>
      <div className="max-w-md mx-3  mb-20 py-9 bg-white rounded-xl shadow-md overflow-hidden md:max-w-max ">
        <div className="md:flex ">
          <div>
            <iframe
              className="rounded-lg ml-9 mr-5 max-[1240px]:ml-0 max-[1240px]:w-96 max-[1240px]:mx-9"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.634203547982!2d115.18246501488491!3d-8.631070873166738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23950b84a2619%3A0x348da9111968348d!2sPT.%20Hamengku%20Karya!5e0!3m2!1sen!2sid!4v1669194201180!5m2!1sen!2sid"
              width="1220"
              height="360"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
