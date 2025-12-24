'use server';



import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {loginResType} from "@/type";

export async function logIn(role:string,id:string,encoder:string):Promise<void> {



    const loginData = {
        token: "adad", role,id,encoder,patientId:id,
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

