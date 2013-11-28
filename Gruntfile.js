module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 3000,
                    // default 'localhost' setting doesn't work when running under vagrant
                    hostname: '*'
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s)
    grunt.registerTask('default', []);
};
