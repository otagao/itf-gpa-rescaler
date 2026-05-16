const BYPASS_HEADER = "x-itf-gpa-rescaler-origin";
const CANONICAL_PREFIX = "https://tools.otagao.net/itf-gpa-rescaler";
const PAGES_HOST = "itf-gpa-rescaler.pages.dev";

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const token = env.ORIGIN_BYPASS_TOKEN;
  const isInternalProxy =
    typeof token === "string" &&
    token.length > 0 &&
    request.headers.get(BYPASS_HEADER) === token;

  if (isInternalProxy) {
    return context.next();
  }

  if (url.hostname === PAGES_HOST) {
    const path = url.pathname === "/" ? "" : url.pathname;
    return Response.redirect(`${CANONICAL_PREFIX}${path}${url.search}`, 302);
  }

  return context.next();
}
