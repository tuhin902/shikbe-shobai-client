import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const categories = useLoaderData();
    console.log(categories);

    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={categories.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{categories.name}!</h2>
                    <p className='text-xl'>Instructor :{categories.instructor}</p>
                    <h3 className='text-xl'>Details:</h3>
                    <p>{categories.details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/packeg/${categories.id}`}>
                            <button className="btn btn-primary">Get Premium Acess</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;