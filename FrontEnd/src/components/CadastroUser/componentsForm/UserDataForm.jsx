import React from "react";
import Input from "../../Input";

function UserDataForm({ register, errors }) {
  return (
    <>
      <div>
        <Input
          nameInput="email"
          type="text"
          label="e-mail:"
          register={register}
        />
        {errors.email?.message && <p> {errors.email.message}</p>}
      </div>
      <div>
        <Input
          nameInput="confirmEmail"
          type="text"
          label="confirme seu e-mail:"
          register={register}
        />
        {errors.confirmEmail?.message && <p> {errors.confirmEmail.message}</p>}
      </div>
      <div>
        <Input
          nameInput="password"
          type="password"
          label=" crie uma senha:"
          register={register}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>
      <div>
        <Input
          nameInput="confirmPassword"
          type="password"
          label="confirme sua senha:"
          register={register}
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword.message}</p>
        )}
      </div>
    </>
  );
}

export default UserDataForm;
