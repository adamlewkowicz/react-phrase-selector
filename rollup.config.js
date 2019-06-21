import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only';
import pkg from './package.json';

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        name: pkg.name,
        file: pkg.main,
        format: 'cjs'
      },
      {
        name: pkg.name,
        file: pkg.module,
        format: 'es'
      },
      {
        name: pkg.name,
        file: pkg.browser,
        format: 'umd'
      }
    ],
    plugins: [
      typescript(),
      css()
    ],
    external: ['react', 'react-dom']
  }
]