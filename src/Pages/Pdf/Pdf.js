import React from 'react';
import jspdf from 'jspdf'

const Pdf = () => {

    const generatePdf = () => {

        var doc = new jspdf("p", "pt", "a4");
        doc.html(document.querySelector("#container"), {
            callback: function (pdf) {
                pdf.save("mypdf.pdf");
            },
        });
    };

    return (
        <div className='mt-14'>
            <div >
                <h3 className='text-center'>This is the pdf you are looking for.</h3>
                <div id='container' className='text-center'>
                    <h2>This course helps you to learn different language</h2>
                    <h2>You should read it</h2>
                    <p>Details:Here you can learn basic programming language.</p>
                    <h3>You should enroll this course </h3>
                    <h3>we assure you this course will help your upcoming life</h3>
                </div>
            </div>
            <div className='text-center mt-3'>
                <button onClick={generatePdf} className="btn " type="primary">Download pdf</button>
            </div>
        </div>
    );
};

export default Pdf;