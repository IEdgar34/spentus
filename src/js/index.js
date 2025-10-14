import { menu } from "./modules/menu";
import { tabs } from "./modules/abouttabs";
import { formulaAcc } from "./modules/formulaAcc";
import { rtrAcc } from "./modules/rtr";
import { spentusAcc } from "./modules/spentus";
import { perinatalAcc } from "./modules/perinatal";
import { protocolAcc } from "./modules/protocol";
import { faqAcc } from "./modules/faq";
window.addEventListener("DOMContentLoaded", () => {
    menu();
    tabs();
    formulaAcc();
    rtrAcc();
    spentusAcc()
    perinatalAcc();
    protocolAcc();
    faqAcc();
});
