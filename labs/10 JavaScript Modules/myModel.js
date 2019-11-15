(function (window) {
  'use strict';

  window.$ = window.$ || {};
  window.$.id = function(id){
    return document.getElementById(id);
  };
})(window);