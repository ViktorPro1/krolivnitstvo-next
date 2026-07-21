/// <reference lib="webworker" />

import { defaultCache } from "@serwist/next/worker";
import { Serwist, CacheFirst, NetworkOnly, ExpirationPlugin } from "serwist";
import type { PrecacheEntry, RuntimeCaching, SerwistGlobalConfig } from "serwist";

declare global {
    interface WorkerGlobalScope extends SerwistGlobalConfig {
        __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
    }
}

declare const self: ServiceWorkerGlobalScope;

const runtimeCaching: RuntimeCaching[] = [
    {
        matcher: ({ url }) => url.hostname === "fonts.googleapis.com",
        handler: new CacheFirst({
            cacheName: "google-fonts-cache",
            plugins: [
                new ExpirationPlugin({
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                }),
            ],
        }),
    },
    {
        matcher: ({ url }) => url.hostname.includes("googletagmanager.com"),
        handler: new NetworkOnly(),
    },
    {
        matcher: ({ url }) => /(www\.|region\d\.)?google-analytics\.com/.test(url.hostname),
        handler: new NetworkOnly(),
    },
    {
        matcher: ({ url }) => url.hostname === "analytics.google.com",
        handler: new NetworkOnly(),
    },
    ...defaultCache,
];

const serwist = new Serwist({
    precacheEntries: self.__SW_MANIFEST,
    skipWaiting: true,
    clientsClaim: true,
    navigationPreload: true,
    runtimeCaching,
});

serwist.addEventListeners();