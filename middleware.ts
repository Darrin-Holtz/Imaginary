import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/", "/transformations/add/recolor", "/transformations/add/remove"],
  ignoredRoutes: ["/app/api/webhooks/clerk"],
  debug: true
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};