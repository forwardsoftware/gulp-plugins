import browserSync from "browser-sync";

export function gulpBrowsersync(initOptions) {
  const server = browserSync.create("gulp-browser-sync");

  function browserServe(done) {
    server.init(initOptions, done);
  }

  function browserReload(done) {
    server.reload();

    if (typeof done === 'function') {
      done();
    }
  }

  return {
    browserServe,
    browserReload,
  };
}
