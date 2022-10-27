import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import Reactpac from "../../Pages/Reactpack/Reactpac";
import Login from "../../Pages/Shared/Login/Login";
import PrivateRoute from "../../Pages/Shared/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Shared/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:4000/courseinfo/${params.id}`)
            },
            {
                path: '/packeg/:id',
                element: <PrivateRoute><Reactpac></Reactpac></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/courseinfo/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            }
        ]
    }
])