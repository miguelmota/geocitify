(function(root) {

  var interval;

  var geocitify = function(opts) {
    if (opts && typeof opts !== 'object') {
      throw new Error('Options must be an object');
    }

    opts = opts || {};

    var t = opts.interval || 100;

    interval = setInterval(function(){
      [].forEach.call(document.querySelectorAll('*'), function(el, i) {
        el.style.outline = '2px solid #' + (~~(Math.random()*(1<<24))).toString(16);
      });
    }, t);
  };

  geocitify.stop = function() {
    window.clearInterval(interval);
    [].forEach.call(document.querySelectorAll('*'), function(a) {
      a.style.outline = 'none';
    });
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = geocitify;
    }
    exports.geocitify = geocitify;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return geocitify;
    });
  } else {
    root.geocitify = geocitify;
  }

})(this);

