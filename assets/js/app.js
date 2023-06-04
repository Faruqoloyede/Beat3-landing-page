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
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home_header, .section_title`,{delay: 600})
sr.reveal(`.home_footer`,{delay: 700})
sr.reveal(`.home_img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor_img, .product_card, .footer_logo, .footer_content, .footer_copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs_data,`,{origin: 'left', interval: 100})
sr.reveal(`.specs_img, .discount_img`,{origin: 'right'})
sr.reveal(`.case_img`,{origin: 'top'})
sr.reveal(`.case_data`)

