import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            imports: ['vue', 'vue-router']
        }),
        AutoImport({
            imports: ['vue', 'vue-router']
        })
    ],
    resolve: {
        // 配置路径别名
        alias: {
            // __dirname 是NodeJS的一个全局变量，它表示当前正在执行的模块所在的目录的绝对路径
            '@': resolve(__dirname, './src')
        }
    }
})
