import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import About from "../about/About";
import Services from "../services/Services";
import Footer from "../footer/Footer";
import axiosInstance from "../../request/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { fullName } from "../../../../Server/src/lib/middleware/schema";
import ViewUsers from "../Admin/User"; 

export interface Post {
  getAllProperty: PROPERTY[];
}
export interface Get {
  getProperty: PROPERTY;
}

export interface PROPERTY {
  _id: string;
  type: string;
  propertyStatus: string;
  price: number;
  ownerName: string;
  image: string;
  description: string;
}


function Home() {
  const [property, setProperty] = useState<PROPERTY[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProperty();
    fetchUsers(); 
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

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get<USERS[]>("/your-user-endpoint"); // Replace with your actual user data endpoint
      setUser(res.data); // Update the state with user data
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleSubmit = async (id: string) => {
    try {
      const res = await axiosInstance.get<Get>(`/Property/GetProperty/${id}`);

      const data = res.data.getProperty;
      navigate("/property", { state: data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <>
      <Header />
      <About />
      <Services
        property={property}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Footer />
    </>
  );
}

export default Home;
