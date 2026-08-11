import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl;

     const isAuthenticated  = request.cookies.get("auth_session")?.value == "true";
     const userRole = request.cookies.get("user_role")?.value;

     if(pathname.startsWith("/admin")){
        if(!isAuthenticated){
            return NextResponse.redirect(new URL("/login", request.url))
        }
        if(userRole !== "admin"){
             return NextResponse.redirect(new URL("/dashboard", request.url));
        }
     }
     if(pathname.startsWith("/dashboard")){
        if(!isAuthenticated){
            return NextResponse.redirect(new URL("/login", request.url));
        }
     }
     if((pathname == "/login" || pathname === "/signup") && isAuthenticated){
        return NextResponse.redirect(new URL("/dashboard", request.url))
     }

  return NextResponse.next()
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: ["/dashboard/:path", "/admin/:path", "/login", "/signup"],
};
