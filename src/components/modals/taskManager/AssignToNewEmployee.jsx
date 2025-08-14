import { ArrowLeft, X } from 'lucide-react';
import React, { useState } from 'react'


const AssignToNewEmployee = ({ onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    };


    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-primary_white p-6 shadow-lg w-[90%] max-w-[455px] h-[550px] rounded-xl overflow-y-scroll hide-scrollbar">
                <div className='flex items-center gap-5'>

                    <button
                        onClick={onClose}
                        className=""
                    >
                        <ArrowLeft />
                    </button>
                    <div>
                        <h2 className="text-sm md:text-[20px] font-semibold text-[#1A1A1A] mb-1">Assignee Details</h2>
                    </div>
                </div>
                <div>

                    <form action="" className='flex flex-col gap-5 mt-5'>

                        <label htmlFor="" className='font-medium text-[14px] text-[#1A1A1A]'>Select Employee
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center w-full'>
                                <Select options={['Retailer', 'Wholesaler']} />

                            </div>
                        </label>


                        <label htmlFor="" className='font-medium text-[14px] text-[#1A1A1A]'>Description
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center'>
                                <textarea type="text" placeholder='Description' className='outline-none bg-transparent placeholder:text-xs placeholder:font-medium placeholder:text-[#484848] w-full'></textarea>
                            </div>
                        </label>
                        <label htmlFor="" className='font-medium text-[14px] text-[#1A1A1A]'>Select A Due Date
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center'>
                                <input type="text" placeholder='Due Date' className='outline-none bg-transparent placeholder:text-xs placeholder:font-medium placeholder:text-[#484848] w-full' />
                            </div>
                        </label>
                        <button className='bg-primary_blue  text-[#FCFCFD] w-full py-3 rounded-lg text-[16px] font-semibold h-[52px]' onClick={onClose} >
                            Assign to New Employee
                        </button>
                    </form>
                </div>
            </div>
            {/* Modal */}
        </div>
    )
}

const Select = ({ label, options = [] }) => (
    <label className="block text-sm font-medium text-[#1A1A1A] w-full">
        {label}
        <select className=' bg-transparent rounded-lg h-[48px] p-4 flex items-center outline-none w-full'>
            <option>Select {label}</option>
            {options.map((opt, idx) => (
                <option key={idx}>{opt}</option>
            ))}
        </select>
    </label>
);

export default AssignToNewEmployee
