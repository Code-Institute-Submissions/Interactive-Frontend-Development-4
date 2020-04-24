// Smooth scroll
$(".navbar a").on("click", function (e) {
    if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
            800
        );
    }
});

// Bottom of the page
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    // you're at the bottom of the page
    console.log("Bottom of page");
  }
};