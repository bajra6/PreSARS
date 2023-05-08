function Banner ({symptoms, updateSymptoms, disease, doctor, shouldDiagnose, language}) {
    function symptomUI(ind) {
        return symptoms[ind].isSelected ? <div style={{backgroundColor:"black", margin:"0.3rem", padding:"0.2rem 0.4rem", cursor:"pointer", borderRadius:"0.5rem", display:"inline-block", color: "white"}} onClick={() => handleClick(ind)}>
            {language=="Eng"?symptoms[ind].name:symptoms[ind].tamil}
        </div>:<></>
    }

    function handleClick(ind) {
        let newArr = [...symptoms]
        newArr[ind].isSelected = !newArr[ind].isSelected
        updateSymptoms(newArr)
    }

    return <div style={{height:"20vh", width:"80vw", backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"0.5rem", display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
        <div style={{height:"80%", width:"55%", backgroundColor:"white", display:"flex", borderRadius:"0.5rem", alignItems:"center", justifyContent:"space-evenly"}}>
            <h1 style={{width:"40%", height:"90%", textAlign:"right"}}>Your Symptoms are:</h1>
            <div style={{width:"55%", height:"90%", overflowY:"scroll", backgroundColor:"rgba(0, 0, 0, 0.3)", borderRadius:"0.5rem"}}>{symptoms.map((symptom, ind) => symptomUI(ind))}</div>
        </div>
        <div style={{height:"80%", width:"35%", backgroundColor:"white", borderRadius:"0.5rem", display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
            <div style={{fontSize:"1.5rem", fontWeight:"bold"}}>{disease? "You have "+disease:"Welcome to PreSARS"}</div>
            {doctor?<div>Please visit a {doctor}</div>:<></>}
            <button style={{backgroundColor:"green", color:"white", borderRadius:"0.5rem", padding:"0.25rem 0.5rem", width:"8rem"}} onClick={() => shouldDiagnose()}>Diagnose</button>
        </div>
    </div>
}

export default Banner