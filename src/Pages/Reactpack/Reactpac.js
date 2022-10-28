import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../Category/Category.css'

const Reactpac = () => {

    const pack = useLoaderData();

    return (
        <div className='flex justify-center mt-10 '>
            <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-indigo-400">
                <figure className='category'><img src={pack.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{pack.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">start</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reactpac;