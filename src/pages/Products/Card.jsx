import React, { useState } from "react";
import { AiFillAlert, AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import BidModal from "../../components/Modal/BidModal";


const Card = ({item}) => {
    const {img, title, price, likes, sale } = item;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bidAmount, setBidAmount] = useState(price);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
      }

      const handleBidSubmit = () => {
        const data = {
            fullName: fullName,
            email: email,
            amount: bidAmount
        }

        try {
            fetch('http://localhost:5000/checkout',{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            }).then((response) => {
                if(!response.ok){
                    throw new Error("Network response not ok")
                }
                return response.json()
            }).then((data) => {
                console.log(data)
            })
        } catch (error) {
            console.error(error);
            throw error;
        }
        console.log(data);
        toggleModal();
      }

    return (
        <>
        <div className="relative flex flex-col items-center pb-8 space-y-10 overflow-hidden duration-500 ease-in-out border rounded-lg group border-slate-400/10 hover:shadow-xl hover:shadow-white/100">
            <div  className="relative flex flex-col items-start">
                {/*images and counters*/}
                <img src={img} alt="" className="object-cover"/>
                {
                    sale && (
                        <div className="absolute flex items-center justify-center px-4 py-1 space-x-2 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl bottom-5 left-5">
                            <AiOutlineClockCircle/>
                            <p>66:08:19:27</p>
                        </div>
                    )
                }
            </div>
            {/* content */}
            <div className="flex flex-col px-6 space-y-3">
                <h3>{title}</h3>
                <div>
                {/*price */}
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-2 text-indigo-600">
                        <FaEthereum size={20}/>
                        <p className="text-sm font-semibold">{price} ETH</p>
                        </div>
                        <div className="flex items-center space-x-2 text-indigo-600">
                        <AiFillHeart size={20} className="text-red-600"/>
                        <p className="text-sm font-semibold text-slate-400 ">{likes}</p>
                        </div>
                    </div>
                </div>
            </div>
       
        {/*hover effect*/}
                <div  className="absolute hidden transition-all duration-1000 ease-in-out top-1/4 left-1/3 md:left-1/4 group-hover:flex animate-bounce">
                    <button 
                     onClick={toggleModal}
                     className="px-6 py-2 text-sm duration-200 ease-in-out bg-indigo-600 rounded-md hover:bg-indigo-700">Place bit</button>
                </div>
        </div>
        {/*Modal */}
        <BidModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onBidSubmit={handleBidSubmit}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        bidAmount={bidAmount}
        setBidAmount={setBidAmount}
      />
        
</>
    )
}

export default Card