'use server';



import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function logIn(role: string) {
    const loginData = {
        token: "adad", role
    }

    const cookie = await cookies()
    cookie.delete("userData")
    cookie.set("userData", JSON.stringify(loginData),
        {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60,
        }
    )
    redirect(`/${role}`);

}

export async function logOut() {
   const cookie= await cookies()
   cookie.delete("userData")
    redirect(`/`);


}

