import React, { useState } from "react";
import LayoutHOC from "../LayoutHOC";
import { useSelector } from "react-redux";

const CreateJob = () => {
  const isSidebarOpen = useSelector((store) => store.commanSlice.isSidebarOpen);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    carrierType: "", 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Perform form submission logic here (e.g., API call)
  };
  return (
    <div
      className={`p-8 pb-20 ${
        isSidebarOpen ? "w-[calc(100%-300px)] ml-[300px]" : "w-full"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Create Jobs</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col md:grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-gray-700">
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="carrierType" className="block text-gray-700">
            Carrier Type:
          </label>
          <select
            name="carrierType"
            id="carrierType"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={formData.carrierType}
            onChange={handleInputChange}
          >
            <option value="">Select a type</option>
            <option value="truck">Software Developer</option>
            <option value="ship">Frontend Developer</option>
            <option value="airplane">Backend Developer</option>
          </select>
        </div>
        <div className="col-span-2 mt-3">
          <button
            type="submit"
            className=" bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LayoutHOC(CreateJob);
