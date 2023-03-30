module.exports = {
    apps: [
      {
        name: 'frontend',
        script: 'ionic',
        args: 'serve',
        watch: true
      },
      {
        name: 'backend',
        script: 'nodemon',
        args: 'backend/app.js',
        watch: true
      }
    ]
  };
  