export const menu = () => {
    const menuButton = document.querySelector(".burger");
    const menu = document.querySelector(".nav-wrapper");
    const wrapper = document.querySelector(".wrapper");
    const menuItems = document.querySelectorAll(".nav-wrapper_list-item");

    menuButton.addEventListener("click", menuToggle);

    function menuToggle() {
        menu.classList.toggle("nav-wrapper_active");
        menuButton.classList.toggle("burger_active");
        wrapper.classList.toggle("overflow");
        document.body.classList.toggle("overflow");

        if (window.innerWidth <= 1000) {
            menuItems.forEach((item) => item.addEventListener("click", menuToggle));
        }
    }
};
