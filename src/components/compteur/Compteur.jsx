import React,{useState} from "react";
const Comp=()=>{
    var [comp,setComp]=useState(0)
    return(
      <div>
        <button onClick={()=>setComp(comp+1)}>+</button>
        <button onClick={()=>setComp(comp-1)}>-</button>
        <h2>{comp}</h2>
      </div>
        
      
      
    )
}
export default Comp;