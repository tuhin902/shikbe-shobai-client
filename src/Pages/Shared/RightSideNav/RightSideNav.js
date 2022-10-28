import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseNav from '../../CourseNav/CourseNav';


const RightSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://learning-platform-server-two.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <div className='ml-10 mt-5'>
                <h3 className='text-3xl mb-5 p-5 border border-success rounded-2xl text-emerald-600 shadow-xl shadow-emerald-600'>Find your courses</h3>
                <div>
                    {
                        categories.map(categorym => <CourseNav categorym={categorym} key={categorym.id}></CourseNav>)
                    }
                </div>
            </div>


        </div>
    );
};

export default RightSideNav;