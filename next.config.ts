import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: {
                loader: "@svgr/webpack",
                options: {
                    svgo: true,
                },
            },
        });

        return config;
    },
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.tsx",
            },
        },
    },
};

export default nextConfig;
