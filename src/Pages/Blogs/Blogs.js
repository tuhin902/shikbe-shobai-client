import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border border-indigo-500 w-1/2 mx-10 my-20 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>what is cors?</h3>
                <p>
                    Node.js
                    API
                    Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.

                    Express allows you to configure and manage an HTTP server to access resources from the same domain.</p>
            </div>
            <div className='border border-indigo-500 w-1/2 mx-10 my-20 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p><li>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</li></p>
                <p><li>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</li></p>
            </div>
            <div className='border border-indigo-500 w-1/2 mx-10 my-20 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>How does the private route work?</h3>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='border border-indigo-500 w-1/2 mx-10 my-20 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>What is Node? How does Node work?</h3>
                <p><li>Node.js, a JavaScript runtime for building server-side or desktop applications.</li></p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blogs;