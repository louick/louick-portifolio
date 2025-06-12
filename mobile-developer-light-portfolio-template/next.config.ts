// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",

  // só prefixa os assets em produção
  assetPrefix: isProd ? "/louick-portifolio/" : "",
};

export default nextConfig;
