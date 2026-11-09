module.exports = {
  images: {
    remotePatterns: [
      { hostname: 'a.ltrbxd.com' }, // letterboxd
      { hostname: 'steamcdn-a.akamaihd.net' }, // steam
    ],
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
        ],
      },
    ];
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
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`
