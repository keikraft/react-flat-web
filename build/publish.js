const ghPages = require('gh-pages');
const config = require('./build.config');

process.stdout.write('Publishing React Flat Web...');
ghPages.publish(config.dist.publish.src, (err) => {
  if (err) {
    throw err;
  }
  process.stdout.write('Published!');
});