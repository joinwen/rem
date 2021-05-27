!(function (e, t) {
  var n = t.documentElement, d = e.devicePixelRatio || 1;
  function i() {
    var e = n.clientWidth / 3.75;
    n.style.fontSize = e + "px";
  }

  if (((function e() {
    t.body ? (t.body.style.fontSize = "16px") : t.addEventListener("DOMContentLoaded", e);
  })(), i(), e.addEventListener("resize", i), e.addEventListener("pageshow", function (e) {
    e.persisted && i();
  }), 2 <= d)) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    n.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      n.classList.add('hairlines')
    }
    n.removeChild(fakeBody)
  }
})(window, document);
