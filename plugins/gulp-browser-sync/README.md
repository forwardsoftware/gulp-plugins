# gulp-browser-sync

> Custom plugin for [gulp](https://gulpjs.com/) toolkit to setup a browser that can be auto-refreshed when files change using [Browsersync](https://browsersync.io/) library.

## Usage

Install this plugin and the required peer dependencies

```sh
$ npm install --save-dev gulp @forward-software/gulp-browser-sync
```

### Setup

```js
import gulp from 'gulp';
import { gulpBrowsersync } from "@forward-software/gulp-browser-sync";

//
// LIVE-RELOAD WEBSERVER
//
const { browserServe, browserReload } = gulpBrowsersync({
  host: "0.0.0.0",
  port: 8081,
  single: true, // Enable SPA-mode
  open: false,
  ui: false,
  server: {
    baseDir: PACKAGE_DIRECTORY,
  },
});

// watch files for changes and trigger rebuild tasks
async function watchFiles() {
  gulp.watch("src/assets/*", gulp.series(buildAssets, browserReload));
  gulp.watch(`src/**/*.html`, gulp.series(buildHtml, browserReload));
}

// npm run watch / npx gulp watch: continuously update index.html from deps
export const watch = gulp.series(dist, gulp.parallel(browserServe, watchFiles));
```

## License

MIT

---

Made with ✨ & ❤️ by [ForWarD Software](https://github.com/forwardsoftware) and [contributors](https://github.com/forwardsoftware/gulp-plugins/graphs/contributors)