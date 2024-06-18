import React, { useEffect, useState } from 'react';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import RichTextEditor from '../shared/RichTextEditor';
import { useStore } from '../../store/context-store';
import Dropdown from '../shared/DropDown';
import {
  RHFCustomSelect,
  RHFSelect,
  RHFTextField,
} from '../../hooks/hook-form';

const AddQuestionsInfo = props => {
  const [Store, StoreDispatch] = useStore();
  const standardOptions = [
    { value: 'std1', label: 'Standard 1' },
    { value: 'std2', label: 'Standard 2' },
  ];
  const { questionForm } = props;
  console.log('questions', questionForm);
  const [selectStandardOption, setSelectStandardOption] =
    useState('Select Standard');

  const subjectOptions = ['Subject 1', 'Subject ', 'Subject ', 'Subject '];
  const [selectSubjectOption, setSelectSubjectOption] =
    useState('Select Subject');

  const chapterOptions = ['Chapter 1', 'Chapter 1', 'Chapter 1', 'Chapter 1'];
  const [selectChapterOption, setSelectChapterOption] =
    useState('Select Chapter');

  const topicOptions = ['Topic 1', 'Topic 1', 'Topic 1', 'Topic 1'];
  const [selectTopicOption, setSelectTopicOption] = useState('Select Topic');

  const [questionBankData, setQuestionBankData] = useState(
    {
      title: '',
      description: '',
      standard: '',
      subject: '',
      chapter: '',
      topic: '',
    } || {},
  );
  const handleChange = e => {
    // const { name, value } = e.target;
    // setQuestionBankData({
    //   ...questionBankData,
    //   [name]: value,
    // });
    // if (questionBankData) {
    //   StoreDispatch({
    //     type: 'ADD_QUESTION_BANK',
    //     payload: questionBankData,
    //   });
    // }
  };
  // useEffect(() => {
  //   const { title, description, standard, subject, chapter, topic } =
  //     questionBankData;
  //   StoreDispatch({
  //     type: 'ADD_QUESTION_BANK',
  //     payload: { title, description, standard, subject, chapter, topic },
  //   });
  // }, []);
  return (
    <div className='w-full max-w-screen mx-auto text-white'>
      <div className='p-8 rounded-md mt-6 border border-gray-700 h-[70%] w-full max-w-screen mx-auto bg-secondary__fill'>
        <h3 className='mb-2 text-left'>Exam Title</h3>
        <div className='flex'>
          <RHFTextField
            className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
            placeholder='Enter Exam Title'
            name='examTitle'
            defaultValue=''
            control={questionForm.control}
          />
        </div>
        <h3 className='mt-6 mb-2 text-left'>Description</h3>
        <div className=' border rounded-md w-full max-w-screen mx-auto border-gray-700'>
          <RichTextEditor />
        </div>
        <div className='flex w-full max-w-screen mx-auto'>
          <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
            <h1 className='mt-6 mb-2 text-left'>Select Standard</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <RHFSelect
                className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                placeholder='Enter Exam Title'
                name='standard'
                defaultValue=''
                options={standardOptions}
              />
              {/* <Dropdown
                options={standardOptions}
                selectedOption={selectStandardOption}
                setSelectedOption={setSelectStandardOption}
              /> */}
            </div>
          </div>
          <div className='text-left w-full max-w-screen mx-auto'>
            <h1 className='mt-6 mb-2 text-left'>Select Subject</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <Dropdown
                options={subjectOptions}
                selectedOption={selectStandardOption}
                setSelectedOption={setSelectStandardOption}
              />
            </div>
          </div>
        </div>
        <div className='flex w-full max-w-screen mx-auto'>
          <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
            <h1 className='mt-6 mb-2 text-left'>Select Chapter</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <Dropdown
                options={chapterOptions}
                selectedOption={selectStandardOption}
                setSelectedOption={setSelectStandardOption}
              />
            </div>
          </div>
          <div className='text-left w-full max-w-screen mx-auto'>
            <h1 className='mt-6 mb-2 text-left'>Select Topic</h1>
            <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
              <Dropdown
                options={topicOptions}
                selectedOption={selectStandardOption}
                setSelectedOption={setSelectStandardOption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddQuestionsInfo;
