// Components/AddStaffForm.jsx

import React from 'react';

const AddStaffForm = () => {
  return (
    <div className='min-h-screen bg-[#081028] flex justify-center items-center'>
      <div className='w-full max-w-[1024px] p-7 bg-slate-900 rounded-xl border border-gray-700'>
        <div className='mb-7'>
          <div className='flex items-center mb-7'>
            <div className='bg-orange-400 h-7 w-1 rounded-3xl mr-2'></div>
            <h1 className="text-white text-lg font-['Helvetica']">Add Staff</h1>
          </div>
          <div className='flex items-center gap-7'>
            <div className='flex items-center gap-7'>
              <div className='w-28 h-28 rounded-full border border-white relative'></div>
              <div>
                <div className="text-white text-lg font-['Helvetica'] mb-2">
                  Upload Your Profile Picture
                </div>
                <div className="text-gray-400 text-sm font-['Manrope'] leading-tight">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <button className='px-4 py-2.5 bg-white rounded-lg flex items-center gap-2.5'>
                <span className="text-black text-sm font-['Helvetica']">
                  Choose File
                </span>
              </button>
              <button className='px-4 py-2.5 bg-rose-400/20 rounded-lg flex items-center gap-2.5'>
                <span className="text-rose-400 text-sm font-['Manrope']">
                  Remove
                </span>
              </button>
            </div>
          </div>
        </div>
        <form>
          <div className='grid grid-cols-2 gap-7 mb-7'>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Organization
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Select Organization'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Subject
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Select Subject'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Standard
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Select Standard'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Primary Standard
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Select Primary Standard'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Staff Full Name
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Staff Full Name'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Staff Email
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Staff Email'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Phone Number
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Phone Number'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                ID
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter ID'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Address
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Student Phone'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                City
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Manrope'] w-full focus:outline-none"
                  placeholder='Enter City'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                State
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Student Parents Phone'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Degree
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Degree'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Password
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Password'
                  type='password'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="text-white text-sm font-['Helvetica']">
                Confirm Password
              </label>
              <div className='h-10 px-3 rounded border border-gray-700 flex items-center'>
                <input
                  className="bg-transparent text-stone-300 text-sm font-['Helvetica'] w-full focus:outline-none"
                  placeholder='Enter Confirm Password'
                  type='password'
                />
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='px-4 py-2.5 bg-white rounded-lg flex items-center gap-2.5'>
              <span className="text-slate-900 text-base font-['Helvetica']">
                Add Staff
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffForm;
