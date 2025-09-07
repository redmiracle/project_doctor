'use client'

import React, {useState} from "react";

interface loginData {
    email: string;
    password: string;
}

export function LogIn() {

    const [loginData, setLoginData] = useState<Partial<loginData>>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }
    const handleClick= () => {
        console.log(loginData);
    }

    return (
        <div>
            <label>Email:
                <input type="email" name={"email"}
                       onChange={handleChange}
                />
            </label>
            <label>Password:
                <input type="password" name={"password"}
                       onChange={handleChange}/>
            </label>
            <button onClick={handleClick}>Push</button>

        </div>
    );

}

