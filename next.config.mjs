/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'oontxfdotsriemvynrnf.supabase.co',
          },
        ],
      },
};

export default nextConfig;
