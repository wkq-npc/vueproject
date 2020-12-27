import Center from "../../views/center/center.vue"
// 我的课程
import EndCourse from "../../views/center/myCourse/endCourse.vue"
import Allbill from "../../views/center/myCourse/allBill.vue"
import Unpaid from "../../views/center/myCourse/unpaid.vue"
import Studing from "../../views/center/myCourse/learning.vue"

//学员管理
import Stumanage from "../../views/center/management/Student.vue";
import coupon from "../../views/center/management/mycoupons.vue"
import Connect from "../../views/center/management/connect.vue"
import About from "../../views/center/management/about.vue"
import Stu from "../../views/student/student_detail.vue"
// import Submit from "../../views/result/submit_successfully.vue"
// import Failue from "../../views/result/payment_failure.vue"



let center=[
    {
        path:"/center",
        component:Center
    },
  
    //我的课程
    {
        path:"/unpaid",
        component:Unpaid
    },
    {
        path:"/studing",
        component:Studing
    },
    {
        path:"/endCourse",
        component:EndCourse
    },
    {
        path:"/allbill",
        component:Allbill
    },
    //学员管理
    {
        path:"/stumanage",
        component:Stumanage
    },
    {
        path:"/studentmanage/:id",
        component:Stu
    },
    {   path:"/coupons",
        component:coupon
    },
    {
        path:"/connection",
        component:Connect
    },
    {
        path:"/about",
        component:About
    },
]
export default center