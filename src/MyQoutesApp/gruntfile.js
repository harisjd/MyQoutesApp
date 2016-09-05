/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        uglify: {
            my_target : {
                files: {
                    // this means that we want grunt to take all the js files in 
                    // scripts folder and convert them into minified version and 
                    // add that files as app.js into wwwroot folder
                    'wwwroot/app.js' : ['scripts/app.js', 'scripts/**/*.js']
                }
            }
        },
        // watch is configured to look for the changes in the js files in the scripts
        // and if there is any then it will update the app.js in the wwwroot folder
        watch: {
            scripts: {
                files: ['scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'watch'])
};