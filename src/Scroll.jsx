import React from "react";

const Scroll =(props)=>{
    return (
        <div style={{overflowY: 'scroll', border:'5px solid black', height: "50em", margin: '1em'}}>
            {props.children}
        </div>
    )

}

export default Scroll;




