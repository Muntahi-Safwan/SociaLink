import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Portfolio from "../Pages/Portfolio/Portfolio";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import PrivateRoute from "./PrivateRoute";
import Booking from "../Pages/Booking/Booking";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/events.json"),
            },
            {
                path: "/login",
                element: <SignIn></SignIn>,
            },
            {
                path: "/register",
                element: <SignUp></SignUp>,
            },
            {
                path: "/portfolio",
                element: (
                    <PrivateRoute>
                        <Portfolio></Portfolio>
                    </PrivateRoute>
                ),
            },
            {
                path: "/booking",
                element: (
                    <PrivateRoute>
                        <Booking></Booking>
                    </PrivateRoute>
                ),
            },
            {
                path: "/services/:id",
                element: (
                    <PrivateRoute>
                        <ServiceDetail></ServiceDetail>
                    </PrivateRoute>
                ),
                loader: () => fetch("/events.json"),
            },
        ],
    },
]);

export default router;
