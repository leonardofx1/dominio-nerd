import React from "react";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {schema} from './schema'
import UserForm from "./UserForm";


import {AiOutlineArrowRight} from 'react-icons/ai'

import * as C from './styles'
import Input from "../Input";
import PeopleFisica from "./peopleFisica";


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
                        <C.FieldContainer>
                            <C.CadastroType>
                            <p>Tipos de cadastro :</p>
                                <div>
                                   
                                 <label>
                                    <input
                                        type="radio"
                                        id="pessoaFisica"
                                        name="pessoaType"
                                        value="pessoaFisica"
                                        {...register('pessoaType')}
                                    />
                                    Pessoa Física
                                    </label>
                                </div>
                                <div>  
                                    <label>
                                    <input
                                        type="radio"
                                        id="pessoaJuridica"
                                        name="pessoaType"
                                        value="pessoaJuridica"
                                        {...register('pessoaType')}
                                    />
                                    Pessoa Jurídica
                                    </label>

                                </div>
                            </C.CadastroType>
                            <C.DataUser>
                            <PeopleFisica register={register}  errors={errors} />
                            </C.DataUser>
                        </C.FieldContainer>
                        <C.Btn> Avançar <AiOutlineArrowRight/></C.Btn>
                    </form>
               
            </C.Container>

        </C.Main>
    )
}

export default CadastroUser