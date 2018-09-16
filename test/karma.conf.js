module.exports = function(config) {
  config.set({
    basePath: './../',
    frameworks: ['jasmine'],
    plugins:[
     require('karma-jasmine'),
     require('karma-phantomjs-launcher'),
    ],
    browsers:['PhantomJS'],
    files: ['./test/spec/**/*.js', './src/**/*.js']
  });
};
