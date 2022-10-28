import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseCard from '../../CourseCard/CourseCard';

const LeftSide = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://learning-platform-server-two.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {
                courses.map(course => <p key={course.id}><CourseCard course={course}></CourseCard></p>)
            }
        </div>
    );
};

export default LeftSide;