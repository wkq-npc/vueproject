import Course from "../../views/course/Course.vue"
import More from "../../views/course/more.vue"
import Detail from "../../views/detail/detail.vue"
import students from "../../views/buyCourse/students.vue";
import newstu from  "../../views/buyCourse/newStudents.vue"
import campus from "../../views/buyCourse/campus.vue";

let course=[
    {
        path:"/course",
        component:Course
    },
    {
        path:"/more",
        component:More
    },
    {
        path:"/detail/:id",
        name:"datail",
        component:Detail
    },
    {
        path:"/students",
        component:students
    },
{
path:"/newstudents",
component:newstu

},
    {
        path:"/campus",
        component:campus
    }

]
export default course