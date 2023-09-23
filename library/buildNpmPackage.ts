import { build, emptyDir } from 'https://deno.land/x/dnt@0.38.1/mod.ts';

await emptyDir('./npm');

await build({
  entryPoints: ['./src/index.ts'],
  outDir: './npm',
  shims: {
    // see JS docs for overview and more options
    deno: true,
    // undici: true,
  },
  importMap: '../deno.json',
  package: {
    // package.json properties
    name: 'your-package',
    license: 'MIT',
    version: '1.0.0',
  },
  compilerOptions: {
    'lib': ['ES2022', 'DOM'],
    'target': 'Latest',
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync('README.md', 'npm/README.md');
  },
});
