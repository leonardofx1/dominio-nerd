import React, { useId } from "react";

const Input = ({label, type = 'text', nameInput, register }) => {

    const id = useId()
    return (
         
        <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={nameInput} {...register(nameInput)} />
        </>
    )
}
export default Input