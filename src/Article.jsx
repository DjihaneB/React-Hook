import React from "react";

const Article = (props) => {

    // console.log(props)
    
    return(
        <>
            <h2>{props.id}- {props.title} </h2>
            {props.children}
            
        </>
    )
}
export default Article;