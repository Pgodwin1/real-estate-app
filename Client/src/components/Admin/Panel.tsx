import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { BsCurrencyDollar } from "react-icons/bs";
import axios from "axios";
import axiosInstance from "../../request/AxiosInstance";

const Panel = () => {
  const [totalProperties, setTotalProperties] = useState(0);
  const [housesSold, setHousesSold] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);

  useEffect(() => {
    axios.get("/Property/CountProperty").then((response) => {
      const data = response.data;
      console.log(data);
      setTotalProperties(data.totalProperties);
    });
  }, []);

  useEffect(() => {
    axiosInstance.get("/Property/SoldProperties").then((response) => {
      const data = response.data;
      setHousesSold(data.housesSold);
    });
  }, []);

  useEffect(() => {
    axios.get("/Property/Amount").then((response) => {
      const data = response.data;
      setTotalTransaction(data.totalTransaction);
    });
  }, []);

  return (
    <div className="row justify-content-evenly text-center mt-5 m-0 bg b">
      <div className="col-3 rounded shadow-lg px-7rem h-40 bg-white d-flex justify-content-between align-items-center p-2">
        <div className="bg-body-secondary p-3 rounded-5">
          <FaHome size={25} />
        </div>
        <div className="">
          <p className="fs-6 lead">Total Properties</p>
          <p className="fs-4">{totalProperties}</p>
        </div>
      </div>
      <div className="col-3 rounded shadow-lg px-7rem h-40 bg-white d-flex justify-content-between align-items-center p-2">
        <div className="bg-body-secondary p-3 rounded-5">
          <FcSalesPerformance size={25} />
        </div>
        <div>
          <p className="fs-6 lead">Houses Sold</p>
          <p className="fs-4">{housesSold}</p>
        </div>
      </div>
      <div className="col-3 rounded shadow-lg px-7rem h-40 bg-white d-flex justify-content-between align-items-center p-2">
        <div className="bg-body-secondary p-3 rounded-5">
          <BsCurrencyDollar size={25} />
        </div>
        <div>
          <p className="fs-6 lead">Total Transaction</p>
          <p className="fs-4">{totalTransaction}</p>
        </div>
      </div>
    </div>
  );
};

export default Panel;
