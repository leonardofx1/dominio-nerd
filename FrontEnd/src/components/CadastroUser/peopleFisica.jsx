import React from "react";
import Input from "../Input";

import * as C from "./styles";

const PeopleFisica = ({ register, errors }) => {
  return (
    <>
      <C.FieldContainerUser>
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
          <C.RadioContainer>
            <C.FieldRadio>
              <label htmlFor="sexoM">
                <input type="radio" value="M" name="sexo" id="sexoM" />
                Masculino
              </label>

              <label htmlFor="sexoF">
                <input type="radio" value="F" name="sexo" id="sexoF" />
                Feminino
              </label>
            </C.FieldRadio>
          </C.RadioContainer>
        </div>
      </C.FieldContainerUser>
    </>
  );
};

export default PeopleFisica;
