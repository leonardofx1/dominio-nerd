import React from "react";
import {useForm} from 'react-hook-form'
import {AiOutlineArrowRight} from 'react-icons/ai'

import * as C from './styles'
import Input from "../Input";

const CadastroUser = () => {
    const  {
      register,
      handleSubmit,
       formState: {errors}
    } = useForm()
    const handleform = (data) => console.log(data)

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
                            <Input nameInput='password' type='password' label='Senha:' register={register} />
                            <Input nameInput='confirmPassword' type='password' label='Confirme sua senha:' register={register} />
                            <Input nameInput='tel' type='tel' label='Celular'  register={register}/>
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