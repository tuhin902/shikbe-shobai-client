import React from 'react';
import { Link } from 'react-router-dom';

const CourseNav = ({ categorym }) => {
    return (
        <div>
            <p>
                <Link to={`/category/${categorym.id}`}>{categorym.name}</Link>
            </p>

        </div>
    );
};

export default CourseNav;