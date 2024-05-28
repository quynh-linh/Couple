/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  publicPath: '/_next',
                  name: 'static/media/[name].[hash].[ext]',
                },
              },
            ],
          });
        return config;
    },
};

export default nextConfig;
