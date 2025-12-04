import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export function onRouteDidUpdate() {
  if (ExecutionEnvironment.canUseDOM && window.ldfdr) {
    window.ldfdr('pageview');
  }
}

if (ExecutionEnvironment.canUseDOM) {
  window.ws2 = window.ws2 || {};

  window.ws2.leadfeeder = function () {
    (function () {
      window.ldfdr = window.ldfdr || function () {
        (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments));
      };
      (function (d, s) {
        const fs = d.getElementsByTagName(s)[0];
        function ce(src) {
          const cs = d.createElement(s);
          cs.src = src;
          cs.async = 1;
          fs.parentNode.insertBefore(cs, fs);
        }
        ce('/lftracker.js');
      })(document, 'script');
    })();
  };

  window.ws2.leadfeeder();
}