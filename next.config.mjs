/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    experimental: {
    swcPlugins: [['fluentui-next-appdir-directive', { paths: ['@griffel', '@fluentui'] }]],
    },
};

export default nextConfig;
