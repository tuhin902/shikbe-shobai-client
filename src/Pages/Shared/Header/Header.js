import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleToggle = () => {
        var element = document.body;
        element.classList.toggle("dark-mode")
    }

    return (
        <div>
            <div className="navbar bg-black-100 border-indigo-600 border-b-2 drop-shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-sucess lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-success'><Link>Home</Link></li>
                            <li className='text-success'><Link to='/couse'>Course</Link></li>
                            <li className='text-success'><Link to='/blogs'>Blogs</Link></li>
                            <li className='text-success'><Link to='/register'>Register</Link></li>
                            <li className='text-success'><Link to='/login'>Log in</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <div className="w-16 rounded-full">
                            <img className='rounded-full' src="https://www.oasdom.com/wp-content/uploads/2018/01/oasdom.com-6-free-logo-design-online-696x391.jpg" />
                        </div>
                        <Link to='/' className="btn btn-success btn-outline border-none normal-case text-xl">Shikbe Shobai</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-sm">
                        <li className='text-success'><Link to='/'>Home</Link></li>
                        <li className='text-success'><Link to='/course'>Course</Link></li>
                        <li className='text-success'><Link to='/blogs'>Blogs</Link></li>
                        <li className='text-success'><Link to='/faq'>FAQ</Link></li>
                        <li className='text-success'><button onClick={handleToggle}>light/dark</button></li>
                        {
                            user ?
                                <button className='text-success' onClick={handleLogout}>Log out</button>
                                :
                                <>
                                    <li className='text-success'><Link to='/register'>Register</Link></li>
                                    <li className='text-success'><Link to='/login'>Log in</Link></li>
                                </>

                        }
                    </ul>
                    {/* <p>{user?.displayName}</p>
                    { 

                        <img src={user?.photoURL} />
                    } */}
                </div>
                <div className='ml-10 w-10'>

                    <div className='tooltip tooltip-left ' data-tip={user?.displayName}>
                        {
                            <img className='rounded-md' src={user?.photoURL} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;