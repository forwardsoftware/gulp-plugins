import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import terser from "@rollup/plugin-terser";
import gulp from "gulp";
import { rimraf } from "rimraf";
import { rollup } from "rollup";

const babelConfig = {
  babelHelpers: "bundled",
  ignore: ["node_modules"],
  compact: false,
  extensions: [".js"],
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        useBuiltIns: "usage",
        modules: false,
        targets: {
          browsers: [
            "last 2 Chrome versions",
            "last 2 Safari versions",
            "last 2 iOS versions",
            "last 2 Firefox versions",
            "last 2 Edge versions",
          ],
        },
      },
    ],
  ],
  ignore: [/node_modules\/(?!(highlight\.js|marked)\/).*/],
};

const debugRollupPlugins = [resolve(), commonjs(), babel(babelConfig)];

const prodRollupPlugins = [resolve(), commonjs(), strip(), babel(babelConfig), terser()];

async function compile(variant) {
  const rollupPlugins = variant === "debug" ? debugRollupPlugins : prodRollupPlugins;
  const rollupOutputName = variant !== "prod" ? `index.${variant}.js` : `index.js`;

  const builder = await rollup({
    input: `./src/index.js`,
    plugins: rollupPlugins,
    external: ["sharp"],
  });

  await builder.write({
    file: `./dist/${rollupOutputName}`,
    name: "gulp-sharp",
    format: "esm",
  });
}

// Creates ES module bundles
export async function buildFlavors() {
  await Promise.all(["debug", "prod"].map(compile));
}

export function copyTSDefinition() {
  return gulp
    .src("src/**/*.d.ts", { base: "src/", allowEmpty: true, encoding: false })
    .pipe(gulp.dest("dist/", { mode: 0o644, dirMode: 0o755 }));
}

// npm run clean / npx gulp clean: clean 'dist' folder
export const clean = () => rimraf("./dist/");

// npm run build / npx gulp build: build plugin
export const build = gulp.series(clean, buildFlavors, copyTSDefinition);

// watch files for changes and trigger rebuild tasks
async function watchFiles() {
  gulp.watch("src/**/*.js", buildFlavors);
  gulp.watch("src/**/*.ts", buildFlavors, copyTSDefinition);
}

// npm run watch / npx gulp watch: continuously update index.html from deps
export const watch = gulp.series(build, watchFiles);

export default build;
