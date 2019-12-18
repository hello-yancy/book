ghpages.publish('_book', {
  branch: 'gh-pages',
  repo: 'https://github.com/hello-yancy/book'
}, function{
  console.log('push to origin gh-pages success')
});
