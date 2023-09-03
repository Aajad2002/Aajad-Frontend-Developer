import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { DataArray } from "../utils/data";

// LandingComponent displays a list of items with background images and allows users to open modal video players.
const LandingComponent = () => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to open the modal and check the corresponding checkbox
  const openModal = (index) => {
    setShowModal(true);
    const checkbox = document.getElementById(`tw-modal-${index}`);
    if (checkbox) {
      checkbox.checked = true;
    }
  };

  // Function to close the modal and uncheck the corresponding checkbox
  const closeModal = (index) => {
    setShowModal(false);
    const checkbox = document.getElementById(`tw-modal-${index}`);
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <div>
      {/* Mapping over DataArray to render items */}
      {DataArray?.map((data, index) => {
        return (
          <div
            key={index}
            style={{ backgroundImage: `url(${data.bgImage})` }}
            className="bg-cover bg-no-repeat bg-center w-[100%] h-screen bg-[#333] relative"
          >
            <div className="absolute md:left-20 left-10 bottom-20 sm:w-[200px] md:min-w-[400px] text-[#fff]">
              <h3 className="md:text-[24px] text-[18px] font-[600]">
                {data.heading}
              </h3>
              <h1 className="md:text-4xl text-2xl font-[700]">
                {data.description}
              </h1>
              <label
                onClick={() => openModal(index)}
                className="mt-8 block h-[50px] w-[200px] text-lg text-center py-[9px] font-bold border-[3px] border-white text-white transition-all duration-400 ease-in-out z-10 hover:bg-white hover:text-[#333]"
              >
                WATCH
              </label>
            </div>
            {/* Checkbox input for the modal */}
            <input
              type="checkbox"
              id={`tw-modal-${index}`}
              className="peer fixed appearance-none opacity-0"
            />
            {/* Modal for playing videos */}
            {showModal && (
              <label
                htmlFor={`tw-modal-${index}`}
                className="pointer-events-none invisible absolute z-20 inset-0 flex cursor-pointer items-center justify-center overflow-hidden transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:bg-opacity-[0.2] peer-checked:translate-y-0 peer-checked:scale-100"
              >
                <div
                  className="scale-90  md:p-6 text-white bg-black bg-opacity-40 backdrop-blur-lg  shadow-2xl transition rounded-s md:w-[50%] w-[100%] md:h-[70vh] h-[75vh] p-5 pb-8"
                  htmlFor=""
                >
                  <div className="flex justify-between mx-3 ">
                    <h3 className="text-3xl font-bold">SpaceX</h3>
                    <button
                      className="text-3xl"
                      onClick={() => closeModal(index)}
                    >
                      <IoCloseSharp />
                    </button>
                  </div>
                  <div className="mt-4 h-[90%]">
                    {/* Embedded iframe for playing videos */}
                    <iframe
                      id={`tw-modal-${index}`}
                      width={"100%"}
                      height={"100%"}
                      src={data.link}
                      title="Aditya L1 Ready to Unveil The Secrets of the Sun | India's Aditya L1 Mission Explained"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </label>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LandingComponent;
