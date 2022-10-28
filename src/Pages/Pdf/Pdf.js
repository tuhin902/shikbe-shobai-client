import React from 'react';
import jspdf from 'jspdf'

const Pdf = () => {

    const generatePdf = () => {

        var doc = new jspdf("p", "pt", "a4");
        doc.html(document.querySelector("#content"), {
            callback: function (pdf) {
                pdf.save("mypdf.pdf");
            },
        });
    };

    return (
        <div>
            <div>
                <h3>This is the pdf you are looking for.</h3>
                <div id='container'>
                    <h2>This course helps you to learn different language</h2>
                    <h2>You should read it</h2>
                    <p>Details:Here you can learn basic programming language.</p>
                    <h3>You should enroll this course </h3>
                    <h3>we assure you this course will help your upcoming life</h3>
                </div>
            </div>
            <button onClick={generatePdf} className="btn " type="primary">Download pdf</button>
        </div>
    );
};

export default Pdf;