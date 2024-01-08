import React, { useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsHouseAddFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import Dashboard from "../Admin/Dashboard";
import User from "../Admin/User";
import CreateProperty from "../Admin/CreateProperty";
import ViewProperty from "../Admin/ViewProperty";
import { PROPERTY, Post } from "./Home";
import axiosInstance from "../../request/AxiosInstance";

const AdminPage = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [property, setProperty] = useState([] as PROPERTY[]);
  useEffect(() => {
    getProperty();
  }, []);
  const getProperty = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get<Post>("/Property/GetProperty");
      setLoading(false);

      setProperty(res.data.getAllProperty);
    } catch (error) {
      setLoading(true);
      console.log(error.response.data);
    }
  };

  return (
    <div className="container-fluid p-0 m-0 bg-body-secondary ">
      <div className="row p-0 m-0">
        <div className="col-2 admin-nav rounded-end shadow-lg h-full m-0 bg b">
          <h1
            className="border-o lead mb-5 fs-1 text-center text-white mt-3 fs-3"
            style={{ fontWeight: "500" }}>
            ADMIN
          </h1>

          <div className="d-flex flex-column  justify-content-center ml-3 align-items-left ">
            <div className="column  pb-3">
              <a
                className="text-white mt-5  pb-5  cursor-pointer text-decoration-none "
                href="#"
                onClick={() => setStep(0)}
              >
                <MdOutlineDashboard style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Home</span>
              </a>
            </div>
            <div className="column pb-3">
              <a
                className="text-white mt-5  pb-5 cursor-pointer text-decoration-none "
                onClick={() => setStep(1)}
                href="#"
              >
                <FiUsers style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Users</span>
              </a>
            </div>
            <div className="column pb-3 icon-link-hover">
              <a
                className="text-white mt-5  cursor-pointer text-decoration-none "
                href="#"
                onClick={() => setStep(2)}
              >
                <BsHouseAddFill style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Create</span>
              </a>
            </div>
            <div className="column pb-3 icon-link-hover">
              <a
                className="text-white mt-5  cursor-pointer text-decoration-none "
                href="#"
                onClick={() => setStep(3)}
              >
                <IoMdHome style={{ marginRight: "10px" }} />{" "}
                <span className="pl-4">Properties</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-10 p-0 m-0 ">
          {" "}
          {step === 0 && <Dashboard property={property} />}
          {step === 1 && <User />}
          {step === 2 && <CreateProperty />}
          {step === 3 && <ViewProperty property={property} />}
        </div>
      </div>
    </div>

    // <div className="d-flex container-fluid  p-0 m-0  ">
    //   <div className="row p-0 m-0">
    //     <div className="col-2 admin-nav rounded-end shadow-lg vh-100">
    //       <h1 className="border-o lead mb-5 fs-1  text-center  text-white mt-3">
    //         Admin
    //       </h1>
    //       <div className="d-flex flex-column  justify-content-center align-items-center">
    //         <a
    //           className="text-white mt-5  pb-5  cursor-pointer text-decoration-none "
    //           href="#"
    //         >
    //           <MdOutlineDashboard style={{ marginRight: "10px" }} />{" "}
    //           <span className="pl-4">Home</span>
    //         </a>

    //         <a
    //           className="text-white mt-5  pb-5 cursor-pointer text-decoration-none "
    //           href="/admin/user"
    //         >
    //           <FiUsers style={{ marginRight: "10px" }} />{" "}
    //           <span className="pl-4">Users</span>
    //         </a>

    //         <div className="column pb-3 icon-link-hover">
    //           <a
    //             className="text-white mt-5  cursor-pointer text-decoration-none "
    //             href="#"
    //           >
    //             <BsHouseAddFill style={{ marginRight: "10px" }} />{" "}
    //             <span className="pl-4">Create</span>
    //           </a>
    //         </div>
    //         <div className="column pb-3 icon-link-hover">
    //           <a
    //             className="text-white mt-5  cursor-pointer text-decoration-none "
    //             href="#"
    //           >
    //             <IoMdHome style={{ marginRight: "10px" }} />{" "}
    //             <span className="pl-4">Properties</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-9">
    //       {step === 0 && <p> first</p>}
    //       {step === 1 && <p> second</p>}
    //       {step === 2 && <p> third</p>}
    //       {step === 3 && <p> fourth</p>}
    //     </div>
    //   </div>
    // </div>
  );
};

export default AdminPage;
