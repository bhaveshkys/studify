import React, { useEffect } from 'react'
import { useState } from 'react'
import { returnAnswers } from '../../firebase_functions'

const ResultDetail = ({ass}) => {
    const[ans,setAns]=useState()
    useEffect(()=>{
        const getAnswers=async()=>{
            const data = await returnAnswers(ass)
            setAns(data.docs.map((ass)=>({...ass.data(),id:ass.id})))
        }
    getAnswers()
    },[])
    console.log(ans)
  return (
    <div style={{ display:"flex",justifyContent:"space-around",height:"500px",width:"500px"}} >
        <div style={{display:"grid",gridTemplateRows:"repeat(4, 1fr)",gridTemplateColumns:"repeat(4, 1fr)"}}>
        <div style={{gridArea:"1 / 1 / 2 / 5"}}>
             {ass.question}
        </div>
        <div style={{gridArea:"2 / 1 / 5 / 5"}}>
        { !ans ? (
                <>
                    loading
                </>
            ):  (
                ans?.map((content)=>
                    <>
                    <div>student email : {content.email}</div>
                    <div>student Answer : {content.answer}</div>
                    <br /><br /><br />
                    </>
                )
            )
           }
        </div>
        </div>
    </div>
  )
}

export default ResultDetail