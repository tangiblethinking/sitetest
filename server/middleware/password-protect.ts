/**
 * Site-wide Basic Auth password gate.
 * Password: uxfun (any username).
 * Auto-registered as Nitro global middleware via serverDir.
 */
interface AuthEvent {
  req: { headers: Headers };
}

function isAuthorized(authHeader: string | null): boolean {
  if (!authHeader?.startsWith("Basic ")) return false;
  try {
    const decoded = atob(authHeader.slice(6));
    const colon = decoded.indexOf(":");
    const password = colon >= 0 ? decoded.slice(colon + 1) : decoded;
    return password === "uxfun";
  } catch {
    return false;
  }
}

export default function passwordProtectMiddleware(
  event: AuthEvent,
  next: () => unknown | Promise<unknown>,
): unknown | Promise<unknown> {
  const authHeader = event.req.headers.get("authorization");
  if (isAuthorized(authHeader)) {
    return next();
  }

  return new Response("Password required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected"',
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
