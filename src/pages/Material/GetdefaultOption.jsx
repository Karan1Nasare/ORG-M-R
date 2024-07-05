import React, { useEffect } from 'react';
import TextField from '../../components/shared/input/TextField';
import MenuItem from '../../components/shared/menuitem/MenuItem';
import useDefaultStdOption from '../../hooks/getDefaultStdOption';

function GetdefaultOption({ pageTitle, setselectedoptions }) {
  console.log('🚀 ~ GetdefaultOption ~ pageTitle:', pageTitle);
  const {
    courseOptions,
    subjectOptions,
    selectedCourse,
    selectedSubject,
    setSelectedCourse,
    setSelectedSubject,
    fetchSubjectOptions,
    fetchCourseOptions,
  } = useDefaultStdOption();

  const handleCourseChange = e => {
    const courseId = e.target.value;
    setSelectedCourse(courseId);
    setSelectedSubject('');
    setselectedoptions({ course: courseId });

    fetchSubjectOptions(courseId);
  };

  const handleSubjectChange = e => {
    const subjectId = e.target.value;
    setSelectedSubject(subjectId);
    setselectedoptions({ course: selectedCourse, subject: subjectId });
  };

  useEffect(() => {
    if (pageTitle === 'Chapter' || pageTitle === 'Subject') {
      fetchCourseOptions();
    }
  }, [pageTitle]);

  if (pageTitle === 'Chapter') {
    return (
      <>
        <TextField
          select
          value={selectedCourse}
          fullWidth
          onChange={handleCourseChange}
          placeholder='Select Course'
          sx={{ marginRight: 2 }}
        >
          {courseOptions?.length === 0 ? (
            <MenuItem value='' disabled>
              No Courses Available
            </MenuItem>
          ) : (
            courseOptions?.map(option => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.name}
              </MenuItem>
            ))
          )}
        </TextField>
        <TextField
          select
          value={selectedSubject}
          fullWidth
          onChange={handleSubjectChange}
          placeholder='Select Subject'
          disabled={
            !selectedCourse || selectedCourse === 'No Courses Available'
          }
        >
          {subjectOptions?.length === 0 ? (
            <MenuItem value='' disabled>
              No Subjects Available
            </MenuItem>
          ) : (
            subjectOptions?.map(option => (
              <MenuItem key={option?.id} value={option?.id}>
                {option?.name}
              </MenuItem>
            ))
          )}
        </TextField>
      </>
    );
  }

  if (pageTitle === 'Subject') {
    return (
      <TextField
        select
        value={selectedCourse}
        fullWidth
        onChange={handleCourseChange}
        placeholder='Select Course'
      >
        {courseOptions.length === 0 ? (
          <MenuItem value='' disabled>
            No Courses Available
          </MenuItem>
        ) : (
          courseOptions.map(option => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))
        )}
      </TextField>
    );
  }

  return null;
}

export default GetdefaultOption;
