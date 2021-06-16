import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';

const external = (id) => !id.startsWith('/') && !id.startsWith('.');

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [typescript({ exclude: 'example/*' }), getBabelOutputPlugin({ presets: ['@babel/preset-env'] }), image({ limit: 1000 })],
  external
};
