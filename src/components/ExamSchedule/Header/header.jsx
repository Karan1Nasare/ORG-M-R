import React, { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
} from '../../../hooks/hook-form';
import { getCoursesList } from '../../../services/exam/index';

const Header = ({ selectedData, setSelectedData }) => {
  const methods = useForm({});
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async data => {
    console.log('submit');
  };

  const [courseOptions, setCourseOptions] = useState([]);
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [chapterOptions, setChapterOptions] = useState([]);

  const onOptionChange = async (type, value) => {
    let query = '';
    let response = [];
    switch (type) {
      case 'course_id':
        query = `?course_id=${value}`;
        response = await getCoursesList(query);
        if (response.data.data.length) {
          setSubjectOptions(
            response.data.data.map(item => {
              return { label: item.name, value: item.id };
            }),
          );
        } else {
          setSubjectOptions([]);
        }
        setChapterOptions([]);
        break;
      case 'subject_id':
        query = `?course_id=${selectedData.course_id}&subject_id=${value}`;
        response = await getCoursesList(query);
        if (response.data.data.length) {
          setChapterOptions(
            response.data.data.map(item => {
              return { label: item.name, value: item.id };
            }),
          );
        } else {
          setChapterOptions([]);
        }
        break;
      case 'chapter_id':
        break;
      default:
        response = await getCoursesList(query);
        if (response.data.data.length) {
          setCourseOptions(
            response.data.data.map(item => {
              return { label: item.name, value: item.id };
            }),
          );
        } else {
          setCourseOptions([]);
        }
        setSubjectOptions([]);
        setChapterOptions([]);
        break;
    }
  };

  useEffect(() => {
    onOptionChange();
  }, []);

  const onFormChange = e => {
    const { name, value } = e.target;
    setSelectedData({
      ...selectedData,
      [name]: value,
    });
    onOptionChange(name, value);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className='flex'>
          <div className='h-1 mt-3 w-7 bg-primary rotate-90' />
          <h1 className='text-white text-xl text-left'>Select Paper</h1>
        </div>
        <div className='bg-secondary__fill h-28 border rounded-xl mt-4 border-gray-700 w-full max-w-screen mx-auto'>
          <div className='flex'>
            <input
              type='text'
              placeholder='Search Name, Inrollment, Standerd'
              className='w-80 ml-8 mt-8 p-2 mr-2 bg-secondary__fill__dark h-10 rounded text-white'
            />
            <div className='h-10 mt-8 bg-secondary__fill__dark mr-2 border rounded-md border-gray-700 w-36'>
              <RHFSelect
                size='small'
                name='course_id'
                placeholder='Select Course'
                onChange={onFormChange}
                options={courseOptions}
              />
            </div>
            <div className='h-10 mt-8 bg-secondary__fill__dark border rounded-md border-gray-700 w-40'>
              <RHFSelect
                size='small'
                name='subject_id'
                placeholder='Select Subject'
                onChange={onFormChange}
                options={subjectOptions}
              />
            </div>
            <div className='h-10 mt-8 bg-secondary__fill__dark border rounded-md border-gray-700 w-40'>
              <RHFSelect
                size='small'
                name='chapter_id'
                placeholder='Select Chapter'
                onChange={onFormChange}
                options={chapterOptions}
              />
            </div>
            <div className='text-white mt-10 ml-2 flex'>
              <span className='mr-1'>
                <IoCloseOutline style={{ fontSize: '1.5rem' }} />
              </span>
              <h2>Clear All</h2>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
export default Header;
