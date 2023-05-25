import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../rename/pages/";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
