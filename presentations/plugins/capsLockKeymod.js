// Enable support for Logitech Spotlight
//
// If caps-lock is enabled:
// - remap LeftArrow (37) to NavigatePrev
// - remap RightArrow (39) to NavigateNext

;(function () {
  document.addEventListener(
    'keydown',
    function (event) {
      if (!event.getModifierState('CapsLock')) {
        return false
      }

      switch (event.keyCode) {
        case 37:
          event.preventDefault()
          event.stopImmediatePropagation()
          Reveal['navigatePrev']()
          break
        case 39:
          event.preventDefault()
          event.stopImmediatePropagation()
          Reveal['navigateNext']()
          break
      }
    },
    false
  )
})()