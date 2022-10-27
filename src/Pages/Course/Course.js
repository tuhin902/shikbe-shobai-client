import React from 'react';
import LeftSide from '../Shared/LeftSide/LeftSide';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Course = () => {
    return (
        <div className='flex justify-evenly'>
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