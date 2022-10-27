import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {

    const { img, name } = course;

    return (
        <div>
            <Link to={`/category/${course.id}`}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default CourseCard;