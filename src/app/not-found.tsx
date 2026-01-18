import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-4xl font-bold mb-4 font-spaceGrotesk">404</h2>
            <p className="text-xl mb-8 font-spaceGrotesk text-gray-400">Page Not Found</p>
            <Link
                href="/"
                className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors font-mono"
            >
                Return Home
            </Link>
        </div>
    )
}
