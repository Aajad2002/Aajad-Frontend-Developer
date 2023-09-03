import React, { useState } from "react";

const Flacon = () => {
  // Create an array of dragons with a length of 2 (placeholder data)
  const dragons = new Array(2).fill(0);

  // Initialize state to manage the current dragon index
  const [currentDragonIndex, setCurrentDragonIndex] = useState(0);

  // Get the current dragon and the index of the next dragon
  const currentDragon = dragons[currentDragonIndex];
  const nextDragonIndex =
    currentDragonIndex < dragons.length - 1 ? currentDragonIndex + 1 : 0;
  const nextDragon = dragons[nextDragonIndex];

  return (
    <div className="bg-[#333] text-white py-12">
      <div className="container  mx-auto flex flex-wrap items-center justify-center">
        {/* Display an embedded YouTube video for Falcon 9 */}
        <div className="w-full h-[60vh] md:w-1/2 p-4 order-2 md:order-1">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Z4TXCZG_NEY"
            title="Falcon 9 | Overview"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* Display text content about Falcon 9 */}
        <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
          {/* Display information about Falcon 9 */}
          <p className="text-gray-300 text-lg text-justify">
            {/* Add a description of Falcon 9 */}
          </p>
        </div>

        {/* Display details of the next dragon */}
        <div className="w-full md:w-1/2 p-4 order-3">
          <h2 className="text-4xl font-semibold">{nextDragon.name}</h2>
          {/* Display information about the next dragon */}
          <p className="text-gray-300 text-lg text-justify">
            {/* Add details about the next dragon */}
          </p>
        </div>

        {/* Display an embedded YouTube video for another event */}
        <div className="w-full h-[60vh] md:w-1/2 p-4 order-4">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nbJwrmeui8M"
            title="PSLV-C57/ Aditya-L1 Mission... The launch of Aditya-L1.... 02 September 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Flacon;
