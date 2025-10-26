'use server'
import {loginDataType, loginResType} from "@/type";
import {logIn} from "@/lib/serverActions/login";

export async function loginActions(_: unknown, loginData: Partial<loginDataType>) {


    const {login, password} = loginData
    if (!login || !password) {
        return {error: "Invalid login data"};
    }

    const credentials = `${login}:${password}`
    const encoder = Buffer.from(credentials).toString("base64");

    try {
        const response = await fetch("http://localhost:8080/account/me",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `basic ${encoder}`,
                },


            });
        if (!response.ok) {
            if (response.status === 401) {
                return {error: "Wrong login"};
            }
            return {error: "something went wrong"};
        }

        const res = await response.json() as loginResType;

        await logIn(res.role.toLowerCase())
        return null
    }catch(err) {
        return {error: "network error"};
    }


}
