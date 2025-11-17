import { HashRouter, Routes, Route } from "react-router-dom";
import Rozvrh from "./Rozvrh";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Rozvrh />} />
      </Routes>
    </HashRouter>
  );
}
