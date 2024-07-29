function navbarScroll() {
    document.addEventListener("DOMContentLoaded", () =>{
        const navbar = document.getElementsByClassName("navbar");
        document.addEventListener("scroll", () =>{
            if (window.scrollY > 68){
                navbar[0].classList.add("navbar-scroll");
            } else {
                navbar[0].classList.remove("navbar-scroll");
            }
        })
    })
}

navbarScroll();