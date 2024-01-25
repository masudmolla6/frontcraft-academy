import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import Blog from "../components/Blog/Blog";
import FAQ from "../components/FAQ/FAQ";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/courses', element: <Courses></Courses> },
            { path: 'blog', element: <Blog></Blog> },
            { path: '/faq', element: <FAQ></FAQ> },
            {path:'/login', element:<Login></Login>}
        ]
    }
])

export default router;