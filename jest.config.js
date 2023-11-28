module.exports = {

        "presets": ["@babel/preset-react"],
        coverageProvider: 'v8',
        reporters: [
          'default',
          ['jest-coverage', { 'showLineNumbers': true }],
        ],
      
  };