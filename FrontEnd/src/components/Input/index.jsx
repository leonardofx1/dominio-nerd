import React from "react";

const Input = ({label, type = 'text', nameInput, register , ...rest}) => {


    return (
         
        <>
        <label htmlFor={label}>{label}</label>
        <input type={type} value={rest.value} id={label} name={nameInput} {...register(nameInput)} />
        </>
    )
}
export default Input