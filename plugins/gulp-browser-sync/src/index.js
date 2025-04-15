import browserSync from "browser-sync";

export function gulpBrowsersync(initOptions) {
  const server = browserSync.create("gulp-browser-sync");

  function browserServe(done) {
    server.init(initOptions, done);
  }

  function browserReload(done) {
    server.reload();

    done();
  }

  return {
    browserServe,
    browserReload,
  };
}
