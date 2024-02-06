import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Courses from "../components/Courses/Courses";
import Blog from "../components/Blog/Blog";
import FAQ from "../components/FAQ/FAQ";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Topics from "../components/Topics/Topics";
import Details from "../components/Details/Details";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/courses", element: <Courses></Courses> },
      { path: "blog", element: <Blog></Blog> },
      { path: "/faq", element: <FAQ></FAQ> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
        {
            path: "/courses/:id",
            element: <Topics></Topics>,
            loader: ({params}) => {
                return fetch(
                  `https://frontcraft-academy-server.vercel.app/courses/${params.id}`
                );
            }
        },
        {
            path: "/courses/topic/:id",
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params}) => {
                return fetch(
                  `https://frontcraft-academy-server.vercel.app/courses/topic/${params.id}`
                );
            }
        }
    ],
  },
  {
    path: "*",
    element: (
      <div className="w-full h-screen flex justify-center items-center text-3xl text-blue-600">
        Not Found 404 !!!
      </div>
    ),
  },
]);

export default router;