
const scrollToTop = () => {
const scrollToTopButton = document.querySelector('#scrollToTopButton');

scrollToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);

    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });
    seamless.scrollIntoView(document.querySelector(".header"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
});

};

scrollToTop()