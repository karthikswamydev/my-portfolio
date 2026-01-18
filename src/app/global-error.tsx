'use client'

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
                    <h2 className="text-2xl font-bold mb-4 font-spaceGrotesk">Something went wrong!</h2>
                    <pre className="bg-gray-900 p-4 rounded text-red-400 font-mono text-sm mb-6 max-w-full overflow-auto border border-gray-800">
                        {error.message}
                    </pre>
                    <button
                        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors font-mono"
                        onClick={() => reset()}
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    )
}
