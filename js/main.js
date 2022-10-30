function triggerPops() {
  let desc = document.getElementById("title-desc");
  desc.style.visibility = "visible";
  desc.classList.add("animate__bounceInUp");
}

(function () {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      let el = document.querySelector("#Rohan_Name");
      let animation = new LazyLinePainter(el, {
        ease: "easeOutSine",
        strokeWidth: 2.5,
        strokeOpacity: 1,
        strokeCap: "round",
      });
      animation.paint();
      animation.on("complete", () => {
        let paths = document.getElementsByClassName("cls-1");
        let arr = Array.from(paths);
        var i = 0;
        (function loopIt(i) {
          setTimeout(function () {
            arr[i].style.fillOpacity = 1;
            if (i < arr.length - 1) {
              loopIt(i + 1);
            } else {
              triggerPops();
            }
          }, 100);
        })(i);
      });
    }
  };
})();

AOS.init();

AOS.init({
  disable: "phone",
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// $("img").each(function () {
//   var deg = $(this).data("rotate") || 0;
//   var rotate = "rotate(" + deg + "deg)";
//   $(this).css({
//     "-webkit-transform": rotate,
//     "-moz-transform": rotate,
//     "-o-transform": rotate,
//     "-ms-transform": rotate,
//     transform: rotate,
//   });
// });

var slideUp = {
  distance: "150%",
  origin: "bottom",
  opacity: null,
};

// window.addEventListener(
//   "wheel",
//   () => {
//     // console.log(document.body.scrollTop / window.innerHeight);
//     // document.body.style.setProperty(
//     //   "--scroll",
//     //   document.body.scrollTop / window.innerHeight
//     // );

//     let image = document.getElementById("star");
//     image.style.transform =
//       "rotate(" + (document.body.scrollTop / window.innerHeight) * 360 + "deg)";
//   },
//   false
// );

var mouseX, mouseY;

(function () {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    // Use event.pageX / event.pageY here

    mouseX = event.pageX / window.innerWidth;
    mouseY = event.pageY / window.innerHeight;
  }
})();

const jsConfetti = new JSConfetti();

function shoot() {
  jsConfetti.addConfetti({
    emojis: ["⭐", "✈️", "🚀", "✨", "🤖", "💻", "🛠️"],
    emojiSize: 50,
  });
}

function tripleShoot() {
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}
