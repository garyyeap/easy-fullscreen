# easy-fullscreen: Fullscreen API wrapper

### API and Usage
```javascript
import Fullscreen from 'easy-fullscreen';

var fullscreenElement = doucument.getElementById('fullscreen-container');
var fullscreenButton = document.getElementById('button');

// check if fullscreen enabled
if (Fullscreen.isEnabled) {
  fullscreenButton.onclick = function () {
    // check if is in fullscreen mode
    if (Fullscreen.isFullscreen) {
      // exit fullscreen
      Fullscreen.exit();
    } else {
      // request to enter fullscreen
      Fullscreen.request(fullscreenElement);
    }
  };
}


var onChangeHandler = function () {
  if (Fullscreen.isFullscreen) {
    console.log('Entered fullscreen');
  } else {
    console.log('Exited fullscreen');
  }
};

// subscribe to fullscreen change event
Fullscreen.on('change', onChangeHandler);

// unsubscribe from fullscreen change event
Fullscreen.off('change', onChangeHandler);

var onErrorHandler = function (e) {
  console.log(e);
};

// subscribe to fullscreen error event
Fullscreen.on('error', onErrorHandler);

// unsubscribe from fullscreen error event
Fullscreen.off('error', onErrorHandler);
```
