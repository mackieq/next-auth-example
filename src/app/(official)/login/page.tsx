'use client'
import {signIn} from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Test</h2>

                {/* Third-party Login Options */}
                <div className="">
                    <button className= "w-full flex items-center justify-center bg-gray-300 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                        onClick={() => signIn("twitter")}>
                        Sign in with Twitter
                    </button>
                </div>

                {/* Separator */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-4 text-sm text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
            </div>
        </div>
    );
}