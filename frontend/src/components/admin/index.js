import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./Header";

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default Admin;
