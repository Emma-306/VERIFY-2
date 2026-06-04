import { useLocation } from "react-router-dom";
import { assets, verifiedDrugs } from "../../assets/assets";

export const ViewResult = () => {
  const location = useLocation();
  const formData = location.state;
  const reportLocation = formData.location.split(", ")[1];
  const verifiedDrug = verifiedDrugs.find(
    (drug) => drug.nafdacNumber === formData.nafdacNumber,
  );
  const date = new Date();

  const datePart = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Lagos",
  }).format(date);

  const timePart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Africa/Lagos",
  }).format(date);

  const result = `${datePart}, ${timePart} WAT`;
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mt-10">
      <div className="w-full lg:w-4/6 min-h-96 rounded-4xl bg-white p-1">
        <div className="min-h-40 w-full bg-green-900/10 rounded-4xl flex flex-row  p-6 items-center justify-start gap-8">
          <img src={assets.checkmark2} alt="" className="w-16 h-16" />
          <div className="flex flex-col gap-1">
            <span className="font-extrabold text-green-900">
              PRODUCT VERIFIED AND AUTHENTIC
            </span>
            <span className="font-extrabold text-3xl">
              {verifiedDrug.productName}
            </span>
            <span className="flex flex-row gap-1 text-sm text-black/60 font-semibold">
              <p>{result}</p>
              <p> . </p>
              <p>Ref: #NG-2024-00B47</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col text-lg font-bold">
          <div className="flex flex-row justify-between px-2 md:px-8 py-10 border-b-2 border-gray-300">
            <span className="text-black/60">NAFDAC number</span>
            <span className="text-green-900">{formData.nafdacNumber}</span>
          </div>
          <div className="flex flex-row justify-between px-2 md:px-8 py-10 border-b-2 border-gray-300">
            <span className="text-black/60">Product / brand name</span>
            <span className="text-black">{verifiedDrug.productName}</span>
          </div>
          <div className="flex flex-row justify-between px-2 md:px-8 py-10 border-b-2 border-gray-300">
            <span className="text-black/60">Product category</span>
            <span className="flex flex-row items-center gap-2">
              <p>{verifiedDrug.category}</p>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <p>{verifiedDrug.type}</p>
            </span>
          </div>
          <div className="flex flex-row justify-between px-2 md:px-8 py-10 border-b-2 border-gray-300">
            <span className="text-black/60">Manufacturing company</span>
            <span className="text-black">{verifiedDrug.manufacturer}</span>
          </div>
          <div className="flex flex-row justify-between px-2 md:px-8 py-10 border-b-2 border-gray-300">
            <span className="text-black/60">Company location</span>
            <span>{verifiedDrug.companyLocation}</span>
          </div>
          <div className="flex flex-row justify-between px-2 md:px-8 py-10 border-b-2 border-gray-300">
            <span className="text-black/60">Date of registration</span>
            <span>{verifiedDrug.registrationDate}</span>
          </div>
          <div className="flex flex-row justify-between px-2 md:px-8 py-10 border-b-2 border-gray-300">
            <span className="text-black/60">Registration expiry</span>
            <span className="text-green-900 py-2 px-3 bg-green-900/10 rounded-full">{`Valid Until ${verifiedDrug.expiryDate}`}</span>
          </div>
          <div className="flex flex-row justify-between px-2 md:px-8 py-10">
            <span className="text-black/60">Reported By</span>
            <span className="flex flex-row items-center gap-2">
              <p>{formData.name}</p>
              <div className="w-1 h-1 rounded-full bg-black"></div>
              <p>{reportLocation}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full h-32 bg-red-900/10 rounded-4xl gap-4 items-center px-9">
          <button className="w-1/2 text-white bg-green-900 h-16 rounded-2xl text-xl font-extrabold cursor-pointer">
            Share result
          </button>
          <button className="border-2 border-red-500 w-1/2 text-red-900 h-16 text-xl font-extrabold bg-white rounded-2xl cursor-pointer">
            Report Concern
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/6 h-40 bg-white flex  flex-col items-start justify-center px-4 rounded-4xl">
        <span className="font-bold text-black/70 text-base mb-7">
          NAFDAC HOTLINE
        </span>
        <span className="font-bold text-green-900 text-2xl">0800 162 3322</span>
        <span className="text-sm text-black/40">
          Available 24/7 for emergencies
        </span>
      </div>
    </div>
  );
};
