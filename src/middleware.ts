
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";
// import { getCurrentUser } from "./utils/actions/loginUser";


/*Role Based Type*/
type Role = keyof typeof roleBasedPrivateRoutes;


const authRoutes = ["/login", "signup"]
/*Role Based Private Routes*/
const roleBasedPrivateRoutes = {
  USER: [/^\/user/, /^\/kaku/],
  ADMIN: [/^\/admin/, /^\/kaku/, /^\/addProject/, /^\/updateProject/, /^\/addSkills/],
}
export const middleware = async (request: NextRequest) => {

  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();
  // console.log(userInfo);


  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    else {
      return NextResponse.redirect(new URL(`http://localhost:3000/login?redirectPath=${pathname}`, request.url))
    }
  }

  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/admin", "/admin/:page", "/admin/updateProject", "/admin/addSkills", "/admin/addProject", "/admin/updateProject/:id"],
};
