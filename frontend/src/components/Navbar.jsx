function Navbar({setLanguage}) {
    return <div style={{width:"100vw", height:"3rem", position:"absolute", top:"0", left:"0", textAlign:"left", padding:"0.5rem 2rem 0.5rem 2rem", display:"flex", justifyContent:"space-between"}}>
        <div style={{display:"flex", alignItems:"center"}}>
            <img src="./logo.jpg" style={{height:"3rem", width: "3rem"}}></img>
            <h2 style={{marginLeft:"1rem"}}>PreSARS</h2>
        </div>
        <div>
            <img onClick={() => setLanguage("Tam")} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png" style={{height:"2rem", marginRight:"1rem", cursor:"pointer"}}/>
            <img onClick={() => setLanguage("Eng")} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" style={{height:"2rem", marginRight:"3rem", cursor:"pointer"}}/>
        </div>
    </div>
}

export default Navbar