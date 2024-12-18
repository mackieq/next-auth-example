'use client'
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <Link href="/login" passHref>
          <button
              className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-6 py-3 rounded-md"
          >
            Sign In
          </button>
        </Link>
      </div>
  );
}