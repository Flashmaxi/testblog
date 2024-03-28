const { withFaust, getWpHostname } = require("@faustwp/core");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  trailingSlash: true,
  experimental: {
    typedRoutes: false,
    appDir: false,
  },
  images: {
    domains: [
      "3.gravatar.com",
      "2.gravatar.com",
      "1.gravatar.com",
      "0.gravatar.com",
      "secure.gravatar.com",
      "images.pexels.com",
      "images.unsplash.com",
      getWpHostname(),
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: getWpHostname(),
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "2.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // from env
      {
        protocol: "https",
        hostname:
          process.env.NEXT_PUBLIC_IMAGE_REMOTE_HOSTNAME_1 || "1.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:
          process.env.NEXT_PUBLIC_IMAGE_REMOTE_HOSTNAME_2 || "1.gravatar.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});
