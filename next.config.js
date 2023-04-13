const { withContentlayer } = require('next-contentlayer')
/** @type {import('next').NextConfig } */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'i.scdn.co', // spotify
      'a.ltrbxd.com', // letterboxd
      'steamcdn-a.akamaihd.net', // steam
    ],
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
          // Opt-out of Google FLoC: https://amifloced.org/
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
  redirects() {
    return [
      {
        source: '/gamedev',
        destination: 'https://gamedev.jeffjadulco.com',
        permanent: false,
      },
    ]
  },
}

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://gc.zgo.at http://gc.zgo.at;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data: https://jeffjadulco.goatcounter.com/count;
  media-src 'none';
  connect-src *;
  font-src 'self';
`

module.exports = withContentlayer(nextConfig)
