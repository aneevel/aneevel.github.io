import React from "react"

const Button = (props) => {
    return (
        <button id={props.id}>
            <img src="{props.image}" alt="{props.altText}"/>
        </button>
    )
}

export default Button;