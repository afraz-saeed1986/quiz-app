/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.guillenphoto.com"
            }
        ]
    }
}

module.exports = nextConfig
