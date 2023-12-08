import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../../assets/login.svg";
// ..
AOS.init();

export default function SignIn() {
    const [loginError, setLoginError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const { logIn, auth, provider } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Form Submitting");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setLoginError("");
        logIn(email, password)
            // eslint-disable-next-line no-unused-vars
            .then((result) => {
                navigate(location?.state ? location.state : "/");
                toast.success("Log In Successfull", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) => {
                console.error(error);
                setLoginError(error.message);
            });
    };
    // console.log("This is Sign in Page");

    const handleGoogle = () => {
        setLoginError("");
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate(location?.state ? location.state : "/");
                console.log(result.user);
            })
            .catch((error) => {
                setLoginError(error.message);
                console.error(error);
            });
    };

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto mt-12">
                <div
                    data-aos="fade-left"
                    className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
                >
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Sign in
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/register"
                                title=""
                                className="font-semibold text-[#39ACFF] transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </p>
                        <form onSubmit={handleLogin} className="mt-8">
                            <div className="space-y-5">
                                <div className="form-control">
                                    <label
                                        htmlFor=""
                                        className="text-base font-medium text-gray-900"
                                    >
                                        {" "}
                                        Email address{" "}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor=""
                                            className="text-base font-medium text-gray-900"
                                        >
                                            {" "}
                                            Password{" "}
                                        </label>
                                        <a
                                            href="#"
                                            title=""
                                            className="text-sm font-semibold text-black hover:underline"
                                        >
                                            {" "}
                                            Forgot password?{" "}
                                        </a>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                {loginError && (
                                    <p className="mt-3 text-red-900 font-semibold">
                                        {loginError}
                                    </p>
                                )}
                                <div className="form-control">
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-3.5 py-2.5 font-semibold leading-7 text-[#39ACFF] hover:bg-[#39ACFF] transition-all duration-100 hover:text-slate-900"
                                    >
                                        Log In{" "}
                                        <ArrowRight
                                            className="ml-2"
                                            size={16}
                                        />
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="mt-3 space-y-3">
                            <button
                                onClick={handleGoogle}
                                type="button"
                                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-[#39ACFF] px-3.5 py-2.5 font-semibold text-slate-900 transition-all duration-100 hover:bg-slate-900 hover:text-[#39ACFF] focus:bg-gray-100 focus:text-black focus:outline-none"
                            >
                                <span className="mr-2 inline-block">
                                    <svg
                                        className="h-6 w-6 text-rose-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                    </svg>
                                </span>
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="h-full w-full">
                    <img
                        className="mx-auto   rounded-md object-cover"
                        src={login}
                        alt=""
                    />
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
