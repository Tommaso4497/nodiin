/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    { throwIfNamespace: false },
  ],
};

module.exports = nextConfig
