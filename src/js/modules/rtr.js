export const rtrAcc = () => {
    const items = document.querySelectorAll('.rtr_acc-title')
    const itemsImg = document.querySelectorAll('.rtr_acc-title-img')

    items.forEach((item,index) => {
        item.addEventListener("click",(e) => {
            if (itemsImg[index].classList.contains("rtr_acc-title-img_active")) {
                itemsImg[index].classList.remove("rtr_acc-title-img_active");
            } else {
                itemsImg[index].classList.add("rtr_acc-title-img_active");
            }
            const descr = item.nextElementSibling;
            const currrentH = descr.offsetHeight;
            const scH = descr.scrollHeight
             if (descr.classList.contains("rtr_acc-descr_active")) {
                descr.classList.remove("rtr_acc-descr_active");
            } else {
                descr.classList.add("rtr_acc-descr_active");
            }
            descr.style.height = `${currrentH > 0 ? 0 : scH}px`

        })
    })
}