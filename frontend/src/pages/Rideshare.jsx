import React, { useState } from "react";

const Rideshare = () => {
  const dragons = new Array(2).fill(0);
  const [currentDragonIndex, setCurrentDragonIndex] = useState(0);

  // Get the current and next dragon based on the index
  const currentDragon = dragons[currentDragonIndex];
  const nextDragonIndex =
    currentDragonIndex < dragons.length - 1 ? currentDragonIndex + 1 : 0;
  const nextDragon = dragons[nextDragonIndex];

  return (
    <div className="bg-[#333] text-white py-12">
      <div className="container  mx-auto flex flex-wrap items-center justify-center">
        {/* Display a YouTube video (Falcon 9 Overview) */}
        <div className="w-full h-[60vh] md:w-1/2 p-4 order-2 md:order-1">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/XkM_04Ch76E"
            title="Falcon 9 | Overview"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* Display text content explaining ridesharing */}
        <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
          <p className="text-gray-300 text-lg text-justify">
            A ridesharing company (also known as a transportation network
            company, ride-hailing service; the vehicles are called app-taxis or
            e-taxis) is a company that, via websites and mobile apps, matches
            passengers with drivers of vehicles for hire that, unlike taxicabs,
            cannot legally be hailed from the street. The legality of
            ridesharing companies by jurisdiction varies; in some areas they
            have been banned and are considered to be illegal taxicab
            operations.[1] Regulations can include requirements for driver
            background checks, fares, caps on the number of drivers in an area,
            insurance, licensing, and minimum wage.
          </p>
        </div>

        {/* Display information about the next dragon */}
        <div className="w-full md:w-1/2 p-4 order-3">
          <h2 className="text-4xl font-semibold">{nextDragon.name}</h2>
          <p className="text-gray-300 text-lg text-justify">
            Unless otherwise required by law, ridesharing companies have
            classified drivers as independent contractors and not employees
            under employment law, arguing that they receive certain
            flexibilities not generally received by employees. This affects
            taxation, working time, employee benefits, unemployment benefits,
            and overtime benefits and has been challenged legally.[25]
            Jurisdictions in which drivers must receive the classification of
            "employees" include the United Kingdom (after the case of Aslam v
            Uber BV which was decided by the Supreme Court of the United
            Kingdom),[26][27] Switzerland,[28] New Jersey,[29] and the
            Netherlands.[30][31] California Assembly Bill 5 (2019) was passed to
            force drivers to be classified as employees in California, although
            ridesharing.
          </p>
        </div>

        {/* Display another YouTube video */}
        <div className="w-full h-[60vh] md:w-1/2 p-4 order-4">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fOeAinwQ9xg"
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

export default Rideshare;
