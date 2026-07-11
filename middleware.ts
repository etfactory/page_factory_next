import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get paths
  const pathname = request.nextUrl.pathname;

  // We only protect /management and mutating /api/projects routes
  const isManagementRoute = pathname.startsWith('/management');
  const isApiRoute = pathname.startsWith('/api/projects');
  
  // For API, we only want to protect POST, PUT, DELETE.
  // GET is allowed for public viewing (if ever accessed directly via client).
  const isMutatingApi = isApiRoute && ['POST', 'PUT', 'DELETE'].includes(request.method);

  if (isManagementRoute || isMutatingApi) {
    const basicAuth = request.headers.get('authorization');
    const expectedUser = process.env.ADMIN_USERNAME;
    const expectedPwd = process.env.ADMIN_PASSWORD;

    if (basicAuth && expectedUser && expectedPwd) {
      try {
        const [scheme, authValue] = basicAuth.split(' ');

        if (scheme === 'Basic' && authValue) {
          const [user, pwd] = atob(authValue).split(':');

          if (user === expectedUser && pwd === expectedPwd) {
            return NextResponse.next();
          }
        }
      } catch {
        // Fall through to the 401 response below.
      }
    }

    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/management/:path*', '/api/projects/:path*'],
};
