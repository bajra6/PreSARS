import { useState } from "react"
import { useEffect } from "react"

function Symptoms({symptoms, updateSymptoms, searchString, groupByCategory, language}) {
    function symptomUI(ind) {
        return symptoms[ind].isSelected==false && symptoms[ind].name.toLowerCase().includes(searchString) && symptoms[ind].category.includes( groupByCategory) ?<div style={{backgroundColor:"black", margin:"0.5rem", padding:"0.2rem 0.4rem", cursor:"pointer", borderRadius:"0.5rem", display:"inline-block", color:"white"}} onClick={() => handleClick(ind)}>
            {language=="Eng"?symptoms[ind].name:symptoms[ind].tamil}
        </div>:<></>
    }

    function handleClick(ind) {
        let newArr = [...symptoms]
        newArr[ind].isSelected = !newArr[ind].isSelected
        updateSymptoms(newArr)
    }

    return <div style={{height:"55vh", width:"80vw", backgroundColor:"rgba(0, 0, 0, 0.5)", overflowY: "scroll", borderRadius:"0.5rem"}}>
        {symptoms.map((symptom, ind) => symptomUI(ind))}
    </div> 
}



export default Symptoms