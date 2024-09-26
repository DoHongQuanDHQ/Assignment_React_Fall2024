import { Outlet } from "react-router-dom";
import HeaderAdmin from "./../pages/admin/HeaderAdmin";

export default function AdminLayout() {
  return (
    <>
      <HeaderAdmin />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
