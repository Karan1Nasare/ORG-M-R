import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import TabTitle from '../../shared/TabTitle';
import AddMultipleForm from './AddMultipleForm';

const AddMultiple = () => {
  return (
    <div>
      <TabTitle title='Add Multiple Student' sx={{ marginTop: '20px' }} />

      <div className='mt-5 border rounded-xl border-gray-700'>
        <AddMultipleForm />
      </div>
      <div className='flex flex-col items-start p-8 text-white rounded-xl border border-gray-700 border-solid bg-secondary__fill mt-7 max-md:px-5'>
        <div className='flex gap-3.5 text-lg'>
          <div className='shrink-0 w-1 h-7 bg-orange-400 rounded-3xl' />
          <div className='flex-auto my-auto'>How to add multiple students</div>
        </div>
        <p className='self-stretch mt-10 text-left text-base leading-7 max-md:max-w-full'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis
          diam diam, ut feugiat tortor auctor nec. Praesent vel nulla felis.
          Maecenas vehicula eu orci vel pellentesque. Pellentesque a ipsum
          commodo ipsum varius laoreet. Aliquam in rutrum tortor. Aenean congue
          non ante non elementum. In accumsan ex mauris, vitae pharetra metus
          sagittis nec. In semper, ipsum scelerisque efficitur venenatis, lorem
          diam aliquet justo, at dapibus nunc elit in est. Aenean tempor vitae
          tortor ac laoreet. Nulla sed velit vel sem consequat aliquet. Nulla eu
          enim ligula.
        </p>
        <div className='flex gap-5 mt-9 text-sm'>
          <div className='flex flex-auto gap-2.5 px-8 py-3.5 rounded-xl bg-slate-900 max-md:px-5'>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/a25f3071ee15d9f934f44dab9d767f89869b240edc3fa7849599796f43c51961?'
              className='shrink-0 w-8 aspect-square'
            />
            <div className='flex-auto my-auto'>Download Sample File</div>
          </div>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/336ef98d354e6831cac0973cbf3ae77d5d7f4073032508f4381d70ba152571c4?'
            className='shrink-0 aspect-square w-[60px]'
          />
        </div>
      </div>
      <div className='flex mt-3 justify-end'>
        <div className=' flex py-2 px-4 rounded bg-white h-11 w-40'>
          <span className='pt-1 mr-1'>
            <IoIosAddCircleOutline size={19} />
          </span>
          <button>Add Student</button>
        </div>
      </div>
    </div>
  );
};

export default AddMultiple;
