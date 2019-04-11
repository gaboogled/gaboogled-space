// Watch Jekyll for File Changes, Tell it to build, refresh webserver

const siteRoot = '_site';
const child = require('child_process');
const browserSync = require('browser-sync').create();

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', [
    'build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);
  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch([sassDevFiles, cssDevFiles, jsDevFiles], ['jekyll', 'serve']);
});

gulp.task('default', ['jekyll', 'serve']);
