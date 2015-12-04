module.exports = function(grunt) {

    grunt.initConfig({
        bower: grunt.file.readJSON('bower.json'),
        sass: {
            dist: {
                files: [
                    {'assets/styles/app.css': ['assets/scss/app.scss']}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('build', [
        'sass',
    ]);
};
