import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({
  serviceTitle = "",
  serviceDescription = "",
  imagePath = "",
  alt = "",
}) => {
  return (
    <div className="relative flex gap-x-5 overflow-hidden rounded-lg bg-white flex-col gap-y-4 sm:p-6 md:flex-row md:p-7">
      <div className="min-w-7 max-w-28">
        <img src={imagePath} alt={alt} />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="lg:text-3.5xl text-base font-bold sm:text-lg">
          {serviceTitle}
        </h3>
        <p className="pr-20 sm:pr-14 text-base font-medium sm:text-sm lg:text-lg">
          {serviceDescription}
        </p>
      </div>
      <Link className="h-13.75 w-20.25 absolute bottom-0 right-0 z-10 flex items-center justify-center bg-c-grey sm:text-xl md:text-2xl">
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default ServiceCard;