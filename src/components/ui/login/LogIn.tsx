'use client'

import React, {useState} from "react";
import {validateEmail, validatePassword} from "@/lib/utils/validation";



interface loginData {
    email: string;
    password: string;
}

export function LogIn() {
    const [error, setError] = useState<{ email?: string; password?: string }>({});
    const [loginData, setLoginData] = useState<Partial<loginData>>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }
    const handleClick = () => {
        const emailError = validateEmail(loginData.email || "");
        const passwordError = validatePassword(loginData.password || "");
        setError({ email: emailError || undefined, password: passwordError || undefined });
        if (!emailError && !passwordError) {
            console.log("The form is valid, data to send:", loginData);
        }
    };

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden mx-auto">
            <div className="bg-blue-600 text-white p-6 text-center">
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <p className="mt-2 opacity-90">Log in to access your account</p>
            </div>

            <div className="p-6 pt-8 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email
                        <input type="email" name={"email"} onChange={handleChange}
                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                               placeholder="your.email@example.com"/>{error.email &&
                            <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password
                        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password"
                               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"/>
                        {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                        <button
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                        </button>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <input type="checkbox"
                               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                        <label className="ml-2 block text-sm text-gray-700">Remember me</label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Forgot password?</a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-md flex items-center justify-center"
                            onClick={handleClick}>Sign in
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600">Don't have an account?
                    <button type="button" className="text-blue-600 hover:text-blue-800 font-medium">Register
                        now</button>
                </p>
            </div>

        </div>

    );

}

