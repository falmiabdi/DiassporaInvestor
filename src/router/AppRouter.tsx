import LandingPages from "@/pages/LandingPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages   />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );  
}

export default AppRouter;
