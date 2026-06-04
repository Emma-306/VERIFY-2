import { Routes, Route } from "react-router-dom";
import { VerificationLayout } from "./pages/VerificationLayout";
import { CheckData } from "./components/verify/CheckData";
import { Details } from "./components/verify/Details";
import { ViewResult } from "./components/verify/ViewResult";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<VerificationLayout />}>
        <Route index element={<Details />} />
        <Route path="check-data" element={<CheckData />} />
        <Route path="view-result" element={<ViewResult />} />
      </Route>
    </Routes>
  );
};
