import sharp from "sharp";

import { gulpPlugin } from "./utils/plugin";

const SUPPORTED_EXTENSIONS = ["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"];

function handleOptions(options) {
  const { extensions, ...sharpOptions } = options || {};

  const supportedExtensions = new Set(extensions ?? SUPPORTED_EXTENSIONS);

  return { supportedExtensions, sharpOptions };
}

/**
 * Converts images to WebP format using sharp.
 *
 * @param {Object} options - Options for the conversion process.
 * @param {Array<string>} options.extensions - Array of file extensions to convert, if not specified the following extensions will be converted: ["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"].
 * @returns {Function} A function that can be used as a gulp plugin.
 */
export function webp(options) {
  const { sharpOptions, supportedExtensions } = handleOptions(options);

  return gulpPlugin("gulp-sharp-webp", async (file) => {
    // DO NOT transform unsupported (or not requested) file extensions
    if (!supportedExtensions.has(file.extname.slice(1).toLowerCase())) {
      return file;
    }

    file.contents = await sharp(file.contents).webp(sharpOptions).toBuffer();
    file.extname = ".webp";
    return file;
  });
}

/**
 * Converts images to PNG format using sharp.
 *
 * @param {Object} options - Options for the conversion process.
 * @param {Array<string>} options.extensions - Array of file extensions to convert, if not specified the following extensions will be converted: ["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"].
 * @returns {Function} A function that can be used as a gulp plugin.
 */
export function png(options) {
  const { sharpOptions, supportedExtensions } = handleOptions(options);

  return gulpPlugin("gulp-sharp-png", async (file) => {
    // DO NOT transform unsupported (or not requested) file extensions
    if (!supportedExtensions.has(file.extname.slice(1).toLowerCase())) {
      return file;
    }

    file.contents = await sharp(file.contents).png(sharpOptions).toBuffer();
    file.extname = ".png";
    return file;
  });
}

/**
 * Converts images to JPEG format using sharp.
 *
 * @param {Object} options - Options for the conversion process.
 * @param {Array<string>} options.extensions - Array of file extensions to convert, if not specified the following extensions will be converted: ["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"].
 * @returns {Function} A function that can be used as a gulp plugin.
 */
export function jpeg(options) {
  const { sharpOptions, supportedExtensions } = handleOptions(options);

  return gulpPlugin("gulp-sharp-jpeg", async (file) => {
    // DO NOT transform unsupported (or not requested) file extensions
    if (!supportedExtensions.has(file.extname.slice(1).toLowerCase())) {
      return file;
    }

    file.contents = await sharp(file.contents).jpeg(sharpOptions).toBuffer();
    file.extname = ".jpeg";
    return file;
  });
}

/**
 * Converts images to TIFF format using sharp.
 *
 * @param {Object} options - Options for the conversion process.
 * @param {Array<string>} options.extensions - Array of file extensions to convert, if not specified the following extensions will be converted: ["avif", "gif", "jpg", "jpeg", "png", "svg", "tif", "tiff", "webp"].
 * @returns {Function} A function that can be used as a gulp plugin.
 */
export function tiff(options) {
  const { sharpOptions, supportedExtensions } = handleOptions(options);

  return gulpPlugin("gulp-sharp-tiff", async (file) => {
    // DO NOT transform unsupported (or not requested) file extensions
    if (!supportedExtensions.has(file.extname.slice(1).toLowerCase())) {
      return file;
    }

    file.contents = await sharp(file.contents).tiff(sharpOptions).toBuffer();
    file.extname = ".tiff";
    return file;
  });
}
