/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/submissions",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
