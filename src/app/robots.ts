import type { MetadataRoute } from "next";

// ЗМІНИ на реальний production-домен перед деплоєм, якщо він відрізняється.
const BASE_URL = "https://rabbit-farming-from-a-to-z-react.vercel.app";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}