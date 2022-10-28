import React from 'react';
import LeftSide from '../Shared/LeftSide/LeftSide';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Course = () => {
    return (
        <div className='flex flex-col lg:flex-row mt-10'>
            <div>
                <RightSideNav></RightSideNav>
            </div>
            <div >
                <LeftSide></LeftSide>
            </div>
        </div>
    );
};

export default Course;