import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckData = () => {
  const navigate = useNavigate();
  const stepsList = [
    "Validating number format",
    "Searching product registry",
    "Verifying company records",
    "Checking expiry and status",
  ];

  const location = useLocation();
  const formData = location.state;

  const [currentStep, setCurrentStep] = useState(0);

  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        // LAST STEP REACHED
        if (prev >= stepsList.length - 1) {
          clearInterval(interval);

          // MARK PROCESS AS FINISHED
          setIsFinished(true);

          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isFinished) {
      navigate("/view-result", {
        state: formData,
      });
    }
  }, [isFinished]);
  
  return (
    <div className="w-full h-[600px] mt-10 flex items-center justify-center">
      <div className="w-3/4 h-full rounded-4xl bg-white flex flex-col items-center justify-center">
        <div
          className={`relative w-32 h-32 rounded-full ${
            !isFinished && "animate-spin [animation-duration:3s]"
          }`}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "conic-gradient(#166534 30%, #d1d5db 0%)",
            }}
          ></div>

          <div className="absolute inset-2 bg-white rounded-full"></div>
        </div>

        <span className="text-4xl font-bold mt-8 text-green-900">
          {formData?.nafdacNumber?.replace("-", " - ")}
        </span>

        <span className="text-lg text-black/50 mt-4 font-semibold mb-10">
          {isFinished
            ? "Verification completed successfully"
            : "Querying NAFDAC registration database..."}
        </span>

        <div className="flex flex-col w-1/2">
          {stepsList.map((item, index) => {
            const isCompleted = isFinished || index < currentStep;

            const isActive = !isFinished && index === currentStep;

            return (
              <div
                key={index}
                className="flex flex-row gap-3 items-center mb-3 justify-start"
              >
                {/* LEFT CIRCLE */}
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
                    ${
                      isCompleted
                        ? "bg-green-800 border-green-800"
                        : isActive
                          ? "bg-gray-400 border-gray-400 animate-pulse"
                          : "bg-white border-gray-300"
                    }`}
                />

                {/* TEXT */}
                <span
                  className={`text-lg transition-all duration-300
                    ${
                      isCompleted
                        ? "text-green-800 font-semibold"
                        : isActive
                          ? "text-black/70"
                          : "text-black/40"
                    }`}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
