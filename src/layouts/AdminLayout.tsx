import { Navigate, Outlet } from "react-router-dom";
import HeaderAdmin from "../admin/HeaderAdmin";

export default function AdminLayout() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return (
    <>
      <HeaderAdmin />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
