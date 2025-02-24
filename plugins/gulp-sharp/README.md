# gulp-sharp

> Custom plugin for [gulp](https://gulpjs.com/) toolkit to convert images using [`sharp`](https://sharp.pixelplumbing.com/) library.

## Usage

Install this plugin and the required peer dependencies

```sh
$ npm install --save-dev gulp sharp @forward-software/gulp-sharp
```

Each exported plugin can handle all formats supported by [`sharp`](https://sharp.pixelplumbing.com/#formats).

> [!NOTE]
> Unsupported files are ignored and passed through.


### JPEG

> Convert images to [JPEG](https://en.wikipedia.org/wiki/JPEG) format

```js
import gulp from 'gulp';
import { jpeg as gulpJpeg } from "@forward-software/gulp-sharp";

export default () => (
  gulp.src('src/image.jpg')
    .pipe(gulpJpeg({ quality: 90 }))
    .pipe(gulp.dest('dist'))
);
```

#### API

##### jpeg(options?)

- `options.extensions`, Array of file extensions to convert, if not specified the following will be used: `["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"]`.
- All options available to `sharp` [`jpeg` method](https://sharp.pixelplumbing.com/api-output#jpeg).


### PNG

> Convert images to [PNG](https://en.wikipedia.org/wiki/PNG) format

```js
import gulp from 'gulp';
import { png as gulpPng } from "@forward-software/gulp-sharp";

export default () => (
  gulp.src('src/image.jpg')
    .pipe(gulpPng({ palette: true }))
    .pipe(gulp.dest('dist'))
);
```

#### API

##### png(options?)

- `options.extensions`, Array of file extensions to convert, if not specified the following will be used: `["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"]`.
- All options available to `sharp` [`png` method](https://sharp.pixelplumbing.com/api-output#png).


### TIFF

> Convert images to [TIFF](https://en.wikipedia.org/wiki/TIFF) format

```js
import gulp from 'gulp';
import { tiff as gulpTiff } from "@forward-software/gulp-sharp";

export default () => (
  gulp.src('src/image.jpg')
    .pipe(gulpTiff({ quality: 90 }))
    .pipe(gulp.dest('dist'))
);
```

#### API

##### tiff(options?)

- `options.extensions`, Array of file extensions to convert, if not specified the following will be used: `["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"]`.
- All options available to `sharp` [`tiff` method](https://sharp.pixelplumbing.com/api-output#tiff).


### WebP

> Convert images to [WebP](https://developers.google.com/speed/webp/) format

```js
import gulp from 'gulp';
import { webp as gulpWebp } from "@forward-software/gulp-sharp";

export default () => (
  gulp.src('src/image.jpg')
    .pipe(gulpWebp({ preset: "drawing" }))
    .pipe(gulp.dest('dist'))
);
```

#### API

##### webp(options?)

- `options.extensions`, Array of file extensions to convert, if not specified the following will be used: `["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"]`.
- All options available to `sharp` [`webp` method](https://sharp.pixelplumbing.com/api-output#webp).


## License

MIT

---

Made with ✨ & ❤️ by [ForWarD Software](https://github.com/forwardsoftware) and [contributors](https://github.com/forwardsoftware/gulp-plugins/graphs/contributors)