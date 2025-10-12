import {NextRequest} from "next/server";

export const checkToken = (request: NextRequest) => {
    const loginData = request.cookies.get("userData")?.value
    if (!loginData) {
        return false;

    }

    try {
        const {token,role} = JSON.parse(loginData);
        if(!token||!role){
            return false;
        }
        const {pathname} = request.nextUrl
        return pathname.startsWith(`/${role}`);


    } catch (err) {

        return false;
    }
}

// export const checkRole = (request: NextRequest) => {
//     const {pathname} = request.nextUrl
//     const loginData = request.cookies.get("loginData")?.value
//     if (!loginData) {
//         return "/";
//     }
//
//     try {
//         const {role} = JSON.parse(loginData!);
//         if (!role) {
//             return "/";
//         }
//         if (pathname.startsWith(`/${role}`)) {
//             return ''
//         } else {
//             console.log(role);
//             const pathArr=pathname.split("/");
//             pathArr.splice(1, 1,role);
//             const newPath = pathArr.join("/");
//             console.log(newPath);
//             return newPath
//
//         }
//
//     } catch (err) {
//         console.log(err);
//         return '/';
//
//     }
//
// }