import React from "react";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {schema} from './schema'
import UserForm from "./UserForm";


import {AiOutlineArrowRight} from 'react-icons/ai'

import * as C from './styles'


const CadastroUser = () => {
    const  {
      register,
      handleSubmit,
       formState: {errors}
    } = useForm({
        resolver: zodResolver(schema)
    })

    const handleform = (data) => console.log(data)
    console.log(errors)
    return (

        <C.Main>
            <C.Container>
                <C.Title>
                    Cadastre-se
                </C.Title>
            
                    <form onSubmit={handleSubmit(handleform)}>

                        <C.FieldContainer>
                            <C.Entrega>
                            <UserForm register={register} errors={errors}/>
                            </C.Entrega>
                        </C.FieldContainer>
                        <C.Btn> Avançar <AiOutlineArrowRight/></C.Btn>
                    </form>
               
            </C.Container>

        </C.Main>
    )
}

export default CadastroUser