import React from "react";

import * as S from "./style/styles";
import Input from "../Input";
import PeopleFisica from "./componentsForm/PeopleFisica";
import Address from "./componentsForm/Address";
import UserDataForm from "./componentsForm/UserDataForm";

import useCep from "../Hook/useCep";

const CadastroUser = () => {
  const { register, handleSubmit, errors } = useCep();

  const handleform = (data) => console.log(data);
  console.log(errors);

  return (
    <S.Main>
      <S.Container>
        <S.Title>Cadastre-se</S.Title>

        <form onSubmit={handleSubmit(handleform)}>
          <S.FieldContainer>
            <S.UserDataContainer>
              <UserDataForm register={register} errors={errors} />
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
              <PeopleFisica register={register} errors={errors} />
            </S.DataUser>
          </S.FieldContainer>
          <S.FieldContainer>
            <S.DataUser>
              <Address register={register} errors={errors} />
            </S.DataUser>
          </S.FieldContainer>
          <S.Btn>Criar Conta</S.Btn>
        </form>
      </S.Container>
    </S.Main>
  );
};

export default CadastroUser;
