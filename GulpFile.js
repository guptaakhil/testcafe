const gulp     = require('gulp');
const testcafe = require('gulp-testcafe');

gulp.task('run-testcafe-tests', () => {
    return gulp
        .src('test/tests/GuestUser.js')
        .pipe(testcafe({ browsers: ['chrome'] }));
        
});

gulp.task('run-testcafe-tests-headless', () => {
    return gulp
        .src('test/tests/GuestUser.js')
        .pipe(testcafe({ browsers: ['chrome:headless'] }));
        
});

gulp.task('run-testcafe-tests-emulation-iphone-6', () => {
    return gulp
        .src('test/tests/GuestUser.js')
        .pipe(testcafe({ browsers: ['chrome:emulation:device=iphone 6'] }));
        
});