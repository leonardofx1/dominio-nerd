import React from "react";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {schema} from './schema'


import {AiOutlineArrowRight} from 'react-icons/ai'

import * as C from './styles'
import Input from "../Input";

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
                <div>
                    <form onSubmit={handleSubmit(handleform)}>
                        <C.FieldContainer>
                            <C.Entrega>
                            <Input nameInput='nameUser' type='text'  label='Nome de Usuário:' register={register}/>
                            <Input nameInput='email' type='text' label='E-mail:' register={register} />
                            {errors?.email?.message && <p> {errors.email.message}</p>}
                            <Input nameInput='password' type='password' label='Senha:' register={register} />
                            {errors?.password?.message && <p>{errors.password.message}</p>}
                            <Input nameInput='confirmPassword' type='password' label='Confirme sua senha:' register={register} />
                            {errors?.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}
                            <Input nameInput='tel' type='tel' label='Celular'  register={register}/>
                            {errors?.tel?.message && <p>{errors.tel.message}</p>}
                            </C.Entrega>
                        </C.FieldContainer>
                        <C.Btn> Avançar <AiOutlineArrowRight/></C.Btn>
                    </form>
                </div>
            </C.Container>

        </C.Main>
    )
}

export default CadastroUser