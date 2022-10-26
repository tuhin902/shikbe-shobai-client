import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-5 gap-6'>
                <LeftSideNav></LeftSideNav>
                <div className='col-span-3'>
                    <Outlet></Outlet>
                </div>
                <RightSideNav></RightSideNav>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;