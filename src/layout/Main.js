import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4 gap-6 mt-5'>
                <div className='col-span-3 ml-10'>
                    <Outlet></Outlet>
                </div>
                <RightSideNav></RightSideNav>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;