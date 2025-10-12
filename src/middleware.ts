import {NextRequest, NextResponse} from "next/server";
import {checkToken} from "@/lib/middleware/functions";


export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl


    const checkTokenPath = ["/doctor", "/patient"];
    if (checkTokenPath.some(path => pathname.startsWith(path))) {
        if (!checkToken(request)) {
            return NextResponse.rewrite(new URL("/error", request.url));
        }
    }


    return NextResponse.next();

}


export const config = {
    matcher: [
        '/doctor/:path*',
        '/patient/:path*',
    ],
};