import { assets, lastChecks } from "../../assets/assets";
import React, { useState } from "react";
import { CheckCard } from "./CheckCard";
import { useNavigate } from "react-router-dom";

export const Details = () => {
  const [filter, setFilter] = useState("all");

  const filteredChecks = lastChecks.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  const getButtonClass = (type) =>
    type === filter
      ? `${(type === 'unverified'? 'bg-red-700':'bg-green-900')} text-white px-7 py-2 rounded-4xl text-sm`
      : "border-2 border-black/80 px-7 py-2 rounded-4xl text-sm";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStepData(formData);
    setFormData(initialFormData);
    navigate("/check-data",{
        state: formData
     });
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [id]: value,
    }));
 };

  const [formData, setFormData] = useState({
    nafdacNumber: "",
    productName: "",
    name: "",
    location: "",
  });

  const initialFormData = {
    nafdacNumber: "",
    productName: "",
    name: "",
    location: "",
 };

  const [stepData, setStepData] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">
      <div className="w-full lg:w-1/2 h-[900px] rounded-4xl bg-white py-8 px-7 flex flex-col gap-6">
        <h1 className="font-semibold text-base text-green-900 ">
          Step 1 . ENTER NAFDAC NUMBER
        </h1>
        <span className="font-extrabold text-3xl">
          Verify before you trust.
        </span>
        <p className="font-semibold">
          Confirm if a product's NAFDAC registration number is authenthic
        </p>

        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="nafdacNumber"
              className="font-semibold text-black/70"
            >
              NAFDAC NUMBER <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center border-2 border-gray-400 rounded-xl overflow-hidden focus-within:border-green-800">
              <div className="px-4 h-12 flex items-center bg-gray-100 text-gray-600 font-semibold text-sm border-r">
                REG
              </div>
              <input
                type="text"
                id="nafdacNumber"
                placeholder="A1-1234"
                className="h-12 w-full px-3 outline-none"
                required
                value={formData.nafdacNumber}
                onChange={handleChange}
              />
            </div>

            <span className="text-black/60 text-xs font-medium">
              Format A1-1234 - Found on the product label or packaging
            </span>
          </div>

          <div>
            <label
              htmlFor="productName"
              className="font-semibold text-black/70"
            >
              PRODUCT NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="productName"
              placeholder="e.g. Paracetamol 500g"
              className="h-12 w-full border-2 border-gray-400 rounded-xl mt-1 px-2 placeholder:text-sm focus-within:border-green-800 outline-none"
              required
              value={formData.productName}
              onChange={handleChange}
            />
          </div>

          <div className="w-full flex flex-row gap-3">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="name" className="font-semibold text-black/70">
                YOUR NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="h-12 w-full border-2 border-gray-400 rounded-xl mt-1 px-2 placeholder:text-xs focus-within:border-green-800 outline-none"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 flex flex-col">
              <label htmlFor="location" className="font-semibold text-black/70">
                YOUR LOCATION <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                className="h-12 w-full border-2 border-gray-400 rounded-xl mt-1 px-2 placeholder:text-xs focus-within:border-green-800 outline-none"
                placeholder="Rivers State, Port-Harcourt"
                required
                value={formData.location}
                onChange={handleChange}
              />
              <p className="flex flex-row items-center text-sm text-green-800 mt-1">
                <img
                  src={assets.location_icon}
                  alt=""
                  className="w-3 h-3.5 mr-2 "
                />
                Detect my location
              </p>
            </div>
          </div>
          <div className="items-center flex w-full justify-center ">
            <button
              type="submit"
              className="w-1/2 md:w-full h-14 bg-green-900 text-white font-semibold rounded-xl cursor-pointer"
            >
              Verify now
            </button>
          </div>
        </form>
        <div className="h-16 w-full border border-dashed rounded-xl border-gray-500 items-center flex px-2 flex-row gap-2 mb-32">
          <img src={assets.barcode} alt="" className="" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Scan barcode instead </span>
            <span className="text-sm text-black/50">
              Open camera to scan product barcode
            </span>
          </div>
        </div>
        <hr className="border-gray-400" />
        <div className="flex items-center justify-center w-full text-xs text-black/70 gap-6">
          <div className="flex items-center gap-2">
            <span className="text-center">SSL Secured</span>
          </div>

          <div className="w-1 h-1 rounded-full bg-gray-400 shrink-0"></div>

          <div className="flex items-center gap-2">
            <span className="text-center">No data stored without consent</span>
          </div>

          <div className="w-1 h-1 rounded-full bg-gray-400 shrink-0"></div>

          <div className="flex items-center gap-2">
            <span className="text-center">Reports forwarded to NAFDAC</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 min-h-96 flex flex-col gap-6">
        <div className="w-full h-[460px] hidden lg:block bg-green-950 rounded-4xl px-8 py-8">
          <div className="flex flex-col gap-2 text-white mb-10">
            <div className="flex flex-row gap-2 items-center justify-start">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-semibold">TODAY</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span className="font-semibold">LIVE</span>
            </div>
            <span className="text-4xl font-bold">12,431</span>
            <p className="font-medium text-sm text-white/80">
              Products verified across 36 states
            </p>
          </div>
          <div className="w-full flex flex-col mb-6">
            <div className="flex flex-row justify-between items-center text-base">
              <span className="text-white/80">AUTHENTIC</span>
              <span className="text-green-500 font-semibold">95.3%</span>
            </div>
            <span className="text-white text-xl font-bold mb-1">11,847</span>
            <div className="w-full h-2 bg-white rounded-4xl">
              <div className="w-5/6 bg-green-500 h-full rounded-4xl"></div>
            </div>
          </div>
          <div className="w-full flex flex-col mb-6">
            <div className="flex flex-row justify-between items-center text-base">
              <span className="text-white/80">FLAGGED FAKE</span>
              <span className="text-red-500 font-semibold">4.7%</span>
            </div>
            <span className="text-white text-xl font-bold mb-1">583</span>
            <div className="w-full h-2 bg-white rounded-4xl">
              <div className="w-1/6 bg-red-500 h-full rounded-4xl"></div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between items-center text-base">
              <span className="text-white/80">Reports Filed</span>
              <span className="text-yellow-500 font-semibold">+18</span>
            </div>
            <span className="text-white text-xl font-bold mb-1">214</span>
            <div className="w-full h-2 bg-white rounded-4xl">
              <div className="w-2/6 bg-yellow-500 h-full rounded-4xl"></div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-1/2 rounded-4xl bg-white px-6 pt-6 xl:pt-12 xl:px-12 relative">
          <div className="pb-12 flex flex-row items-center gap-4 flex-wrap">
            <span className="font-semibold whitespace-nowrap">Last Checks</span>
            <div className="flex flex-row gap-2">
              <button
                className={getButtonClass("all")}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={getButtonClass("verified")}
                onClick={() => setFilter("verified")}
              >
                Verified
              </button>
              <button
                className={getButtonClass("unverified")}
                onClick={() => setFilter("unverified")}
              >
                Unverified
              </button>
            </div>
          </div>
          <hr className="absolute left-0 right-0 border-gray-300" />
          {filteredChecks.map((item, index) => (
            <React.Fragment key={item.id}>
              <CheckCard check={item} />

              {index !== filteredChecks.length - 1 && (
                <hr className="border-gray-300 w-full absolute left-0 right-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
