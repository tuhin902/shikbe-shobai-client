import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";


const RightSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <div className='pr-20'>
                <h3 className='text-3xl mb-2'>All category</h3>
                <div>
                    {
                        categories.map(category => <p key={category.id} className='mb-2' >
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </p>)
                    }
                </div>
            </div>
            <div className='my-10'>
                <button className="btn btn-outline btn-info mb-4"><span className='mr-2'><FaGoogle></FaGoogle></span> Login with Google</button>
                <br />
                <button className="btn btn-outline btn-success"><span className='mr-2'><FaGithub></FaGithub></span>Login with Github</button>
            </div>

        </div>
    );
};

export default RightSideNav;