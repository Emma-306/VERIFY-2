export const CheckCard = ({ check }) => {
  return (
    <div className="px-2 py-10">
      <div className="flex flex-row justify-between mb-3">
        <div
          className={`flex flex-row gap-2 items-center px-5 h-10 rounded-3xl ${check.status === "unverified" ? "bg-red-900/10" : "bg-green-900/10"}`}
        >
          <div
            className={`w-2 h-2 rounded-full ${check.status === "unverified" ? "bg-red-900" : "bg-green-900"}`}
          ></div>

          <span
            className={`font-bold text-sm ${check.status === "unverified" ? "text-red-900" : "text-green-900"}`}
          >
            {check.status}
          </span>
        </div>
        <div className="text-sm flex flex-row gap-2 items-center justify-center font-semibold">
          <span>{check.timeLabel}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>{check.time}</span>
        </div>
      </div>
      <span className="text-sm font-semibold">{check.productName}</span>
      <div className="flex items-center text-sm gap-2">
        <span>{check.regNo}</span>
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        <span>{check.category}</span>
        {check.brand && (
          <>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            <span>{check.brand}</span>
          </>
        )}
      </div>
    </div>
  );
};
