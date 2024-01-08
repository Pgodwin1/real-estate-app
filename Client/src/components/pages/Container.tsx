import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsHouseAddFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";

const Container = ({ children }) => {
  return (
    <div className="d-flex container-fluid  p-0 m-0 flex-gap ">
      <div className="row p-0 m-0">
        <aside className="col-4 admin-nav rounded-end shadow-lg vh-100 w-100">
          <h1 className="border-o lead mb-5 fs-1  text-center  text-white mt-3">
            Admin
          </h1>
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <div className="column  pb-3">
              <a
                className="text-white mt-5  pb-5  cursor-pointer text-decoration-none "
                href="#"
              >
                <MdOutlineDashboard style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Home</span>
              </a>
            </div>
            <div className="column pb-3">
              <a
                className="text-white mt-5  pb-5 cursor-pointer text-decoration-none "
                href="/admin/user"
              >
                <FiUsers style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Users</span>
              </a>
            </div>
            <div className="column pb-3 icon-link-hover">
              <a
                className="text-white mt-5  cursor-pointer text-decoration-none "
                href="#"
              >
                <BsHouseAddFill style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Create</span>
              </a>
            </div>
            <div className="column pb-3 icon-link-hover">
              <a
                className="text-white mt-5  cursor-pointer text-decoration-none "
                href="#"
              >
                <IoMdHome style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Properties</span>
              </a>
            </div>
          </div>
        </aside>
        <main className="col-8">{children}</main>
      </div>
    </div>
  );
};

export default Container;
