
import type { SiteConfig } from "@/types/site.ts";

const siteUrl = import.meta.env.SITE_URL?.trim();

const indexable =
    import.meta.env.SITE_INDEXABLE === 'true';

export const siteConfig: SiteConfig = {
    name: "Serenia Spa",
    description: "Masajes y tratamientos de bienestar en un espacio dedicado a la relajación.",
    url: siteUrl || "https://example.com",
    indexable: indexable && Boolean(siteUrl),
    language: "es-MX",
    logo: "/logo.svg",

    contact: {
        email: "spa@example.com",
        address: "Nogales, Sonora"
    },

    socials: [],
};
