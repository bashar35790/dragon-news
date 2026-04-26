import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="text-center max-w-xl">

                {/* Big 404 */}
                <h1 className="text-8xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-400">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition duration-300 font-medium shadow-lg"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/contact"
                        className="px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-400 transition duration-300 font-medium"
                    >
                        Contact Support
                    </Link>
                </div>

                {/* Decorative element */}
                <div className="mt-10 opacity-20 text-sm">
                    Error code: 404 | Lost in space 🚀
                </div>
            </div>
        </div>
    );
}
