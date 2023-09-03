import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DragonImages } from "../utils/data";

const Dragon = () => {    
  const [currentDragonIndex, setCurrentDragonIndex] = useState(0);

  const dragons=new Array(2).fill(0)

  const currentDragon = dragons[currentDragonIndex];
  const nextDragonIndex =
    currentDragonIndex < dragons.length - 1 ? currentDragonIndex + 1 : 0;
  const nextDragon = dragons[nextDragonIndex];

  return (
   
    <div className="bg-[#333] text-white py-12">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
          <img
            src={DragonImages[0]}
            // alt={currentDragon.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 order-1 md:order-2">
         <p>
         SpaceX's CEO, Elon Musk, named the spacecraft after the 1963 song "Puff, the Magic Dragon" by Peter, Paul and Mary, reportedly as a response to critics who considered his spaceflight projects impossible.[2] Early on, it had actually been named Magic Dragon, and t-shirts had been printed with this name.[3] As late as September 2012, SpaceX board member Steve Jurvetson was still referring to it as "The Magic Dragon, Puffed to the sea."[4] That was his caption to a photo of the capsule several months after it had completed its COTS 2 demo flight where the spacecraft had accomplished its first docking with the ISS. This song, ostensibly composed for children, had long been associated with perceived references to smoking marijuana. In 2008, Elon Musk confirmed that the association between the song and marijuana was the reason behind the name Dragon, saying that "so many people thought I [must be] smoking weed to do this venture."[5]
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4 order-3">
          
                            
          <p className="text-gray-300 text-lg text-justify">
          American private space transportation company SpaceX has developed and produced several spacecraft named Dragon. The first family member, now referred to as Dragon 1, flew 23 cargo missions to the ISS between 2010 and 2020 before retiring. With this first version not designed for carrying astronauts, it was funded by NASA with $396 million awarded through the Commercial Orbital Transportation Services (COTS) program,[1] with SpaceX being announced as a winner of the first round of funding on August 18, 2006.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4 order-4">
          <img
            src={DragonImages[1]}
            // alt={nextDragon.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dragon;
