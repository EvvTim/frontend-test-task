import React from "react";

function Input ({labelContent, inputType, inputName, onChange}) {
    return (
        <label>{labelContent} <input type={inputType} name={inputName} onChange={onChange}/></label>
    )
}

export default Input
