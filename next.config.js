/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    s3BucketUrl: `https://${process.env.S3_DCRESTINI_BUCKET}.s3.amazonaws.com`,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "beatricecox-dev.s3.amazonaws.com",
      "beatricecox.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
