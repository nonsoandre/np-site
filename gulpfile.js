var browser = require('browser-sync').create();
var cp = require('child_process');
var shell = require('gulp-shell');
var gulp = require('gulp');

gulp.task('build', shell.task(["bundle exec jekyll build"]))
gulp.task('serve', ()=>{
    browser.init(
        {
            server: {baseDir: '_site/'}
        }
    )
    gulp.watch('_site/**/"."').on('change', browser.reload)

});

gulp.task("default", gulp.series('build', 'serve'));




 
// var messages = { 
//   jekyllBuild: '<span style="color: orange">Running:</span>$ jekyll build' 
// } 
 
// /** 
//  * Build the Jekyll Site 
//  */ 
// gulp.task('jekyll-build', shell.task('bundle exec jekyll build')) 
 
// /** 
//  * Rebuild Jekyll & do page reload 
//  */ 
// gulp.task('jekyll-rebuild', gulp.series(['jekyll-build'], function () { 
//     browser.reload() 
// })); 
 
// /** 
//  * Wait for jekyll-build, then launch the Server 
//  */ 
// gulp.task('reload', gulp.series(['jekyll-build'], function() { 
//     browser.init({ 
//         server: { 
//             baseDir: '_site', 
//         } 
//     }) 
// })) 
 
// /** 
//  * Watch scss files for changes & recompile 
//  * Watch html/md files, run jekyll & reload BrowserSync 
//  */ 
// gulp.task('watch', function () { 
//     gulp.watch(['*.html', 
//                 '_layouts/*.html', 
//                 '_includes/*.html', 
//                 '_sass/**/*.scss', 
//                 '*.md', 
//                 '_posts/*.md', 
//                 '_portfolio/*.md', 
//                 'css/*.scss'], 
//                ['jekyll-rebuild']); 
// }) 
 
 
// /** 
//  * Default task, running just `gulp` will compile the sass, 
//  * compile the jekyll site, launch BrowserSync & watch files. 
//  */ 
// gulp.task('default', gulp.series(['reload', 'watch'])) 
