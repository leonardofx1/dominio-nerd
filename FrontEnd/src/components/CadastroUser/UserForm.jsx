import React from 'react';
import Input from '../Input';

function UserForm({register, errors}) {
  return (
    <>
       <div>
       <Input nameInput='email' type='text' label='e-mail:' register={register} />
         {errors.email?.message && <p> {errors.email.message}</p>}
       </div>
     <div>
     <Input nameInput='consfirmEmail' type='text' label='confirme seu e-mail:' register={register} />
         {errors.confirmEmail?.message && <p> {errors.confirmEmail.message}</p>}
     </div>
        <div>
        <Input nameInput='password' type='password' label=' crie uma senha:' register={register} />
         {errors.password?.message && <p>{errors.password.message}</p>}
        </div>
        <div> <Input nameInput='confirmPassword' type='password' label='confirme sua senha:' register={register} />
         {errors.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}</div>
         {/* <Input nameInput='nameUser' type='text'  label='Nome de Usuário:' register={register}/>
         {errors.nameUser?.message && <p> {errors.nameUser.message}</p>} */}
         {/* <Input nameInput='tel' type='tel' label='Celular'  register={register}/>
         {errors.tel?.message && <p>{errors.tel.message}</p>} */}
    </>
  )
}

export default UserForm