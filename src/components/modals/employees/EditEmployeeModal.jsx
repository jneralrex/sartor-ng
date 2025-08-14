import { X } from 'lucide-react';
import React, { useState } from 'react';
import EmployeeModuleModals from './EmployeeModuleModals';
import { useAuth } from '../../../context/AuthContext';
import instance from '../../../utils/axiosInstance';


const roleOptions = [
  "Manager",
  "Admin",
  "Sales Rep",
  "Inventory Manager",
  "Merchandiser",
  "Employee",
];

const EditEmployeeModal = ({ onClose }) => {
      const { token } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [snackbar, setSnackbar] = useState(null);
    const [addNewEmployeeDetails, setAddNewEmployeeDetails] = useState({
      fullName: "",
      address: "",
      email: "",
      phone: "",
      role: "",
      userManagement: false,
      lpo: false,
      payment: false,
      sales: false,
      clg: false,
      workflow: false
    });

    // Handle input changes
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setAddNewEmployeeDetails(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
    };

    const handleModalToggle = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await instance.post("user/create", addNewEmployeeDetails);

    console.log("API response:", res);

    if (res.status === 200 || res.status === 201) {
      setSnackbar({
        type: 'success',
        message: (
          <span className="flex items-center gap-2">
            Employee created successfully!
          </span>
        ),
      });
      setTimeout(() => {
        setSnackbar(null);
        onClose();
      }, 1500);
    } else {
      setSnackbar({
        type: 'error',
        message: (
          <span className="flex items-center gap-2">
            {res.data.message || 'Failed to create employee.'}
          </span>
        ),
      });
      setTimeout(() => setSnackbar(null), 3000);
    }
  } catch (error) {
    console.log("API error:", error?.response || error);
    setSnackbar({
      type: 'error',
      message: (
        <span className="flex items-center gap-2">
          {error.response?.data?.message || 'Failed to create employee.'}
        </span>
      ),
    });
    setTimeout(() => setSnackbar(null), 3000);
  }
};

    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            {snackbar && (
              <div className={`absolute top-5 right-5 px-4 py-3 rounded-md text-sm shadow-md 
                ${snackbar.type === 'error' ? 'bg-red-100 text-red-700 border border-red-400' : 'bg-green-100 text-green-700 border border-green-400'}
              `}>
                {snackbar.message}
              </div>
            )}
            <div className="bg-primary_white p-6 shadow-lg w-[90%] max-w-[455px] h-[550px] rounded-xl overflow-y-scroll hide-scrollbar">
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className="text-sm md:text-[20px] font-semibold text-[#1A1A1A] mb-1">Add A New Employee</h2>
                    </div>
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>
                <div>
                    <form className='flex flex-col gap-5 mt-5' onSubmit={handleSubmit}>
                        <label className='font-medium text-[14px] text-[#1A1A1A]'>Full Name
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center'>
                                <input
                                  type="text"
                                  name="fullName"
                                  value={addNewEmployeeDetails.fullName}
                                  onChange={handleChange}
                                  placeholder='Full Name'
                                  className='outline-none bg-transparent placeholder:text-xs placeholder:font-medium placeholder:text-[#484848] w-full'
                                  required
                                />
                            </div>
                        </label>
                        <label className='font-medium text-[14px] text-[#1A1A1A]'>Email Address
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center'>
                                <input
                                  type="email"
                                  name="email"
                                  value={addNewEmployeeDetails.email}
                                  onChange={handleChange}
                                  placeholder='Email Address'
                                  className='outline-none bg-transparent placeholder:text-xs placeholder:font-medium placeholder:text-[#484848] w-full'
                                  required
                                />
                            </div>
                        </label>
                        <label className='font-medium text-[14px] text-[#1A1A1A]'>Select Role
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center w-full'>
                                <select
                                  name="role"
                                  value={addNewEmployeeDetails.role}
                                  onChange={handleChange}
                                  className='bg-transparent rounded-lg h-[48px] p-4 flex items-center outline-none w-full'
                                  required
                                >
                                  <option value="">Select Role</option>
                                  {roleOptions.map((opt, idx) => (
                                    <option key={idx} value={opt}>{opt}</option>
                                  ))}
                                </select>
                            </div>
                        </label>
                        <label className='font-medium text-[14px] text-[#1A1A1A]'>Employee's Phone Number
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center'>
                                <input
                                  type="text"
                                  name="phone"
                                  value={addNewEmployeeDetails.phone}
                                  onChange={handleChange}
                                  placeholder='Employee Phone Number'
                                  className='outline-none bg-transparent placeholder:text-xs placeholder:font-medium placeholder:text-[#484848] w-full'
                                  required
                                />
                            </div>
                        </label>
                        <label className='font-medium text-[14px] text-[#1A1A1A]'>Employee's Address
                            <div className='mt-1 bg-[#F5F5F5] rounded-lg h-[48px] p-4 flex items-center'>
                                <input
                                  type="text"
                                  name="address"
                                  value={addNewEmployeeDetails.address}
                                  onChange={handleChange}
                                  placeholder='Employee Address'
                                  className='outline-none bg-transparent placeholder:text-xs placeholder:font-medium placeholder:text-[#484848] w-full'
                                  required
                                />
                            </div>
                        </label>
                        {/* Add checkboxes for permissions if needed */}
                        <button className='bg-primary_blue text-[#FCFCFD] w-full py-3 rounded-lg text-[16px] font-semibold h-[52px]' type="submit">
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployeeModal