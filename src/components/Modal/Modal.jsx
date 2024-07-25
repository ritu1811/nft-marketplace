import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50 ">
      <div className="p-8 mx-auto bg-white rounded-lg md:w-1/4">
        {/* Modal content */}
        {children}
        <button onClick={onClose} className="px-4 py-2 mt-4 text-white bg-gray-800 rounded-md hover:bg-gray-700">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;