import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import UserForm from "./componentsForm/UserForm";


import { AiOutlineArrowRight } from "react-icons/ai";

import * as S from "./style/styles";
import Input from "../Input";
import PeopleFisica from "./componentsForm/PeopleFisica";
import Address from "./componentsForm/Address";

const CadastroUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  
  const handleform = (data) => console.log(data);
  console.log(errors);
  return (
    <S.Main>
      <S.Container>
        <S.Title>Cadastre-se</S.Title>

        <form onSubmit={handleSubmit(handleform)}>
          <S.FieldContainer>
            <S.UserDataContainer>
              <UserForm register={register} errors={errors} />
            </S.UserDataContainer>
          </S.FieldContainer>
          <S.FieldContainer>
            <S.CadastroType>
              <p>Tipos de cadastro :</p>
              <S.FieldRadio>
                <label htmlFor="pessoaTypeF">
                  <input
                    type="radio"
                    name="pessoaType"
                    value="pessoaFisica"
                    id="pessoaTypeF"
                  />
                  Pessoa Física
                </label>

                <label htmlFor="pessoaTypeJ">
                  <input
                    type="radio"
                    name="pessoaType"
                    value="pessoaJuridica"
                    id="pessoaTypeJ"
                  />
                  Pessoa Jurídica
                </label>
              </S.FieldRadio>
            </S.CadastroType>
            <S.DataUser>
              <PeopleFisica Input ={Input} register={register} errors={errors} /> 

            </S.DataUser>
          </S.FieldContainer>
         <S.FieldContainer>
          <S.DataUser>
          <Address Input={Input } register={register} errors={errors} />
            </S.DataUser>
          </S.FieldContainer>
          <S.Btn>
            cadastrar
          </S.Btn>
        </form>
      </S.Container>
    </S.Main>
  );
};

export default CadastroUser;
