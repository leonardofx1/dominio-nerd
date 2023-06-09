import React from "react";

const Input = ({label, type = 'text', nameInput, register}) => {


    return (
         
        <>
        <label htmlFor={label}>{label}</label>
        <input type={type}  id={label} name={nameInput} {...register(nameInput)} />
        </>
    )
}
export default Input