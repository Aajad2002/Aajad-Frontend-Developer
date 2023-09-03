// This component displays details of a SpaceX capsule and allows the user to close the modal.

export const CapsuleDetails = ({ capsule, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Semi-transparent background overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white p-8 rounded-lg z-10">
        <div>
          {/* SpaceX logo */}
          <img
            className="block m-auto w-[150px] mix-blend-multiply"
            src="https://secureservercdn.net/160.153.137.14/lnw.f0e.myftpupload.com/wp-content/uploads/2020/09/SpaceX_logo_black_Space_X-2048x252.png"
            alt=""
          />
        </div>
        <div className="mt-2 flex md:flex-row justify-center flex-col ">
          {/* Loading animation */}
          <img
            className="w-[200px] mix-blend-multiply animate-spin block m-auto"
            src="https://tse2.mm.bing.net/th?id=OIP.96XHTjTRjtjIF8gwHjpfLwHaHa&pid=Api&P=0&h=180"
            alt=""
          />
        </div>
        <h2 className="text-2xl mt-3 font-semibold text-[#333] mb-4">
          {/* Displaying capsule serial number */}
          {capsule.capsule_serial} Details
        </h2>
        <div className="text-gray-700 text-left">
          <p>
            {/* Displaying capsule status */}
            <strong>Status:</strong> {capsule.status}
          </p>
          <p>
            {/* Displaying original launch date */}
            <strong>Original Launch:</strong> {capsule.original_launch}
          </p>
          <p>
            {/* Displaying capsule type */}
            <strong>Type:</strong> {capsule.type}
          </p>
          <p>
            {/* Displaying reuse count */}
            <strong>Reuse Count:</strong> {capsule.reuse_count}
          </p>
          <p className="mb-4">
            {/* Displaying capsule details */}
            <strong>Details:</strong> {capsule.details}
          </p>
        </div>
        {/* Close button to close the modal */}
        <button
          onClick={closeModal}
          className="bg-[#fff] w-[180px] py-2 px-4 rounded border-[3px] border-black font-[poppin] font-bold text-[#333] transition-colors duration-300 hover:text-[#fff] hover:bg-black m-auto ease-in-out hover:scale-110"
        >
          Close
        </button>
      </div>
    </div>
  );
};
