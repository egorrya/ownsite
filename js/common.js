// on load
window.addEventListener("load", function () {

    // loader
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"

    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 100,
        // Easing
        easing: 'easeInOutCubic', // Easing pattern to use

        speedAsDuration: true, // If true, use speed as the total duration of the scroll animation
    });

});


//parallax
luxy.init();

// scroll detection
emergence.init({
    container: window,
    reset: false,
    handheld: true,
    throttle: 350,
    elemCushion: 0.4,
    offsetTop: 100,
    offsetRight: 0,
    offsetBottom: 0,
    offsetLeft: 0,
    callback: function (element, state) {
        if (state === "visible") {
            console.log("Element is visible.");
        } else if (state === "reset") {
            console.log("Element is hidden with reset.");
        } else if (state === "noreset") {
            console.log("Element is hidden with NO reset.");
        }
    },
});