import React from 'react';

const Faq = () => {
    return (
        <div className='mt-20'>
            <h4 className='text-3xl font-bold text-center'>This questions ask most!</h4>
            <div className='flex justify-center flex-col items-center mt-20'>
                <h2 className='mb-2 font-semibold'>Can i learn programming?</h2>
                <progress className="progress progress-accent w-1/2 mb-10" value="10" max="100"></progress>
                <h2 className='mb-2 font-semibold'>Do i need laptop?</h2>
                <progress className="progress progress-accent w-1/2 mb-10" value="40" max="100"></progress>
                <h2>How much time we need to learn programming?</h2>
                <progress className="progress progress-accent w-1/2 mb-10" value="70" max="100"></progress>
                <h2 className='mb-2 font-semibold'>Benefit of this course?</h2>
                <progress className="progress progress-accent w-1/2 mb-10" value="100" max="100"></progress>
            </div>
        </div>
    );
};

export default Faq;