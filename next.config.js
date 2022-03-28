module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_STRIPE_PK: process.env.NEXT_PUBLIC_STRIPE_PK,
  },
  images: {
    domains: ['images-na.ssl-images-amazon.com'],
  },
  
}
