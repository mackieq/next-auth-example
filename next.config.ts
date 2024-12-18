import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["@meshsdk/core", "@meshsdk/core-cst", "@meshsdk/react"],
  webpack: function (config, {isServer}) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    if (!isServer) config.target = "web"
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/cgent/:path*', // 匹配所有以 /api 开头的请求
        destination: 'http://localhost:8080/cgent/:path*', // 代理到目标服务器
      },
    ];
  }
};

export default nextConfig;
