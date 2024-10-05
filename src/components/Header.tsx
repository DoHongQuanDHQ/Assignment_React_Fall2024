import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const [user, setUser] = useState();

// useEffect(() => {
//   getUserToken();
// }, []);
// const getUserToken = () => {
//   const getUser = localStorage.getItem("user") || null;
//   const user = JSON.parse(getUser!);
//   setUser(user);
// };
export function Header() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light">
    //   <Link className="navbar-brand" to="/">
    //     Logo
    //   </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarSupportedContent"
    //     aria-controls="navbarSupportedContent"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item admin">
    //         <Link className="nav-link" to="admin/product/list">
    //           Admin
    //         </Link>
    //       </li>
    //       <li className="nav-item active">
    //         <Link className="nav-link" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/about">
    //           About
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/login">
    //           Login
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/register">
    //           Register
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="nav-link" to="/cart"></Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <div className="container mx-auto w-[1500px]">
      <div className="up py-[15px] flex justify-between font-medium">
        <div className="trái flex">
          <p className="border-r-2 border-black px-[20px]">
            Phone Number: 956 742 455 678
          </p>
          <p className="px-[20px]">Email:info@ddsgnr.com</p>
        </div>

        <div className="phải flex gap-3">
          <div className="icon flex pr-[150px] gap-4">
            {/* <img src={Facebook} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={link} alt="" /> */}
          </div>

          <div className="flex">
            <img className="scale-[0.9] pr-[10px]" alt="" />
            <p>English</p>
          </div>

          <div className="flex">
            <img className="scale-[0.9] pl-[30px] pr-[10px]" alt="" />
            <Link to={"/login"}>Login</Link>
          </div>
          <div className="flex">
            <img className="scale-[0.9] pl-[30px] pr-[10px]" alt="" />
            <Link to={"/register"}> Register</Link>
          </div>
        </div>
      </div>

      <div className="down flex justify-between border-y-2 py-[12px] border-black">
        <img alt="" />
        <div className="right flex">
          <div className="text flex gap-14 pt-[7px] text-lg">
            <Link to="/" className="hover:border-b-2 border-black">
              Home
            </Link>
            <Link
              to="admin/product/list"
              className="hover:border-b-2 border-black"
            >
              Admin
            </Link>
            <p className="hover:border-b-2 border-black">Products</p>
            <p className="hover:border-b-2 border-black">About Us</p>
            <p className="hover:border-b-2 border-black">Contact</p>
          </div>

          <div className="search px-[30px]">
            <div className="relative">
              <input
                type="text"
                className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                placeholder="search..."
              />
              <svg
                className="w-4 h-4 absolute right-[10px] top-3.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="icon2 flex gap-10">
            <div className="">
              <img className="pl-[15px]" alt="" />
              <p>Wishlist</p>
            </div>
            <div className="">
              <img className="pl-[3px]" alt="" />
              <p>Cart</p>
            </div>
            <div className="">
              <img className="pl-[25px]" alt="" />
              <p>Notification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <nav className="navbar navbar-expand-lg bg-body">
    //   <div
    //     className="container-fluid"
    //     style={{
    //       display: "flex",
    //       width: "100%",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       padding: "0 20px",
    //     }}
    //   >
    //     <button
    //       data-mdb-collapse-init
    //       className="navbar-toggler"
    //       type="button"
    //       data-mdb-target="#navbarExample01"
    //       aria-controls="navbarExample01"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <i className="fas fa-bars"></i>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarExample01">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item active">
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //         </li>

    //         <li className="nav-item">
    //           <Link to="/order-history" className="nav-link">
    //             Order
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/cart" className="nav-link">
    //             Cart
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/login" className="nav-link">
    //             {/* {user ? "" : "Login"} */}
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link to="/register" className="nav-link">
    //             Register
    //           </Link>
    //         </li>
    //         {/* <li className="nav-item">
    //           <div className="nav-link">{user ? user.email : ""}</div>
    //         </li> */}
    //         {/* <li className="nav-item">{user ? <LogOut /> : ""}</li> */}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
