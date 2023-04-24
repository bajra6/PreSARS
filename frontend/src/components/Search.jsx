function Search({searchString, setSearchString}) {
    return <div style={{width:"80vw", height:"4vh", display:"flex", justifyContent:"center", alignItems:"center", padding:"0.2rem 0", margin:"0.2rem 0", backgroundColor:"rgba(0, 0, 0, 0.5)", borderRadius:"0.5rem"}}>
        <img src="search.png" style={{height:"1rem", marginRight:"0.5rem"}}/>
        <input value={searchString} onChange={(event) => setSearchString(event.target.value) } placeholder="Search" style={{width:"95%", height:"60%", backgroundColor:"transparent", border:"0", borderBottom:"1px solid black", color:"white", caretColor:"white"}}/>
    </div>
}

export default Search