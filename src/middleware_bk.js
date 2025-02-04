import {NextResponse} from "next/server";

// export function middleware(request){
//     // return NextResponse.redirect(new URL('/quiz', request.url));
//     // return NextResponse.rewrite(new URL("/under-construction", request.url));
//     if(request.nextUrl.pathname.startsWith("/about")){
//         return NextResponse.redirect(new URL('/quiz', request.url));
//     }
// }

// export const config = {
//     matcher: "/about/:path*",
// };


// export const config = {
//     matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
// }

export function middleware(request){
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-hello-from-middleware', 'hello');


/////////////////////////////////////////////////////
    let cookie = request.cookies.get("nextjs");
    console.log(cookie);

    const allCookies = request.cookies.getAll();
    console.log(allCookies);

    request.cookies.has("nextjs");
    request.cookies.delete("nextjs");
    request.cookies.has("nextjs");

    const response = NextResponse.next({
        request:{
            headers: requestHeaders,
        }
    });

    response.headers.set("x-hello-from-middleware2", "hello");
    
    response.cookies.set("vercel", "fast");
    response.cookies.set({
        name: "vercel",
        value: "fast",
        path: "/",
    });
    cookie = response.cookies.get("vercel");
    console.log(cookie);

    return response;
    
}