import * as yup from "yup"
const newStudentSchema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required(),
    password:yup.string().required(),
    rollnumber:yup.string().required(),
})
export default newStudentSchema