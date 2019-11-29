let gulp = require('gulp'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin');

// default task
gulp.task('default', ['compass', 'minify-css', 'minify-js', 'imagemin']);

// compass
gulp.task('compass', () => {
    return gulp.src('app/sass/style.scss')
        .pipe(plumber())
        .pipe(compass({
            config_file: 'app/config.rb',
            css: 'app/css',
            sass: 'app/sass'
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
})

// minify CSS
gulp.task('minify-css', ['compass'], () => {
    return gulp.src('app/css/style.css')
        .pipe(cleanCSS({
            compatibility: 'ie8' && 'ie9'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// minify JS
gulp.task('minify-js', () => {
    return gulp.src('app/js/main.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// imagemin
gulp.task('imagemin', () => {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

// browserSync task
gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

// watch task with browserSync
gulp.task('watch', ['browserSync', 'compass', 'minify-css', 'minify-js', 'imagemin'], () => {
    gulp.watch('app/sass/*.scss', ['compass']);
    gulp.watch('app/css/*.css', ['minify-css']);
    gulp.watch('app/js/*.js', ['minify-js']);

    // Reloads browserSync whenever html or js files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
