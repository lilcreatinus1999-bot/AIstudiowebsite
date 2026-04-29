import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync, createReadStream, existsSync } from 'node:fs';
import { resolve } from 'node:path';

function rootAssets() {
  const assets = {
    'hero-video.mp4': 'video/mp4',
    'untitled_fal-ai_kling-video_v2.6_pro_image-to-video_2026-04-29_19-23-29.mp4': 'video/mp4',
    'photo_2025-07-17_21-03-41.jpg': 'image/jpeg',
  };

  return {
    name: 'root-assets',
    configureServer(server) {
      Object.entries(assets).forEach(([asset, contentType]) => {
        const source = resolve(process.cwd(), asset);

        server.middlewares.use(`/${asset}`, (_req, res) => {
          if (!existsSync(source)) {
            res.statusCode = 404;
            res.end(`${asset} not found`);
            return;
          }

          res.setHeader('Content-Type', contentType);
          createReadStream(source).pipe(res);
        });
      });
    },
    closeBundle() {
      Object.keys(assets).forEach((asset) => {
        const source = resolve(process.cwd(), asset);
        const output = resolve(process.cwd(), 'dist', asset);

        if (!existsSync(source)) {
          return;
        }

        copyFileSync(source, output);
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), rootAssets()],
});
