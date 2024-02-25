import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: ["/", "/api/webhooks/clerk", "/api/webhooks/stripe"],
  ignoredRoutes: [""],
  // debug: true
});
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};