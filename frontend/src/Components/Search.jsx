import React, { useState } from "react";
import { getCapsules } from "../Redux/CapsuleSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  // State for input values and error messages
  const [state, setState] = useState("");
  const [value, setValue] = useState("");

  // Redux dispatch to trigger capsule search action
  const dispatch = useDispatch();

  // React Router navigation hook
  const navigate = useNavigate();

  // Function to handle capsule search
  const handleSearch = () => {
    if (state && value) {
      // Dispatch the getCapsules action with search parameters
      dispatch(getCapsules(state, value));

      // Navigate to the capsule page (assuming this route exists)
      navigate("/capsule");
    } else {
      // Display an error toast if fields are not filled
      toast.error("Fill in all the fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/17381230/pexels-photo-17381230/free-photo-of-sun-setting-on-horizon-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
      className="bg-cover bg-no-repeat bg-center w-[100%] md:h-[60vh] h-[90vh] grid place-items-center "
    >
      <div className="absolute">
        <ToastContainer />
      </div>
      <article className="md:w-[50%] w-[80%] md:h-auto  flex  text-center items-center justify-center    bg-white bg-opacity-30 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700 p-5">
        <div className="flex  md:flex-row flex-col justify-between md:w-[100%] w-[100%] gap-5  ">
          {/* Dropdown for selecting search criteria */}
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="block bg-[#333] text-[#fff] p-4 md:w-[35%] w-[80%] m-auto"
          >
            <option value={""}>Search capsules</option>
            <option value={"capsule_serial"}>Capsule Serial No.</option>
            <option value={"capsule_id"}>Capsule Id</option>
            <option value={"status"}>Capsule status</option>
            <option value={"type"}>Capsule type</option>
          </select>

          {/* Input field for entering search value */}
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="block bg-[#333] text-[#fff] p-4 md:w-[35%] w-[80%] m-auto placeholder:text-white"
            type="text"
            placeholder="Capsule ID"
          />

          {/* Button to trigger the search */}
          <button
            onClick={handleSearch}
            className="block bg-[#333] text-[#fff] p-4 md:w-[20%] w-[80%] m-auto"
          >
            Search
          </button>
        </div>
      </article>
    </div>
  );
};

export default Search;
