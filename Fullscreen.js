var apiMap = (function () {
  const apis = {
    ms: {
      element: 'msFullscreenElement',
      enabled: 'msFullscreenEnabled',
      change: 'MSFullscreenChange',
      error: 'MSFullscreenError',
      exit: 'msExitFullscreen',
      request: 'msRequestFullscreen'
    },
    webkit: {
      element: 'webkitFullscreenElement',
      enabled: 'webkitFullscreenEnabled',
      change: 'webkitfullscreenchange',
      error: 'webkitfullscreenerror',
      exit: 'webkitExitFullscreen',
      request: 'webkitRequestFullScreen'
    },
    moz: {
      element: 'mozFullScreenElement',
      enabled: 'mozFullScreenEnabled',
      change: 'mozfullscreenchange',
      error: 'mozfullscreenerror',
      exit: 'mozCancelFullScreen',
      request: 'mozRequestFullScreen',
    },
    'standard': {
      element: 'fullscreenElement',
      enabled: 'fullscreenEnabled',
      change: 'fullscreenchange',
      error: 'fullscreenerror',
      exit: 'exitFullscreen',
      request: 'requestFullscreen'
    }
  };

  var types = ['standard', 'ms', 'webkit', 'moz'];
  var len = types.length;
  var result = null;

  for (let i = 0; i < len; i++) {
    if (document[apis[types[i]].enabled]) {
      result = apis[types[i]];
      break;
    }
  }

  return result || {};
})();

export default class Fullscreen {
  static get isEnabled () {
    delete Fullscreen.isEnabled;

    Fullscreen.isEnabled = document[apiMap.enabled];
  }

  static get isFullscreen () {
    return document[apiMap.element];
  }

  static on (eventType, callback) {
    document.addEventListener(apiMap[eventType], callback);
  }

  static off (eventType, callback) {
    document.removeEventListener(apiMap[eventType], callback);
  }

  static exit () {
    document[apiMap.exit].call(document);
  }

  static request (element) {
    element[apiMap.request].call(element);
  }
}
