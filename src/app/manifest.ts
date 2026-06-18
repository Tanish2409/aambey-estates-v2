import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Aambey",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#0e2538",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  };
}
