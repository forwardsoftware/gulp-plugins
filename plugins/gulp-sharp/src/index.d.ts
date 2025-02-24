import type {
  JpegOptions as SharpJpegOptions,
  PngOptions as SharpPngOptions,
  TiffOptions as SharpTiffOptions,
  WebpOptions as SharpWebpOptions,
} from "sharp";

export interface WebpOptions extends SharpWebpOptions {
  extensions?: string[];
}

/**
 * Converts images to WebP format using sharp.
 * 
 * @example
  ```
  import gulp from 'gulp';
  import { webp as gulpWebp } from "@forward-software/gulp-sharp";

  export default () => (
    gulp.src('src/image.jpg')
      .pipe(gulpWebp({ preset: "drawing" }))
      .pipe(gulp.dest('dist'))
  );
  ```
 */
export function webp(options: WebpOptions): NodeJS.ReadableStream;

export interface PngOptions extends SharpPngOptions {
  extensions?: string[];
}

/**
 * Converts images to png format using sharp.
 * 
 * @example
  ```
  import gulp from 'gulp';
  import { png as gulpPng } from "@forward-software/gulp-sharp";

  export default () => (
    gulp.src('src/image.jpg')
      .pipe(gulpPng({ palette: true }))
      .pipe(gulp.dest('dist'))
  );
  ```
 */
export function png(options: PngOptions): NodeJS.ReadableStream;

export interface JpegOptions extends SharpJpegOptions {
  extensions?: string[];
}

/**
 * Converts images to jpeg format using sharp.
 * 
 * @example
  ```
  import gulp from 'gulp';
  import { jpeg as gulpJpeg } from "@forward-software/gulp-sharp";

  export default () => (
    gulp.src('src/image.jpg')
      .pipe(gulpJpeg({ quality: 90 }))
      .pipe(gulp.dest('dist'))
  );
  ```
 */
export function jpeg(options: JpegOptions): NodeJS.ReadableStream;

export interface TiffOptions extends SharpTiffOptions {
  extensions?: string[];
}

/**
 * Converts images to TIFF format using sharp.
 * 
 * @example
  ```
  import gulp from 'gulp';
  import { tiff as gulpTiff } from "@forward-software/gulp-sharp";

  export default () => (
    gulp.src('src/image.jpg')
      .pipe(gulpTiff({ quality: 90 }))
      .pipe(gulp.dest('dist'))
  );
  ```
 */
export function tiff(options: TiffOptions): NodeJS.ReadableStream;
