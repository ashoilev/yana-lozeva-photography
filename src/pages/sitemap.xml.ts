import type { APIRoute } from "astro";
import { languages, pageSlugs } from "../data/i18n";
import { site } from "../data/site";

const pages = Object.values(pageSlugs);

export const GET: APIRoute = () => {
  const urls = languages.flatMap((lang) => pages.map((slug) => {
    const path = `/${lang}/${slug ? `${slug}/` : ""}`;
    return `<url><loc>${site.origin}${path}</loc><changefreq>${slug === "work" ? "monthly" : "yearly"}</changefreq><priority>${slug === "" ? "1.0" : "0.7"}</priority></url>`;
  }));

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
