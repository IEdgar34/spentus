export const formulaAcc = () => {
    const items = document.querySelectorAll(".wrap");
    const itemsimg = document.querySelectorAll(".wrap img");
    const textWrapper = document.querySelectorAll(".formula__content_txt-wrapper-text");

    items.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            item.querySelector(".wrap-img").classList.toggle("wrap-img_active");
            const parent = item.closest(".formula__content_txt-wrapper");
            const h = parent.querySelector(".formula__content_txt-wrapper-text").scrollHeight;
            const currentH = parent.querySelector(".formula__content_txt-wrapper-text").offsetHeight;
            parent.querySelector(".formula__content_txt-wrapper-text").classList.toggle("formula__content_txt-wrapper-text_active");
            parent.querySelector(".formula__content_txt-wrapper-text").style.height = `${currentH > 0 ? 0 : h}px`
        });
    });
};
