/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'slice-menu-assets-prod.imgix.net',
        },
        {
          protocol: 'https',
          hostname: 'www.thespruceeats.com',
        },
        {
          protocol: 'https',
          hostname: 'www.seriouseats.com',
        },
        {
          protocol: 'https',
          hostname: 'www.cookingclassy.com',
        },
        {
          protocol: 'https',
          hostname: 'www.acouplecooks.com',
        },
        {
          protocol: 'https',
          hostname: 'yumtastic.pk',
        },
        {
          protocol: 'https',
          hostname: 'i0.wp.com',
        },
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com', // Added Google Cloud Storage domain
        },
        {
          protocol: 'https',
          hostname: 'kfoods.com',
          pathname: '/**', // Added pattern for kfoods.com
        },
        // Add more patterns if needed
      ],
    },
  };
  
  export default nextConfig;
  