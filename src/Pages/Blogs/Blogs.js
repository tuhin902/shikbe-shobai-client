import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mx-10 my-10  text-indigo-400 '>Our Blog Question</h2>
            <div className='border border-indigo-500 shadow-lg shadow-indigo-300 w-1/2 mx-10 my-5 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>what is cors?</h3>
                <p>Ans:
                    Node.js
                    API
                    Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.

                    Express allows you to configure and manage an HTTP server to access resources from the same domain.</p>
            </div>
            <div className='border border-indigo-500 shadow-lg shadow-indigo-300 w-1/2 mx-10 my-20 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Ans:</p>
                <p><li>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</li></p>
                <p><li>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</li></p>
            </div>
            <div className='border border-indigo-500 shadow-lg shadow-indigo-300 w-1/2 mx-10 my-20 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>How does the private route work?</h3>
                <p>Ans:PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login. The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login. In this article, we can see. How to create public and private routes using react-router for your react apps</p>
            </div>
            <div className='border border-indigo-500 shadow-lg shadow-indigo-300 w-1/2 mx-10 my-20 p-5 rounded-xl'>
                <h3 className='text-2xl bold'>What is Node? How does Node work?</h3>
                <p>Ans: <li>Node.js, a JavaScript runtime for building server-side or desktop applications.</li></p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blogs;