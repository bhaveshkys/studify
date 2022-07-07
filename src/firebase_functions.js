import {db,auth} from "./firebase"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
const studentRef= collection(db,"students")
const assignmentRef=collection(db,"assignment")

export const registerNewUser=async(dbDetails,email,pass ,setSucess)=>{
createUserWithEmailAndPassword(auth,email,pass)
.then((userCred)=>{
    console.log(userCred)
    console.log(userCred.user)
    addDoc(studentRef,dbDetails)
    setSucess(true)
})
.catch((e)=>{
    console.log(e.code)
    console.log(e.message)
    setSucess(false)
})
}
export const signInStudent=async(email,pass,setSucess)=>{
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      console.log(userCredential.user);
      setSucess(true)
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      setSucess(false)
    });
}
export const returnUserInfo=async(email)=>{
    const myQuery =query(studentRef,where("email","==",email))
    const mySnapShot=await getDocs(myQuery)
    let arr=[]
    mySnapShot.forEach((doc)=>{
        arr.push({...doc.data(), id: doc.id})
      })
    return arr
}
export const returnAssignments=async()=>{
const data=await getDocs(assignmentRef)
/* const arr=[data.docs.map((ass)=>({...ass.data(),id:ass.id}))] */
return data
}

export const returnStudents=async()=>{
  const data=await getDocs(studentRef)
  return data
}
export const uploadAnswer=async(ass,info,ans)=>{
  const answer={
    email:info.email,
    answer:ans
  }
const ansRef  = collection(db,`assignment/${ass.id}/answers`)
addDoc(ansRef,answer)
/* 
const q=query(collection(db,`assignment/${ass.id}/answers`))
const myQuery=await getDoc(q)
console.log(myQuery) */
}
export const teacherLogIn=async(email,pass,setSucess)=>{
  const teacherRef=collection(db,"teacher")
  const myQuery =query(teacherRef,where("email","==",email))
  const mySnapShot=await getDocs(myQuery)
  if(!mySnapShot.empty){
    signInStudent(email,pass,setSucess)
  }
  else{
    setSucess(false)
  }
}
export const returnAnswers=async(ass)=>{
const ansRef  = collection(db,`assignment/${ass.id}/answers`)
const data=await getDocs(ansRef)
return data
}