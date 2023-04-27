function Sort({ groupByCategory, setGroupByCategory}) {
    return <div style={{height:"100%", width:"10vw", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"initial", backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"0.5rem", marginLeft:"1rem", padding:"0.3rem"}}>
        <div style={{backgroundColor:"white", borderRadius:"0.5rem", width:"100%", padding:"0.2rem 0", marginBottom:"1rem" ,fontWeight:"bold"}}>
            Select origin of symptom
        </div>
        <div onClick={() => setGroupByCategory("")} style={{ cursor:"pointer", backgroundColor:"white", borderRadius:"0.5rem", width:"100%", padding:"0.2rem 0", marginBottom:"1rem" ,fontWeight:"bold"}}>
            Clear
        </div>
        <div onClick={() => setGroupByCategory("head")} style={{ cursor:"pointer", backgroundColor:groupByCategory=="head"?"green":"white", color:groupByCategory=="head"?"white":"black", borderRadius:"0.5rem", width:"100%", padding:"0.2rem 0", marginBottom:"1rem" ,fontWeight:"bold"}}>
            Head
        </div>
        <div onClick={() => setGroupByCategory("body")} style={{ cursor:"pointer", backgroundColor:groupByCategory=="body"?"green":"white", color:groupByCategory=="body"?"white":"black", borderRadius:"0.5rem", width:"100%", padding:"0.2rem 0", marginBottom:"1rem" ,fontWeight:"bold"}}>
            Whole Body
        </div>
        <div onClick={() => setGroupByCategory("limb")} style={{ cursor:"pointer", backgroundColor:groupByCategory=="limb"?"green":"white", color:groupByCategory=="limb"?"white":"black", borderRadius:"0.5rem", width:"100%", padding:"0.2rem 0", marginBottom:"1rem" ,fontWeight:"bold"}}>
            Limbs
        </div>
        <div onClick={() => setGroupByCategory("chest")} style={{ cursor:"pointer", backgroundColor:groupByCategory=="chest"?"green":"white", color:groupByCategory=="chest"?"white":"black", borderRadius:"0.5rem", width:"100%", padding:"0.2rem 0", marginBottom:"1rem" ,fontWeight:"bold"}}>
            Chest
        </div>
        <div onClick={() => setGroupByCategory("excretion")} style={{ cursor:"pointer", backgroundColor:groupByCategory=="excretion"?"green":"white", color:groupByCategory=="excretion"?"white":"black", borderRadius:"0.5rem", width:"100%", padding:"0.2rem 0", marginBottom:"1rem" ,fontWeight:"bold"}}>
            Excretion
        </div>
    </div>
}

export default Sort