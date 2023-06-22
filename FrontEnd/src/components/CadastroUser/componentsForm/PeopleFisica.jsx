import React from "react";


import * as S from "../style/styles";

const PeopleFisica = ({ Input , register, errors }) => {
  return (
    <>
      <S.FieldContainerUser>
        <div>
          <Input
            nameInput="fullName"
            type="text"
            label="Nome completo:"
            register={register}
          />
          {errors.fullName?.message && <p> {errors.fullName.message}</p>}

          <div>
            <Input
              nameInput="aniversario"
              type="date"
              label="Data de aniversário"
              register={register}
            />
            {errors.aniversario?.message && <p>{errors.aniversario.message}</p>}
          </div>
          <Input
            nameInput="tel"
            type="tel"
            label="Celular:"
            register={register}
          />
          {errors.tel?.message && <p>{errors.tel.message}</p>}
        </div>
        <div>
          <Input
            nameInput="tel"
            type="tel"
            label="Celular"
            register={register}
          />
          {errors.tel?.message && <p>{errors.tel.message}</p>}

          <Input
            nameInput="phone"
            type="tel"
            label="Telefone fixo:"
            register={register}
          />
          {errors.phone?.message && <p>{errors.phone.message}</p>}
   
            <S.FieldRadio>
              <label htmlFor="sexoM">
                <input type="radio" value="M" name="sexo" id="sexoM" />
                Masculino
              </label>

              <label htmlFor="sexoF">
                <input type="radio" value="F" name="sexo" id="sexoF" />
                Feminino
              </label>
            </S.FieldRadio>
        </div>
      </S.FieldContainerUser>
    </>
  );
};

export default PeopleFisica;
