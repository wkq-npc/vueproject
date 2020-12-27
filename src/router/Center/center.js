
import Center from "../../views/Centre/center.vue"
import About from "../../views/Centre/management/about.vue"
import Consult from "../../views/Centre/management/consult.vue"
import Student from "../../views/Centre/management/Student.vue"
import Unpaid from "../../views/Centre/mycoures/unpaid.vue"
import Studenting from "../../views/Centre/mycoures/studenting.vue"
import Submit from "../../views/result/submit_successfully.vue"
import Failue from "../../views/result/payment_failure.vue"

import Mycoupons from "../../views/Centre/management/mycoupons.vue"
import Zhifu from "../../views/Centre/mycoures/zhifu.vue"


var CenterRouter = [
    {
        path:"/center",
        component:Center,
    },
    {
        path:"/center/about",
        component:About,
    },
    {
        path:"/center/consult",
        component:Consult,
    },
    {
        path:"/center/student",
        component:Student,
    },
    {
        path:"/center/unpaid",
        component:Unpaid,
    },
    {
        path:"/center/studenting",
        component:Studenting,
    },
    {
        path:"/center/submit",
        component:Submit,
    },
    {
        path:"/center/failue",
        component:Failue,
    },
    {
        path:"/center/mycoupons",
        component:Mycoupons,
    },
    {
        path:"/center/unpaid",
        name:"zhifu",
        component:Zhifu,
    },
    
    
];
export default CenterRouter;