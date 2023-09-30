import { NextResponse } from "next/server";

export function middleware(request) {
    if (!request.cookies.has('user_email')) {
        return NextResponse.redirect(new URL('/login', request.url))

    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/:path', '/dashboard:path']
}