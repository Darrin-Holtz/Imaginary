import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/", "/app/api/webhooks/clerk", "/transformations/add/recolor", "/transformations/add/remove"],
  ignoredRoutes: ['/no-auth-in-this-route'],
  debug: true
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};