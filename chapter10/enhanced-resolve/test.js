const {
    NodeJsInputFileSystem,
    CachedInputFileSystem,
    ResolverFactory 
  } = require('enhanced-resolve');
   
  const myResolver = ResolverFactory.createResolver({
    fileSystem: new CachedInputFileSystem(new NodeJsInputFileSystem(), 4000),
    alias: {
        'common': './chapter10/enhanced-resolve/common.js'
    },
    extensions: ['.js', '.json']
  });
   
  const resolveContext = {};
  const lookupStartPath = '/Users/alamozhou/code/zyl/webpack-lesson';
  const request1 = './chapter10/enhanced-resolve/test.js';   //这个是相对路径
  const request2 = 'common';    //这个是模块路径
  myResolver.resolve({}, lookupStartPath, request1, resolveContext, (err, filepath) => {
      if(err) {
          console.error(err)
      } else {
          console.log(filepath);
      }
  });
  myResolver.resolve({}, lookupStartPath, request2, resolveContext, (err, filepath) => {
    if(err) {
        console.error(err)
    } else {
        console.log(filepath);
    }
});