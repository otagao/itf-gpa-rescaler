const PREFIX = "/itf-gpa-rescaler";
const ORIGIN = "https://itf-gpa-rescaler.pages.dev";
const BYPASS_HEADER = "x-itf-gpa-rescaler-origin";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== PREFIX && !url.pathname.startsWith(`${PREFIX}/`)) {
      return new Response("Not Found", { status: 404 });
    }

    const originPath = url.pathname.slice(PREFIX.length) || "/";
    const target = `${ORIGIN}${originPath}${url.search}`;
    const headers = new Headers(request.headers);

    if (env.ORIGIN_BYPASS_TOKEN) {
      headers.set(BYPASS_HEADER, env.ORIGIN_BYPASS_TOKEN);
    }

    const init = {
      method: request.method,
      headers,
      redirect: "manual",
    };

    if (request.method !== "GET" && request.method !== "HEAD") {
      init.body = request.body;
    }

    return fetch(target, init);
  },
};
