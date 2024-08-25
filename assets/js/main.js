// Page loading animation
window.addEventListener("load", function () {
    document.getElementById("js-preloader").classList.add("loaded");
});
//  Page Reload On Resizing
var width
window.addEventListener("resize", function () {
    width = window.innerWidth; // تحديث قيمة المتغير width
    if (width > 767 && window.innerWidth < 767) {
        location.reload();
    } else if (width < 767 && window.innerWidth > 767) {
        location.reload();
    }
});
//  Head Triggle-bar Toggle
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("triggle-bar")) {
        e.target.classList.toggle("active");
        document
            .querySelector("header .head-navbar")
            .classList.toggle("active");
    }
});
//  Head Set Scrolling True
var windowScrollTop = window.scrollY;
if (windowScrollTop >= 30) {
    document.querySelector("header").setAttribute("scrolled", true);
} else {
    document.querySelector("header").setAttribute("scrolled", false);
}
window.onscroll = (_) => {
    windowScrollTop = window.scrollY;
    if (windowScrollTop >= 30) {
        document.querySelector("header").setAttribute("scrolled", true);
    } else {
        document.querySelector("header").setAttribute("scrolled", false);
    }
};
//  Product Details
let paragraphsTriggers = document.querySelectorAll(".more-info .title h4"),
    paragraphs = document.querySelectorAll(".more-info .text .info");
paragraphsTriggers.forEach((e) => {
    e.onclick = (_) => {
        paragraphsTriggers.forEach((e) => {
            e.classList.remove("active");
        });
        e.classList.add("active");
        if (e.dataset.pra == "first") {
            paragraphs[0].classList.add("d-show");
            paragraphs[1].classList.remove("d-show");
        } else {
            paragraphs[1].classList.add("d-show");
            paragraphs[0].classList.remove("d-show");
        }
    };
});
//  Out Shop Show Slides
document.addEventListener("click", e=> {
    if(e.target.parentElement.classList.contains('choice')) {
        document.querySelector('.trending-shop .choice .active').classList.remove('active')
        e.target.classList.add('active')
        showSlides(e.target.getAttribute('cate'))
    }
})
function showSlides(cate) {
    if (cate == "all") {
        document.querySelectorAll(".trending-shop .box").forEach((e) => {
            e.classList.add("show");
        });
        return;
    }
    document.querySelectorAll(".trending-shop .box").forEach((e) => {
        e.classList.remove("show");
    });
    document.querySelectorAll(`.trending-shop .box.${cate}`).forEach((e) => {
        e.classList.add("show");
    });
}