export const protocolAcc = () => {
    const items = document.querySelectorAll(".protocol__acc-list_item_title");
    const itemsImg = document.querySelectorAll(".protocol__acc-list_item_title img");

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
            if (descr.classList.contains("protocol__acc-list_item_descr_active")) {
                descr.classList.remove("protocol__acc-list_item_descr_active");
            } else {
                descr.classList.add("protocol__acc-list_item_descr_active");
            }

            descr.style.height = `${currrentH > 0 ? 0 : scH}px`;
        });
    });
};
