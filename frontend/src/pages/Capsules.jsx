import React, { useState } from "react";
import { hardcodedImages } from "../utils/data";
import { Pagination } from "../Components/Pagination";
import { CapsuleDetails } from "../Components/CapsuleDetails";
import { useDispatch, useSelector } from "react-redux";
import { otherCapsules } from "../Redux/CapsuleSlice";

const Capsules = () => {
  // Retrieve capsules data from Redux store
  const { capsules } = useSelector((store) => store.CapsuleReducer);

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // State to manage the selected capsule for displaying details
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  // State to manage the current page of capsules
  const [currentPage, setCurrentPage] = useState(1);

  // Number of capsules to display per page
  const capsulesPerPage = 10;

  // Calculate the index of the last and first capsules to display on the current page
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;

  // Get the capsules to display on the current page
  const currentCapsules = capsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  // Function to change the current page when paginating
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle click on a capsule and show its details
  const handleCapsuleClick = (capsule) => {
    setSelectedCapsule(capsule);
  };

  // Function to close the capsule details modal
  const closeModal = () => {
    setSelectedCapsule(null);
  };

  // Function to handle changing capsule data based on user selection
  const handleCapsuleData = (value) => {
    dispatch(otherCapsules(value));
  };

  return (
    <div
      className="relative bg-cover bg-center  "
      style={{
        backgroundImage: `url("https://www.science.org/do/10.1126/science.abc9093/abs/ca_0522NID_SpaceX_Dragon_online.jpg")`,
      }}
    >
      <div className="bg-black bg-opacity-50  py-8 pt-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#fff] mb-8 ">
            SpaceX Capsules
          </h1>
          <div className="mt-9 md:w-[200px] md:absolute md:top-16 md:right-20">
            {/* Dropdown for changing capsule data */}
            <select
              onChange={(e) => handleCapsuleData(e.target.value)}
              className="block text-[#333] rounded bg-[#fff] p-2 md:w-full w-[80%] m-auto"
            >
              <option value={""}>Change Capsule</option>
              <option value={"upcoming"}>Upcoming Capsule</option>
              <option value={"past"}>Past Capsule</option>
            </select>
          </div>
          <div className="w-[90%] m-auto mt-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Display capsules as cards */}
            {currentCapsules.map((capsule, i) => (
              <div
                key={capsule.capsule_serial}
                className="bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 text-[#333] cursor-pointer"
                onClick={() => handleCapsuleClick(capsule)}
              >
                <div className="relative overflow-hidden">
                  {/* Display capsule image */}
                  <img
                    src={hardcodedImages[i % hardcodedImages.length]}
                    alt={capsule.capsule_serial}
                    className="w-full h-64 object-cover transition-transform transform hover:scale-105"
                  />
                  {/* Add a gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  {/* Display capsule serial number */}
                  <h2 className="text-2xl font-extrabold mb-2">
                    {capsule.capsule_serial}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* Render pagination component for navigating between pages */}
          <Pagination
            capsulesPerPage={capsulesPerPage}
            totalCapsules={capsules.length}
            currentPage={currentPage}
            paginate={paginate}
          />
          {/* Render the capsule details modal when a capsule is selected */}
          {selectedCapsule && (
            <CapsuleDetails capsule={selectedCapsule} closeModal={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Capsules;
