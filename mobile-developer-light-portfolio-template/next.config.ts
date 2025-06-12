// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // Prefixa apenas assets (CSS/JS) em produção
  assetPrefix: isProd ? "/louick-portifolio/" : "",
};

export default nextConfig;
