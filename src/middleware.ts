import createIntlMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
 
export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const defaultLocale = request.headers.get('x-default-locale') || 'en';
  const requestHeaders = new Headers(request.headers);

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'vi'],
    defaultLocale
  });
  const response = handleI18nRouting(request);

  // console.log('request :>> ', request);
  // Step 3: Alter the response (example)
  response.headers.set('x-pathname', Date.now() + "1243");
 
  return response;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(vi|en)/:path*']
};