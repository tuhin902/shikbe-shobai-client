import React from 'react';
import { Link } from 'react-router-dom';

const CourseNav = ({ categorym }) => {
    return (
        <div>
            <p className='mb-5 ml-2 border-b-2 border-indigo-200 rounded-xl p-5'>
                <Link to={`/category/${categorym.id}`}>{categorym.name}</Link>
            </p>

        </div>
    );
};

export default CourseNav;