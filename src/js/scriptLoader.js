function scriptLoader( url, onComplete, onError ) {
  var r = false;
  var t = document.getElementsByTagName('script')[0];
  var s = document.createElement('script');

  s.type = 'text/javascript';
  s.src = url;
  s.async = true;
  s.onload = s.onreadystatechange = function () {
    if (!r && (!this.readyState || this.readyState === 'complete')) {
      r = true;
      if (typeof onComplete === 'function') onComplete();
    }
  };
  s.onerror = s.onabort = onError;
  t.parentNode.insertBefore(s, t);
}

module.exports = scriptLoader;