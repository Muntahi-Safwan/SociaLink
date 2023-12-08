import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import error from "../../assets/404.svg";

export default function ErrorPage() {
    return (
        <div className="py-10">
            <div className="text-center grid justify-center">
                <img src={error} className="w-[500px]" alt="" />
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-4 text-base leading-7 text-gray-600">
                    Sorry, we couldn&apos;t find the page you&apos;re looking
                    for.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-3">
                    <Link to="/">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border bg-slate-900 px-3 py-2 text-sm font-semibold text-[#65AFE0] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
