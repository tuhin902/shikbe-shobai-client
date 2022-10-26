import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <button className="btn btn-outline btn-info mb-4"><span className='mr-2'><FaGoogle></FaGoogle></span> Login with Google</button>
            <br />
            <button className="btn btn-outline btn-success"><span className='mr-2'><FaGithub></FaGithub></span>Login with Github</button>

        </div>
    );
};

export default RightSideNav;