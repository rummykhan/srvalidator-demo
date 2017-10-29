try {
  window.$ = window.jQuery = require('jquery');
  require('bootstrap/dist/css/bootstrap.min.css');
  require('bootstrap');
} catch (err) {
  console.log(err)
}