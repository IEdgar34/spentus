export const faqAcc = () => {
    const items = document.querySelectorAll(".faq__acc-list_item_title");
    const itemsImg = document.querySelectorAll(".faq__acc-list_item_title img");

    items.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            if (itemsImg[index].classList.contains("active")) {
                itemsImg[index].classList.remove("active");
            } else {
                itemsImg[index].classList.add("active");
            }
            const descr = item.nextElementSibling;
            const currrentH = descr.offsetHeight;
            const scH = descr.scrollHeight;
            if (descr.classList.contains("faq__acc-list_item_descr_active")) {
                descr.classList.remove("faq__acc-list_item_descr_active");
            } else {
                descr.classList.add("faq__acc-list_item_descr_active");
            }

            descr.style.height = `${currrentH > 0 ? 0 : scH}px`;
        });
    });
};
