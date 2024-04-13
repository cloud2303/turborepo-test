import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'commands',
      fileName: 'index'
    },
    rollupOptions:{
      external:['react', 'react-dom'],
    }
  },
  plugins:[dts({rollupTypes: true} )],
})
