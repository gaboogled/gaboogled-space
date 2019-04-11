// Static File Build Exports

module.exports = {
  staticFileGlobs: [
    '_site/css/**.css',
    '_site/fonts/**.woff',
    '_site/fonts/**.woff2',
    '_site/fonts/**.eot',
    '_site/fonts/**.ttf',
    '_site/fonts/**.otf',
    '_site/**.html',
	  '_site/**/**.html',
    '_site/**.php',
    '_site/**/**.php',
    '_site/imgs/**.*',
    '_site/js/**.js',
  ],
  stripPrefix: '_site/',
  runtimeCaching: [{
    urlPattern: '/',
    handler: 'networkFirst',
  }],
  root: '_site',
};
