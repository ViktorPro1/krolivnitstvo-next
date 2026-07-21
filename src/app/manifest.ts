import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Кролівництво від А до Я",
        short_name: "Кролівництво",
        description:
            "Повний довідник з кролівництва — породи, догляд, годування, хвороби",
        theme_color: "#27500A",
        background_color: "#faf7f0",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
            {
                src: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}