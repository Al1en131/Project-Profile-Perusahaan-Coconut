import React, { useState } from "react";
import DashboardLayout from "../../../../components/DashboardLayout";
import Link from "next/link";

const DashboardCreateuser = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");

  const isFormFilled = () => {
    return file && userName && email && password && level;
  };

  return (
    <DashboardLayout>
      <Link
        href="/dashboard/user"
        className="text-black text-xl mb-4 flex items-center gap-2 font-normal"
      >
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 16.5L1.25 9L8.75 1.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Back</span>
      </Link>
      <h1 className="font-sans font-bold text-3xl text-black mb-6">
        Tambah User
      </h1>
      <form action="">
        <label htmlFor="dropzone-file" className="text-sm text-black font-bold">
          Image
        </label>
        <div
          className="flex flex-col items-center justify-center w-full h-36 mt-2 mb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById("dropzone-file").click()}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="p-3 bg-[#F5F5F5] rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99994 17.75C8.58994 17.75 8.24994 17.41 8.24994 17V12.81L7.52994 13.53C7.23994 13.82 6.75994 13.82 6.46994 13.53C6.17994 13.24 6.17994 12.76 6.46994 12.47L8.46994 10.47C8.67994 10.26 9.00994 10.19 9.28994 10.31C9.56994 10.42 9.74994 10.7 9.74994 11V17C9.74994 17.41 9.40994 17.75 8.99994 17.75Z"
                  fill="#3F9D00"
                />
                <path
                  d="M10.9999 13.7499C10.8099 13.7499 10.6199 13.6799 10.4699 13.5299L8.46994 11.5299C8.17994 11.2399 8.17994 10.7599 8.46994 10.4699C8.75994 10.1799 9.23994 10.1799 9.52994 10.4699L11.5299 12.4699C11.8199 12.7599 11.8199 13.2399 11.5299 13.5299C11.3799 13.6799 11.1899 13.7499 10.9999 13.7499Z"
                  fill="#3F9D00"
                />
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
                  fill="#3F9D00"
                />
                <path
                  d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
                  fill="#3F9D00"
                />
              </svg>
            </div>
            <p className="mb-2 text-sm text-black">
              <span className="font-semibold text-[#3F9D00]">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-black">(Max. File size: 25 MB)</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {file && <p className="mb-6">Selected file: {file.name}</p>}{" "}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block text-black text-xs font-bold mb-2"
              htmlFor=""
            >
              Username
            </label>
            <input
              className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-User-name"
              type="text"
              placeholder="Enter Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full max-lg:mb-6 md:w-1/2 px-3">
            <label
              className="block tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-black text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-white text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block text-black text-xs font-bold mb-2"
              htmlFor=""
            >
              Level
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option>Select a level</option>
                <option>Admin</option>
                <option>User</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-end max-lg:justify-center max-lg:w-full">
          <button
            type="submit"
            className={`bg-[#3F9D00] text-white py-2 text-xl font-bold px-16 max-lg:w-full rounded-md ${
              isFormFilled() ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isFormFilled()}
          >
            Create
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default DashboardCreateuser;
