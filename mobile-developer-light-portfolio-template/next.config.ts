// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // gera saída estática em out/
  output: "export",

  // quando em produção, aplica o basePath para GitHub Pages
  basePath: isProd ? "/louick-portifolio" : "",
  assetPrefix: isProd ? "/louick-portifolio/" : "",
};

export default nextConfig;
