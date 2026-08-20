import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'vizsil-contabilidade.vercel.app',
          },
        ],
        destination: 'https://www.vizsilconsultoriacontabil.com.br/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
