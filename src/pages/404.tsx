import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex flex-col">
        <div className="flex space-x-2">
        <p className="font-bold text-lg">Error 404</p>
        <span>|</span>
        <p className="font-bold text-lg">We Can&apos;t find that page</p>
        </div>
        <div className="flex">
          <p className="mt-4 text-slate-600">
            sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
      <div className="flex mt-2">
        <Link href={"/"} className="border border-blue-500 bg-blue-500 rounded-md hover:shadow-lg hover:shadow-blue-600 p-2 hover:bg-blue-400 hover:duration-500 transition">Take Me Home</Link>
      </div>
      </div>
    </div>
  );
};

export default Custom404;
