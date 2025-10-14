export const spentusAcc = () => {
    const items = document.querySelectorAll(".spentus_acc-title");
    const itemsImg = document.querySelectorAll(".spentus_acc-title-img");

    items.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            if (itemsImg[index].classList.contains("spentus_acc-title-img_active")) {
                itemsImg[index].classList.remove("spentus_acc-title-img_active");
            } else {
                itemsImg[index].classList.add("spentus_acc-title-img_active");
            }
            const descr = item.nextElementSibling;
            const currrentH = descr.offsetHeight;
            const scH = descr.scrollHeight;
            if (descr.classList.contains("spentus_acc-descr_active")) {
                descr.classList.remove("spentus_acc-descr_active");
            } else {
                descr.classList.add("spentus_acc-descr_active");
            }
            descr.style.height = `${currrentH > 0 ? 0 : scH}px`;
        });
    });
};
