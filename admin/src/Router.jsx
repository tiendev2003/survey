import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useContext } from "react";
import Layout from "./component/layout";
import LoginLayout from "./component/layout/LoginLayout";
import { AuthContext } from "./context/AuthContext";
import ConfirmPassword from "./pages/confirm-password";
import CreateAccount from "./pages/create-account";
import DanhSachKhaoSat from "./pages/danhsachkhaosat/DanhSachKhaoSat";
import SuaKhaoSat from "./pages/danhsachkhaosat/SuaKhaoSat";
import TaoKhaoSat from "./pages/danhsachkhaosat/TaoKhaoSat";
import DetailSurvey from "./pages/detail-survey";
import Error from "./pages/error";
import ForgetPassword from "./pages/forget-password";
import Login from "./pages/login";
import PasswordSuccess from "./pages/password-success";
import PendingSurveys from "./pages/pending-surveys";
import Profile from "./pages/profile";
import SurveyList from "./pages/survey-list";
import Verification from "./pages/verification";

function Router() {
  const { isAuthenticated, userRole, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route index path="/" element={<Login />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/create-account" element={<CreateAccount />} />
          <Route index path="/forget-password" element={<ForgetPassword />} />
          <Route index path="/confirm-password" element={<ConfirmPassword />} />
          <Route index path="/verification" element={<Verification />} />
          <Route index path="/password-success" element={<PasswordSuccess />} />
        </Route>
        {isAuthenticated ? (
          userRole === "admin" ? (
            <Route path="/admin" element={<Layout />}>
              <Route path="" element={<PendingSurveys />} />
              <Route path="pending-surveys" element={<PendingSurveys />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          ) : userRole === "student" ? (
            <Route path="/student" element={<Layout />}>
              <Route path="survey-list" element={<SurveyList />} />
              <Route path="survey-list/:id" element={<DetailSurvey />} />
              <Route path="" element={<SurveyList />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          ) : userRole === "lecturer" ? (
            <Route path="/lecturer" element={<Layout />}>
              <Route path="" element={<DanhSachKhaoSat />} />
              <Route path="manage-surveys" element={<DanhSachKhaoSat />} />
              <Route path="manage-surveys/create" element={<TaoKhaoSat />} />
              <Route path="manage-surveys/edit/:id" element={<SuaKhaoSat />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
