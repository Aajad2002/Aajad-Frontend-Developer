import React from "react";

// Footer component for the webpage
const Footer = () => {
  return (
    <div id="footer" className="bg-gray-900 py-10 text-xs">
      <div className="container  mx-auto text-center text-white">
        {/* Footer content with copyright notice and links */}
        <p className="flex md:flex-row flex-col gap-8 justify-center">
          <span className="block">&copy; SpaceX 2023</span>
          {/* Link to SpaceX's Privacy Policy */}
          <a
            href="#"
            aria-label="SpaceX's Privacy Policy"
            target="_blank"
            className="ml-4 block text-gray-200 hover:text-gray-400 transition-colors duration-300 font-bold"
          >
            PRIVACY POLICY
          </a>
          {/* Link to information for SpaceX suppliers */}
          <a
            href="#"
            aria-label="Information for SpaceX suppliers"
            className="ml-4 block text-gray-200 hover:text-gray-400 transition-colors duration-300 font-bold"
          >
            SUPPLIERS
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
