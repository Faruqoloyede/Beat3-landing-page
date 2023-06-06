//when the scroll is greater than 50 viewport height add the scroll-header class to the tag
const scrollheader = () => {
    const header = document.getElementById("header");
    if(this.scrollY >= 50) {
        header.classList.add("header_scroll");
    }else {
        header.classList.remove("header_scroll")
    }
}

window.addEventListener("scroll", scrollheader);

/*=============== SCROLL REVEAL ANIMATION ===============*/


