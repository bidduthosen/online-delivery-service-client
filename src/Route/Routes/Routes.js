import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import ServiceCart from "../../Pages/ServiceCart/ServiceCart";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blogs></Blogs>
            },
            {
                path: 'services',
                element: <ServiceCart></ServiceCart>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path: 'services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])