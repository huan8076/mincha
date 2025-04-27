import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { fileURLToPath } from 'node:url'

export default (e: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(e.mode, process.cwd()) }
  const plugins = [
    vue({
      template: { transformAssetUrls }
    }),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: fileURLToPath(
        new URL('./src/styles/quasar-variables.sass', import.meta.url)
      )
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/
      ],
      imports: ['vue', 'vue-router', 'vue-i18n', 'pinia'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      dts: './auto-imports.d.ts'
    })
  ]
  return defineConfig({
    base: 'mincha',
    build: {
      sourcemap: true,
      terserOptions: {
        compress: {
          drop_console: e.mode === 'production'
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/index.scss" as *;'
        }
      }
    },
    server: {
      port: 9527,
      open: true
    }
  })
}
