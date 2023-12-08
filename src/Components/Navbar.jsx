import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Portfolio",
        href: "/portfolio",
    },
    {
        name: "Book an Event",
        href: "/booking",
    },
    {
        name: "Sign Up",
        href: "/register",
    },
];

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="relative w-full bg-[#08294F]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <h1 className="font-bold text-[42px] text-[#BC246F]">
                        Socia<span className="text-[#65AFE0]">Link</span>
                    </h1>
                </div>
                <div className="hidden grow items-start lg:flex">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.href}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                            ? "active inline-flex items-center text-sm font-semibold text-[#65AFE0] border-2 border-[#65AFE0] px-2 rounded-lg"
                                            : "inline-flex items-center text-sm font-semibold text-white hover:text-[#65AFE0]"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden space-x-2 lg:flex lg:items-center">
                    {user ? (
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-12 mr-4 rounded-full ">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <h1 className="text-white mr-3">
                                {user.displayName}
                            </h1>
                            <button
                                onClick={handleSignOut}
                                type="button"
                                className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button
                                type="button"
                                className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Log In
                            </button>
                        </Link>
                    )}
                </div>
                <div className="lg:hidden">
                    <Menu
                        color="#ffffff"
                        onClick={toggleMenu}
                        className="h-6 w-6 cursor-pointer"
                    />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <X
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-3">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <div className="mt-2 space-y-2">
                                    <Link to="/login">
                                        <button
                                            type="button"
                                            className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            Login
                                        </button>
                                    </Link>
                                    {user ? (
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="w-12 mr-4 rounded-full ">
                                                    <img src={user.photoURL} />
                                                </div>
                                            </div>
                                            <h1 className="text-white mr-3">
                                                {user.displayName}
                                            </h1>
                                            <button
                                                onClick={handleSignOut}
                                                type="button"
                                                className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                Log Out
                                            </button>
                                        </div>
                                    ) : (
                                        <Link to="/login">
                                            <button
                                                type="button"
                                                className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                Log In
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
