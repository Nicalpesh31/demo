import React, { Component } from "react";

class MappingProps extends Component{

    getComponent=(arr)=>{
        return arr.map(value =>(
            <button key={value} onClick={()=>{
                document.getElementById("ab").innerHTML="button "+ value+" is clicked";
            }}>{value}</button>
        ))
    }
    render(){
        const component=this.getComponent([1,2,3,4,5]);
        return(
            <div>
                {component}
                <h2 id="ab"></h2>
            </div>
        )
    }

}
export default MappingProps;