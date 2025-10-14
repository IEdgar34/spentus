export const perinatalAcc = () => {
    const items = document.querySelectorAll(".perinatal__acc-list_item_title");
    const itemsImg = document.querySelectorAll(".perinatal__acc-list_item_title img");

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

            if (descr.classList.contains("perinatal__acc-list_item_descr_active")) {
                descr.classList.remove("perinatal__acc-list_item_descr_active");
            } else {
                descr.classList.add("perinatal__acc-list_item_descr_active");
            }
            descr.style.height = `${currrentH > 0 ? 0 : scH}px`;
        });
    });
};
