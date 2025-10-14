export const tabs = () => {
    const tabsButtons = document.querySelectorAll(".about__tabs_tab-list_item");
    const tabsContent = document.querySelectorAll(".about__tabs-content_list");
    const tabsContentImg = document.querySelectorAll(".about__tabs_tab-list_item_img");

    tabsButtons.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            tabsButtons.forEach((itemm) => itemm.classList.remove("about__tabs_tab-list_item_active"));
            tabsContent.forEach((itemm) => itemm.classList.remove("about__tabs-content_list_active"));
            tabsContentImg.forEach((itemm) => itemm.classList.remove("about__tabs_tab-list_item_img_active"));
            tabsButtons[index].classList.add("about__tabs_tab-list_item_active");
            tabsContent[index].classList.add("about__tabs-content_list_active");
            tabsContentImg[index].classList.add("about__tabs_tab-list_item_img_active");
        });
    });
};
