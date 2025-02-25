import { Transform as TransformStream } from "node:stream";

import PluginError from "./plugin-error.js";

/**
 * Safely calls a function with the provided arguments, catching and ignoring any errors that might occur.
 *
 * @param {Function} fn - The function to call.
 * @param {...*} args - The arguments to pass to the function.
 * @returns {*} The return value of the function, or undefined if an error occurred.
 */
function safeCall(fn, ...args) {
  try {
    return fn(...args);
  } catch (error) {
    // Ignore the error
  }
}

/**
 * Creates a TransformStream that applies a given transformer function to each chunk.
 *
 * @param {Function} transformer - The function to apply to each chunk. It should return a Promise that resolves to the transformed chunk.
 * @returns {TransformStream} A new TransformStream instance.
 */
function transformStream(transformer) {
  return new TransformStream({
    objectMode: true,
    transform(chunk, encoding, callback) {
      transformer(chunk, encoding, this)
        .then((value) => safeCall(callback, undefined, value)) // If the callback throws, we don't want to cause an infinite recursion.
        .catch(callback);
    },
    flush(callback) {
      callback();
    },
  });
}

/**
 * Creates a gulp plugin that applies a given function to each file.
 *
 * @param {string} name - The name of the plugin.
 * @param {Function} onFile - The function to apply to each file. It should return a Promise that resolves to the transformed file.
 * @returns {NodeJS.ReadableStream} A function that can be used as a gulp plugin.
 */
export function gulpPlugin(name, onFile) {
  return transformStream((file) => {
    if (file.isNull() || file.isDirectory()) {
      return Promise.resolve(file);
    }

    if (file.isStream()) {
      return Promise.reject(new PluginError(name, "Streaming not supported"));
    }

    try {
      return onFile(file);
    } catch (error) {
      return Promise.reject(new PluginError(name, error, { fileName: file.path, showStack: true }));
    }
  });
}

export { default as PluginError } from "./plugin-error.js";
