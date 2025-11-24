'use server'
import {loginDataType, loginResType} from "@/type";
import {logIn} from "@/lib/serverActions/login";
import {baseUrl} from "@/components/common/const";

export async function loginActions(_: unknown, loginData: Partial<loginDataType>) {


    const {login, password} = loginData
    if (!login || !password) {
        return {error: "Invalid login data"};
    }

    const credentials = `${login}:${password}`
    const encoder = Buffer.from(credentials).toString("base64");

    try {
        const response = await fetch(`${baseUrl}/me`,
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

        const data = await response.json() as loginResType;

        await logIn(data.role.toLowerCase(),data.id,encoder);
        return null
    }catch(err) {
        return {error: "network error"};
    }


}
