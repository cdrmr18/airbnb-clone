/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiY2RybXIxOCIsImEiOiJjbGViazY4NGEwOTdkM3FsZ2o2MnIzajRwIn0.cIq8Dzbw0Tk-jmwzxpbDDA",
  },
};

module.exports = nextConfig
