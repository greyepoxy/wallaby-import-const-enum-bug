module.exports = function(wallaby) {
    return {
      files: ['src/**/*.ts'],
      tests: ['test/foo.test.ts'],
  
      env: {
        type: 'node',
        runner: 'node',
      },
  
      testFramework: 'jasmine',

      compilers: {
        '**/*.ts': wallaby.compilers.typeScript({
          noResolve: false 
        })
      }
    };
  };
  