/** @type {import('vite').UserConfig} */
export default {
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        minify: true
    },
}
