/**
 * Site-wide Basic Auth password gate.
 * Password: uxfun (empty username accepted).
 * Runs as Nitro global middleware.
 */
export default defineEventHandler((event) => {
  const authHeader = getHeader(event, "authorization");
  const expected = "Basic " + Buffer.from(":uxfun").toString("base64");

  if (authHeader === expected) {
    return;
  }

  // Also accept username "user" or any username with password uxfun
  if (authHeader?.startsWith("Basic ")) {
    try {
      const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf8");
      const colon = decoded.indexOf(":");
      const password = colon >= 0 ? decoded.slice(colon + 1) : decoded;
      if (password === "uxfun") {
        return;
      }
    } catch {
      // fall through
    }
  }

  setHeader(event, "WWW-Authenticate", 'Basic realm="Protected"');
  throw createError({
    statusCode: 401,
    statusMessage: "Unauthorized",
    message: "Password required",
  });
});
