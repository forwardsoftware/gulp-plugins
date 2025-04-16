import type { Options } from "browser-sync";
import type { TaskFunction } from "gulp";

/**
 * Instance of BrowserSync to be used in gulp tasks.
 */
export interface GulpBrowserSyncInstance {
  /**
   * Initializes and starts the BrowserSync server.
   * This task should be used to start the development server.
   *
   * @param done - Callback function to signal task completion
   */
  browserServe: TaskFunction;

  /**
   * Reloads the browser(s) connected to the BrowserSync server.
   * This task should be used to trigger a browser refresh after file changes.
   *
   * @param done - Callback function to signal task completion
   */
  browserReload: TaskFunction;
}

/**
 * Setup an instance of BrowserSync to be used in gulp tasks.
 * 
 * @example
  ```
  import { gulpBrowsersync } from "@forward-software/gulp-browser-sync";

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
  ```
 */
export function gulpBrowsersync(initOptions: Options): GulpBrowserSyncInstance;
