import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import signup from "../../assets/signup.svg";
// ..
AOS.init();

export default function SignUp() {
    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // Error Reset
        setRegisterError("");
        const specialCharRegex = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/;
        if (password.length < 6) {
            setRegisterError(
                "Password should be at least 6 characters or longer"
            );
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError(
                "Password should have at least one capital letter"
            );
            return;
        }
        if (!specialCharRegex.test(password)) {
            setRegisterError(
                "Password should contain at least one special character"
            );
            return;
        }
        createUser(email, password)
            .then((result) => {
                //update profile
                updateProfile(result.user, {
                    displayName: name,
                });
                console.log(result.user);
                toast.success("Signed Up Successfully", {
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
                console.log(error);
                setRegisterError(error.message);
            });
        console.log(email, name, password);
    };

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mt-12 items-center">
                <div
                    data-aos="fade-right"
                    className=" flex items-end px-4 pb-10  sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24"
                >
                    <div className="">
                        <img className=" rounded-md " src={signup} alt="" />
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
                >
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                            Sign up
                        </h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                title=""
                                className="font-medium text-[#39ACFF] transition-all duration-200 hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                        <form onSubmit={handleRegister} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        {" "}
                                        Full Name{" "}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Full Name"
                                            id="name"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        {" "}
                                        Email address{" "}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-base font-medium text-gray-900"
                                        >
                                            {" "}
                                            Password{" "}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                {registerError && (
                                    <p className="mt-3 text-red-900 font-semibold">
                                        {registerError}
                                    </p>
                                )}
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-[#39ACFF] px-3.5 py-2.5 font-semibold leading-7 text-slate-900 hover:bg-slate-900 hover:text-[#39ACFF]"
                                    >
                                        Create Account{" "}
                                        <ArrowRight
                                            className="ml-2"
                                            size={16}
                                        />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
