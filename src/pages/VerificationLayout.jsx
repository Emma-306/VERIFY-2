import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import React from "react";
import { assets } from "../assets/assets";

const steps = [
  { name: "Enter Details", path: "/" },
  { name: "Checking Database", path: "/check-data" },
  { name: "View Result", path: "/view-result" },
];

export const VerificationLayout = () => {
  const location = useLocation();

  const activeIndex = steps.findIndex((step) => {
    if (step.path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(step.path);
  });

  return (
    <div className="bg-gray-100 pb-10">
      <Navbar />

      <div className="w-full min-h-[1000px] px-6 sm:px-16 md:px-20 lg:px-36 2xl:px-72">
        {/* STEP INDICATOR */}
        <div className="flex items-center w-full px-1 py-1">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                {/* CIRCLE */}
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                    index <= activeIndex
                      ? "bg-green-800 text-white "
                      : "border-2 border-gray-300 bg-white text-black/50"
                  }`}
                >
                  {index < activeIndex ||
                  (index === activeIndex && index === steps.length - 1) ? (
                    <img
                      src={assets.checkmark}
                      alt="done"
                      className="w-4 h-4"
                    />
                  ) : (
                    index + 1
                  )}
                </div>

                {/* LABEL */}
                <span
                  className={`ml-2 font-medium hidden md:block ${
                    index <= activeIndex ? "text-green-800" : "text-black/50"
                  }`}
                >
                  {step.name}
                </span>
              </div>

              {/* LINE */}
              {index !== steps.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-4 min-w-3.5 ${
                    index < activeIndex ? "bg-green-800" : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  );
};
