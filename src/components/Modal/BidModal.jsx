import React from 'react';
import Modal from './Modal';

const BidModal = ({ isOpen, onClose, onBidSubmit, fullName, setFullName, email, setEmail, bidAmount, setBidAmount }) => 
  {
    const handleBidSubmit = (e) => {
      e.preventDefault();
      onBidSubmit();
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-5">
        <h1 className="mb-4 text-2xl font-bold text-gray-500">Place Your Bid</h1>
        <form onSubmit={handleBidSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 mb-4 text-gray-500 border"required/>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 text-gray-500 border"
            required
          />
          <input
            type="number"
            placeholder="Bid Amount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            className="w-full p-2 mb-4 text-gray-500 border"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Submit Bid
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default BidModal;