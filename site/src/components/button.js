import React from "react"

const Button = (props) => {
    return (
        <button id={props.id}>
            <a href="{props.link}">
                <img src="{props.image}" alt="{props.altText}"/>
            </a>
        </button>
    )
}

export default Button;