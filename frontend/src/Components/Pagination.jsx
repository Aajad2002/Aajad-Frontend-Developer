import React from "react";

// Pagination component receives props to manage pagination
export const Pagination = ({
  capsulesPerPage,
  totalCapsules,
  currentPage,
  paginate,
}) => {
  // Calculate the total number of pages needed based on the number of items per page
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCapsules / capsulesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8 flex justify-center">
      <ul className="flex space-x-2">
        {/* Map through the page numbers and create a button for each page */}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)} // Call the paginate function when a button is clicked
              className={`px-4 py-2 rounded-full font-medium focus:outline-none border-[3px] border-black  transition-colors duration-300 ${
                currentPage === number
                  ? "bg-black text-white" // Apply different styles to the current page button
                  : "bg-white text-black"
              }`}
            >
              {number} {/* Display the page number as the button label */}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
